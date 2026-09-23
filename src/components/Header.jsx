import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header({ cartItems, removeFromCart, showCart, setShowCart, searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      <Link className="logo" to="/"><span>STYLE</span>HUB</Link>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
      <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <div className="dropdown"><a href="#pages">PAGES ▾</a><div className="dropdown-menu"><Link to="/about">ABOUT</Link><a href="#testimonial">TESTIMONIAL</a></div></div>
        <Link to="/products">PRODUCTS</Link><Link to="/blog">BLOG</Link><Link to="/contact">CONTACTS</Link>
      </nav>
      <div className="icons">
        <button className="icon-button cart-icon" onClick={() => setShowCart(!showCart)} aria-label="Toggle shopping cart">🛒{cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}</button>
        <button className="icon-button search-toggle" onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle product search">🔍</button>
        {searchOpen && <input className="header-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search products" aria-label="Search products" autoFocus />}
      </div>
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
    </header>
  );
}

export default Header;
