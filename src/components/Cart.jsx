function Cart({ cartItems, removeFromCart }) {

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/[₹,]/g, ""));
    return sum + price;
  }, 0);

  return (
    <div className="cart-dropdown">

      <div className="cart-title">
        <h2>Shopping Cart</h2>
        <span>{cartItems.length} Items</span>
      </div>

      {cartItems.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty
        </p>

      ) : (

        <>
          <div className="cart-items">

            {cartItems.map((item, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p>{item.price}</p>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-subtotal">

            <span>Subtotal</span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>

          <div className="cart-buttons">

            <button>VIEW CART</button>

            <button>CHECKOUT</button>

          </div>
        </>

      )}

    </div>
  );
}

export default Cart;