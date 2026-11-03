import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">

            <Link to="/">
                Inicio
            </Link>

            <Link to="/products">
                Productos
            </Link>

            <Link to="/contact">
                Contacto
            </Link>

            <Link to="/about">
                Sobre nosotros
            </Link>

        </nav>
    );
}

export default Navigation;