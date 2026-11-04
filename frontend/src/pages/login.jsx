import { Footer } from '../components/footer.jsx';
import { Navbar } from '../components/navbar.jsx';
import LoginForm from '../components/login-form.jsx';
export function Login() {
    return (
        <>
            <Navbar />
            <LoginForm onSubmit={({ usuario }) => console.log(usuario)}/>
            <Footer />
        </>
    )
}