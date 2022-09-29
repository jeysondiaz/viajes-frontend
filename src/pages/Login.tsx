import { Navigate } from "react-router-dom";
import CreateUserModal from "../components/CreateUserModal";
import LoginUserModal from "../components/LoginUserModal";

const Login = () => {
  const user = localStorage.getItem("USER");

  if (user) return <Navigate to="/blog" replace />;
  return (
    <div className="home">
      <div className="text-white text-center">
        <h1>Viajes Blog</h1>
        <p>Bienvenido, esta web te permite consultar y escribir reseñas de viajes. </p>
        <p>Ingresa para continuar y hacer parte de nuestro blog</p>
      </div>
      <LoginUserModal />
      <br />
      <CreateUserModal />
    </div>
  );
};

export default Login;
