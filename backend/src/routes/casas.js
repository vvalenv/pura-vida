import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET /api/casas -> lista de casas con sus comodidades e imágenes
router.get('/', async (req, res) => {
  try {
    // 1) Casas + detalles + precio "desde"
    const [units] = await pool.query(`
      SELECT u.id, u.name, u.slug, u.summary, u.description,
         u.capacity, u.min_guests, u.min_nights,
         u.base_price AS price_from,
         h.rooms, h.bathroom_type
        FROM units u
        JOIN properties p ON p.id = u.property_id AND p.type = 'casa'
        LEFT JOIN house_details h ON h.unit_id = u.id
        WHERE u.active = 1
        ORDER BY u.sort_order, u.id
    `);

    if (units.length === 0) return res.json([]);
    const ids = units.map((u) => u.id);

    // 2) Comodidades de todas las casas en una sola consulta
    const [amenities] = await pool.query(
      `SELECT ua.unit_id, a.name, a.icon, ua.is_highlight
       FROM unit_amenities ua
       JOIN amenities a ON a.id = ua.amenity_id
       WHERE ua.unit_id IN (?)
       ORDER BY ua.sort_order`,
      [ids]
    );

    // 3) Imágenes de todas las casas en una sola consulta
    const [images] = await pool.query(
      `SELECT unit_id, url, alt
       FROM unit_images
       WHERE unit_id IN (?)
       ORDER BY sort_order`,
      [ids]
    );

    // 4) Armar el JSON final (mysql2 devuelve DECIMAL como texto, por eso Number)
    const casas = units.map((u) => ({
      ...u,
      price_from: Number(u.price_from),
      amenities: amenities
        .filter((a) => a.unit_id === u.id)
        .map((a) => ({ name: a.name, icon: a.icon, is_highlight: Boolean(a.is_highlight) })),
      images: images
        .filter((i) => i.unit_id === u.id)
        .map((i) => ({ url: i.url, alt: i.alt })),
    }));

    res.json(casas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'No se pudieron cargar las casas' });
  }
});

export default router;