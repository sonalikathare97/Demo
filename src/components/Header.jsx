import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header({ cartItems, removeFromCart}) {

  const [showCart, setShowCart] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <span> STYLE</span> HUB
      </div>

      {/*Hamburger button */}
      <button className="menu-button"
       onClick={()=> setMenuOpen(!menuOpen)}
       >
        ☰
       </button>

       <nav className = {`navbar ${menuOpen ? "menu-open" : ""}` } >


        <a href="#home" onClick={() =>
          setMenuOpen(false)}> 
          HOME </a>

        <div className="dropdown">

          <a href="#pages"> PAGES ▾ </a>

          <div className="dropdown-menu">

            <Link to="/about">ABOUT</Link>

            <a href="#testimonial">TESTIMONIAL</a>

          </div>

        </div>

        <Link to="/products"> PRODUCTS </Link>

        <Link to="/blog"> BLOG </Link>

        <Link to="/contact"> CONTACTS </Link>

      </nav>


      <div className="icons">

        {/* Cart Icon */}
        <div
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >

          <span>🛒</span>

          {/* Cart Count */}
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.length}
            </span>
          )}

        </div>


        {/* Search Icon */}
        <span>🔍</span>

      </div>


      {/* Cart Dropdown */}
      {showCart && (
        <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        />
      )}

    </header>
  );
}

export default Header;