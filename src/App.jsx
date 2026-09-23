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

  const[cartItems,setCartItems] = useState([]);

  const addToCart = (product) =>
  {
    setCartItems([...cartItems,product]);
  };

  const removeFromCart= (index)=> {
    setCartItems(cartItems.filter((_,i)=> i !==index));
  };

  return (
    <>

    <Header 
    cartItems={cartItems}
    removeFromCart ={removeFromCart}
    />
    
    <Routes>
      <Route path ="/" element={
    <>
      
      <Banner />
      <Categories />
      <Products addToCart={addToCart} />
      <Blog />
      
      <Footer />
    </>
      }
      />
      {/*Products Page */}
      <Route path="/products" element = {
        <>
        <Products addToCart={addToCart} />
        <Footer />
        </>
      }
      />
      {/* About Page */}
      <Route path ="/about" element={<About/>}/>

      {/* Contact Us Page */}

      <Route path ="/contact" element= {
        <>
        <Contact />
        <Footer />
        </>
        }
        />

        <Route path ="/blog" element= {
        <>
        <Blog />
        <Footer />
        </>
        }
        />




        
    </Routes>

    </>
  );
}

export default App;