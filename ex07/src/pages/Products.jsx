import { Link } from "react-router-dom";

function Products() {

    const products = [
        {
            id: 1,
            name: "Portátil",
            price: 899
        },
        {
            id: 2,
            name: "Teclado",
            price: 45
        },
        {
            id: 3,
            name: "Auriculares",
            price: 79
        }
    ];

    return (
        <section className="page">

            <h1>Productos</h1>

            <div className="products">

                {products.map(function (product) {

                    return (
                        <article
                            className="product-card"
                            key={product.id}
                        >

                            <h2>
                                {product.name}
                            </h2>

                            <p>
                                Precio: {product.price} €
                            </p>

                            <Link
                                to={
                                    "/products/" +
                                    product.id
                                }
                            >
                                Ver producto
                            </Link>

                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default Products;