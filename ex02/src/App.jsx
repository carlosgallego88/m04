import ProductCard from "./components/ProductCard";

import "./App.css";

function App() {
    return (
        <main className="app">

            <h1>Productos</h1>

            <div className="products">

                <ProductCard
                    name="Portátil"
                    price={899}
                    category="Tecnología"
                    image="https://via.placeholder.com/250x160"
                    variant="normal"
                />

                <ProductCard
                    name="Teclado"
                    price={45}
                    category="Accesorios"
                    image="https://via.placeholder.com/250x160"
                    variant="featured"
                />

                <ProductCard
                    name="Auriculares"
                    price={79}
                    category="Audio"
                    image="https://via.placeholder.com/250x160"
                    variant="normal"
                />

            </div>

        </main>
    );
}

export default App;