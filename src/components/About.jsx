function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="small-title">WELCOME TO STYLEHUB</p>

          <h1>
            Fashion That
            <span> Speaks For You</span>
          </h1>

          <p className="hero-text">
            Discover fashion that matches your personality, lifestyle,
            and confidence. StyleHub brings modern fashion and comfort
            together.
          </p>
        </div>
      </section>


      {/* OUR STORY */}
      <section className="our-story">

        <div className="story-image">
          <img
            src="/images/about.jpg"
            alt="StyleHub Fashion"
          />
        </div>

        <div className="story-content">
          <p className="small-title">OUR STORY</p>

          <h2>We Believe Fashion Is More Than Clothes</h2>

          <p>
            StyleHub was created for people who love expressing
            themselves through fashion. We bring together modern
            designs, comfortable fabrics and styles for every occasion.
          </p>

          <p>
            From everyday outfits to special occasions, our goal is to
            help you find something that makes you feel confident.
          </p>

          <button>EXPLORE COLLECTION</button>
        </div>

      </section>


      {/* STATS */}
      <section className="about-stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Fashion Products</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>New Styles</p>
        </div>

        <div className="stat-card">
          <h2>5★</h2>
          <p>Customer Rating</p>
        </div>

      </section>


      {/* WHY STYLEHUB */}
      <section className="why-stylehub">

        <p className="small-title">WHY STYLEHUB?</p>

        <h2>Style. Quality. Confidence.</h2>

        <div className="about-features">

          <div className="feature-card">
            <span>👗</span>
            <h3>Modern Fashion</h3>
            <p>
              Discover stylish designs inspired by the latest trends.
            </p>
          </div>

          <div className="feature-card">
            <span>✨</span>
            <h3>Premium Quality</h3>
            <p>
              Comfortable fabrics and carefully selected products.
            </p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Made For You</h3>
            <p>
              Fashion designed to make you feel confident and unique.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>Ready To Find Your Style?</h2>

        <p>
          Explore our latest collection and discover something
          perfect for you.
        </p>

        <button>SHOP NOW</button>

      </section>

    </div>
  );
}

export default About;