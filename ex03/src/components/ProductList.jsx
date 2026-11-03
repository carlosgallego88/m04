import ProductCard from "./ProductCard";

function ProductList() {

    const products = [
        {
            id: 1,
            name: "Portátil",
            price: 899,
            category: "Tecnología",
            image: "https://via.placeholder.com/250x160"
        },
        {
            id: 2,
            name: "Teclado",
            price: 45,
            category: "Accesorios",
            image: "https://via.placeholder.com/250x160"
        },
        {
            id: 3,
            name: "Auriculares",
            price: 79,
            category: "Audio",
            image: "https://via.placeholder.com/250x160"
        }
    ];

    return (
        <main className="product-list">

            {products.map(function (product) {
                return (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                );
            })}

        </main>
    );
}

export default ProductList;