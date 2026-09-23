function Categories() {
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Shoes",
    "Accessories"
  ];

  return (
    <section className="categories" id="categories">
      <h2>SHOP BY CATEGORY</h2>

      <div className="category-container">
        {categories.map((category) => (
          <div className="category-card" key={category}>
            <h3>{category}</h3>
            <p>Explore {category} collection</p>
            <button>SHOP NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;