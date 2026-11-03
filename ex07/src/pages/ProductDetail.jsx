import { useParams } from "react-router-dom";

function ProductDetail() {

    const { id } = useParams();

    return (
        <section className="page">

            <h1>Detalle del producto</h1>

            <p>
                Estás viendo el producto con ID: {id}
            </p>

        </section>
    );
}

export default ProductDetail;