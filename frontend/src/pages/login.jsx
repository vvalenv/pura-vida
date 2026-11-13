import { Footer } from '../components/footer.jsx';
import { Navbar } from '../components/navbar.jsx';
import LoginForm from '../components/login-form.jsx';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authcontext.jsx';
export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    return (
        <>
            <Navbar />
            <LoginForm
                onSubmit={async ({ usuario, contrasena }) => {
                    await login(usuario, contrasena);
                    navigate("/");
                }}
            />
            <Footer />
        </>
    )
}
export default function RutaProtegida({ roles, children }) {
  const { user, cargando } = useAuth();

  if (cargando) 
    return null;

  if (!user) 
    return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.role)) 
    return <Navigate to="/" replace />;

  return children;
}