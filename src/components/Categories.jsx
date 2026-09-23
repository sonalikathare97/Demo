function Categories({ selectedCategory, onSelectCategory }) {
  const categories = ["Men", "Women", "Kids", "Shoes", "Accessories"];

  return (
    <section className="categories" id="categories">
      <h2>SHOP BY CATEGORY</h2>
      <div className="category-container">
        {categories.map((category) => (
          <button className={`category-card ${selectedCategory === category ? "selected" : ""}`} key={category} onClick={() => onSelectCategory(category)}>
            <h3>{category}</h3><p>Explore {category} collection</p><span>SHOP NOW</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
