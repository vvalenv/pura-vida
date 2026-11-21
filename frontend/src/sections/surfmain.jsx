import '../styles/main-surf.css'
export const SurfMain = () => {
    return (
        <main className="surf-main">
            <section className="surf-section1">
                <h1>Clases <span>de surf</span></h1>
            </section>
            <section className="surf-section2">
                <div className="hero-content">
                    <div className="content-surf-section2">
                        <div className="content-surf-section2-equipo">
                            <p>Conoce a</p>
                            <h2 className="title-surf">Tu equipo</h2>
                        </div>
                        <div className="content-surf-section2-desc">
                            <div className="content-surf-section2-desc-text">
                                <h2 className="title-surf">El mar como <span>tu profesor</span></h2>
                            </div>
                            <div className="content-surf-section2-desc-list">
                                <h2 className="title-surf">Todo listo <span>para vos</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="surf-section3">
            </section>
        </main>
    )
}