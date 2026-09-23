function Products({ addToCart, searchTerm = "", selectedCategory = "All", clearFilters }) {
  const products = [
    { name: "Classic Shirt", price: "₹799", image: "/images/product1.jpg", category: "Men" },
    { name: "Fancy Frock", price: "₹1,499", image: "/images/product2.jpg", category: "Women" },
    { name: "Long Dress", price: "₹1,299", image: "/images/product3.jpg", category: "Women" },
    { name: "Jacket", price: "₹1,999", image: "/images/product4.jpg", category: "Men" },
    { name: "Casual Shoes", price: "₹1,999", image: "/images/product5.jpg", category: "Shoes" },
    { name: "T-shirt", price: "₹999", image: "/images/product7.jpg", category: "Men" },
    { name: "Kid T-shirt", price: "₹1,099", image: "/images/product8.jpg", category: "Kids" },
    { name: "Women Kurti", price: "₹1,499", image: "/images/product6.jpg", category: "Women" }
  ];

  const visibleProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products" id="products">
      <h2>OUR PRODUCTS</h2>
      <div className="product-container">
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} />
            <small>{product.category}</small>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>ADD TO CART</button>
          </div>
        ))}
      </div>
      {visibleProducts.length === 0 && <div className="no-products"><p>No products match your search.</p><button onClick={clearFilters}>SHOW ALL PRODUCTS</button></div>}
    </section>
  );
}

export default Products;
