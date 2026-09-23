function Products({ addToCart }) {
  const products = [
    {
      name: "Classic Shirt",
      price: "₹799",
      image: "/images/product1.jpg"
    },
    {
      name: "Fancy Frock",
      price: "₹1,499",
      image: "/images/product2.jpg"
    },
    {
      name: "Long Dress",
      price: "₹1,299",
      image: "/images/product3.jpg"
    },
    {
      name: "Jacket",
      price: "₹1,999",
      image: "/images/product4.jpg"
    },
    {
      name: "Casual Shoes",
      price: "₹1,999",
      image: "/images/product5.jpg"
    },

    {
      name: "T-shirt",
      price: "₹999",
      image: "/images/product7.jpg"
    },
    {
      name: "Kid T-shirt",
      price: "₹1,099",
      image: "/images/product8.jpg"
    },


    {
      name: "Women Kurti",
      price: "₹1,499",
      image: "/images/product6.jpg"
    }
  ];

  return (
    <section className="products" id="products">
      <h2>OUR PRODUCTS</h2>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

           
             <button onClick={()=>
              addToCart(product)}>
                ADD TO CART </button>
            

          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;