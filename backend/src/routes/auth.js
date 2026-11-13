import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const cookieOpts = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.COOKIE_SAMESITE || "lax",
};

router.post("/login", async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    if (!usuario || !contrasena)
      return res.status(400).json({ error: "Faltan datos" });

    const [rows] = await pool.query(
      "SELECT id, user_name, full_name, role, status, password_hash FROM users WHERE user_name = ? LIMIT 1",
      [usuario]
    );
    const user = rows[0];
    const ok = user?.password_hash && (await bcrypt.compare(contrasena, user.password_hash));
    if (!ok) 
      return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    if (user.status !== "active")
      return res.status(403).json({ error: "Cuenta no disponible" });

    await pool.query("UPDATE users SET last_login_at = NOW() WHERE id = ?", [user.id]);

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, { ...cookieOpts, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({
      user: { id: user.id, user_name: user.user_name, full_name: user.full_name, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

router.get("/me", requireAuth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, user_name, full_name, role FROM users WHERE id = ? AND status = 'active'",
      [req.user.id]
    );
    if (!rows[0]) return res.status(401).json({ error: "No autenticado" });
    res.json({ user: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", cookieOpts);
  res.json({ ok: true });
});

export default router;