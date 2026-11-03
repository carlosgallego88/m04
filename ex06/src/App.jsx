import { useEffect, useState } from "react";

import "./App.css";

function App() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(function () {

        fetch("https://dummyjson.com/products?limit=6")
            .then(function (response) {

                if (!response.ok) {
                    throw new Error("Error al cargar los productos.");
                }

                return response.json();
            })
            .then(function (data) {

                setProducts(data.products);

                setLoading(false);
            })
            .catch(function (error) {

                setError(error.message);

                setLoading(false);
            });

    }, []);


    if (loading) {
        return (
            <main className="app">
                <p>Cargando productos...</p>
            </main>
        );
    }


    if (error) {
        return (
            <main className="app">
                <p className="error">
                    {error}
                </p>
            </main>
        );
    }


    return (
        <main className="app">

            <h1>Productos de la API</h1>

            <div className="products">

                {products.map(function (product) {

                    return (
                        <article
                            className="product-card"
                            key={product.id}
                        >

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />

                            <h2>
                                {product.title}
                            </h2>

                            <p>
                                Precio: {product.price} €
                            </p>

                            <p>
                                Categoría: {product.category}
                            </p>

                        </article>
                    );
                })}

            </div>

        </main>
    );
}

export default App;