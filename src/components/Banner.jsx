import { useState, useEffect } from "react";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    "/images/banner1.jpg",
    "/images/banner1.jpg",
    "/images/banner1.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {

      if (currentSlide === 2) {
        // Go from Slide 3 back to Slide 1 without animation
        setIsTransitioning(false);
        setCurrentSlide(0);

        // Turn animation back on
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);

      } else {
        setCurrentSlide((prev) => prev + 1);
      }

    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="banner" id="home">

      <div className="banner-slider">

        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning
              ? "transform 0.7s ease-in-out"
              : "none"
          }}
        >

          {slides.map((image, index) => (
            <div className="slide" key={index}>

              <div className="banner-content">
                <h1>STYLE THAT SPEAKS</h1>

                <p>
                  Discover the latest fashion trends and find your perfect style.
                </p>

                <button>SHOP NOW</button>
              </div>

              <div className="banner-image">
                <img
                  src={image}
                  alt="Fashion Collection"
                />
              </div>

            </div>
          ))}

        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                currentSlide === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
              }}
            ></span>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Banner;