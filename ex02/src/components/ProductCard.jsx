function ProductCard(props) {
    return (
        <article className={"product-card " + props.variant}>
            <img
                src={props.image}
                alt={props.name}
            />

            <h2>{props.name}</h2>

            <p>
                Precio: {props.price} €
            </p>

            <p>
                Categoría: {props.category}
            </p>
        </article>
    );
}

export default ProductCard;