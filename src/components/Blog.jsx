function Blog() {
  const blogs = [
    {
      title: "Latest Fashion Trends",
      text: "Explore the latest styles and trends that are taking over the fashion world.",
      image: "/images/blog1.jpg"
    },
    {
      title: "How to Style Your Outfit",
      text: "Simple styling ideas to create beautiful outfits for every occasion.",
      image: "/images/blog1.jpg"
    },
    {
      title: "Build Your Perfect Wardrobe",
      text: "Discover useful tips for choosing stylish and versatile clothes.",
      image: "/images/blog1.jpg"
    }
  ];

  return (
    <div className="blog-page">

      {/* Blog Header */}
      <section className="blog-hero">
        <h1>STYLEHUB BLOG</h1>
        <p>Fashion inspiration, styling tips and the latest trends.</p>
      </section>

      {/* Why Shop With Us */}
      <section className="why-shop">
        <h2>Why Shop With Us</h2>
        <p className="section-text">
          We make your fashion shopping experience simple, stylish and enjoyable.
        </p>

        <div className="benefits">

          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your favourite fashion items delivered quickly and safely.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🛍️</div>
            <h3>Easy Shopping</h3>
            <p>
              Find stylish clothing easily with our simple shopping experience.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Best Quality</h3>
            <p>
              We bring you fashionable clothing with quality you can trust.
            </p>
          </div>

        </div>
      </section>

      {/* Latest Blogs */}
      <section className="latest-blogs">
        <h2>Latest Fashion Stories</h2>

        <div className="blog-container">

          {blogs.map((blog) => (
            <div className="blog-card" key={blog.title}>

              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <h3>{blog.title}</h3>

                <p>{blog.text}</p>

                <button>READ MORE</button>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Blog;