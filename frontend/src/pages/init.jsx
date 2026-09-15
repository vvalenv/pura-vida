import { Footer } from '../components/footer.jsx';
import { Navbar } from '../components/navbar.jsx';
import { Hero } from '../sections/hero.jsx';
export function Init() {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}