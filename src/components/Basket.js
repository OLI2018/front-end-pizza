import React from "react";

function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.10; 
    const shippingPrice = 5.00;
    const totalPrice = itemsPrice + taxPrice + shippingPrice; 


    return (
        <aside className = "block col-1">
        <h2>Your Order:</h2>
        <hr/>
        <div>{cartItems.length === 0 && <div> Your Cart Is Empty</div>}</div>
        {cartItems.map((item) => (
            <div key = {item.id} className = "row">
                <div className = "col-2">{item.name}</div>
                <div className = "col-2">
                    <button onClick = {() => onAdd(item)} className = "add"> Add </button>
                    <button onClick = {() => onRemove(item)} className = "remove"> Remove </button>
                </div>
                <div className = "col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>

        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className = "row">
                <div className = "col-2">Price:</div>
                <div className = "col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>

            <div className = "row">
                <div className = "col-2">Tax:</div>
                <div className = "col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>

            <div className = "row">
                <div className = "col-2">Delivery:</div>
                <div className = "col-1 text-right">${shippingPrice.toFixed(2)}</div>
            </div>

            <div className = "row">
                <div className = "col-2"><strong>Total Price:</strong></div>
                <div className = "col-1 text-right">${totalPrice.toFixed(2)}
                </div>
            </div>
            <hr/>
            <div className = "row">
                <button onClick = {() => alert("go to another page!")}>
                    Checkout 
                </button>
            </div>
            </>
        )}
        </aside>
     );
  }
  
  export default Basket;
