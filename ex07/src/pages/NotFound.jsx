import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="page">

            <h1>Error 404</h1>

            <p>
                La página que buscas no existe.
            </p>

            <Link to="/">
                Volver al inicio
            </Link>

        </section>
    );
}

export default NotFound;