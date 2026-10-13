import '../styles/main-nosotros.css'
export const Nosotros = () => {
    return (
        <main className="main-nosotros">
            <section className="section1-nosotros">
                <div className="content-sec1-us">
                    <p className="section1-nosotros-text">Desde 2015</p>
                    <h1 className="section1-nosotros-title">Nuestra <span>historia</span></h1>
                    <p className="section1-nosotros-subtext">"Un viaje por Centroamérica en 2014 nos cambió la mirada. 
                        <span>Volvimos con una idea, una parcela frente al mar, y muchas ganas de construir algo con las manos."</span></p>
                </div>
            </section>
            <section className="section2-nosotros">
                <div className="content-section2-nosotros">
                    <header className="header-section2-nosotros">
                        <p className="section1-nosotros-text">Como empezó todo</p>
                        <h2 className="section1-nosotros-title">El deseo de sentirnos <span>en casa</span></h2>
                    </header>
                    <article className='article-section2-gast'>
                        <p>Pura Vida nació en 2015, a partir de un viaje de mochila por Centroamérica que nos enseñó una manera diferente de mirar la vida. 
                            En Costa Rica descubrimos una forma de existir más simple, y quisimos que esas "buenas vibras" se volvieran nuestro día a día.</p>
                        <p>Con el deseo profundo de trasladar esa experiencia a nuestra rutina, llegamos a un lugar frente al mar en el sur de Mar del Plata que llevaba años sin uso. 
                            Lo fuimos construyendo de a poco, con materiales reciclados, mucho trabajo y mucho corazón.</p>
                        <p>Hoy entendemos que Pura Vida no es solamente una playa, sino los vínculos, la música y la vida compartida. 
                            Creamos este rincón con la intención irrenunciable de formar una comunidad donde las personas puedan conectar con los demás, con la naturaleza y con ellos mismos.</p>
                    </article>
                </div>
                <ol className="timeline-nosotros">
                    <li className="timeline__item-nosotros">
                        <h3 className="timeline__title-nosotros">El viaje inspirador</h3>
                        <span className="timeline__dot-nosotros" aria-hidden="true"></span>
                        <p className="timeline__text-nosotros">
                            Todo comenzó con un viaje de mochila por Centroamérica. La estadía de
                            3 meses en Costa Rica y su clásica frase "Pura vida, mae" plantaron la
                            semilla de lo que vendría después.
                        </p>
                    </li>
                    <li className="timeline__item-nosotros">
                        <h3 className="timeline__title-nosotros">2015 el nacimiento</h3>
                        <span className="timeline__dot-nosotros" aria-hidden="true"></span>
                        <p className="timeline__text-nosotros">
                            Se materializa el deseo de trasladar la experiencia del viaje a la vida
                            cotidiana, naciendo este rincón en el sur de Mar del Plata.
                        </p>
                    </li>
                    <li className="timeline__item-nosotros">
                        <h3 className="timeline__title-nosotros">El gran punto de inflexión</h3>
                        <span className="timeline__dot-nosotros" aria-hidden="true"></span>
                        <p className="timeline__text-nosotros">
                            La pandemia cambió el rumbo y Pura Vida explotó como comercio. La
                            necesidad de la gente de huir del cemento y conectar con la naturaleza
                            transformó el lugar en un refugio clave de mar, amigos y música.
                        </p>
                    </li>
                    <li className="timeline__item-nosotros timeline__item--current">
                        <h3 className="timeline__title-nosotros">Hoy la esencia intacta</h3>
                        <span className="timeline__dot-nosotros" aria-hidden="true"></span>
                        <p className="timeline__text-nosotros">
                            Consolidado como un espacio que vende la experiencia de conectar con
                            otros y con la naturaleza, sosteniendo los valores irrenunciables de la
                            libertad y el amor.
                        </p>
                    </li>
                </ol>
            </section>
        </main>
    )
}