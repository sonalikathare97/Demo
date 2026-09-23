import { useState } from "react";

import { Routes,Route }
 from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";

import Blog from "./components/Blog";

import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Products from "./components/Products";

import "./App.css";



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((items) => [...items, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCartItems((items) => items.filter((_, itemIndex) => itemIndex !== index));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} showCart={cartOpen} setShowCart={setCartOpen} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<><Banner /><Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} /><Products addToCart={addToCart} searchTerm={searchTerm} selectedCategory={selectedCategory} clearFilters={clearFilters} /><Blog /><Footer /></>} />
        <Route path="/products" element={<><Products addToCart={addToCart} searchTerm={searchTerm} selectedCategory={selectedCategory} clearFilters={clearFilters} /><Footer /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/blog" element={<><Blog /><Footer /></>} />
      </Routes>
    </>
  );
}

export default App;