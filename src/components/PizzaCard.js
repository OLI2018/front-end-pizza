import React from "react";

function PizzaCard(props) {

    const { product, onAdd } = props;

    return (
        <li className="card">
            <div className="image">
                <span className="price">${product.price}</span>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details">
                <strong>{product.name}</strong>
                <span> · {product.ingredients}</span>
                <span> · {product.cal} Cal</span>
            </div>
            <div>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </li>
    );
}


export default PizzaCard;


