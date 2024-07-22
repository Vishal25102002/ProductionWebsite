import React, { useEffect, useRef } from "react";
import Card from "../components/Card";
import Product1 from "../assets/Prismatic-Tempered-Glass-3 1.png";
import Product2 from "../assets/led.jpg";
import Product3 from "../assets/window.jpg";
import scrollimg from "../assets/scroll.png";
import Product4 from "../assets/office.jpg";
import "../App.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Product() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const controls = useAnimation();
  const gridRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: -1000 },
    visible: { opacity: 1, y: 0 },
  };

  const scroll = (direction) => {
    if (gridRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      gridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      className="product-component container text-center my-5"
      id="product"
    >
      <div>
        <h6 className="product-head">Our Products</h6>
      </div>
      <div>
        <h2 className="product-title">World-Class Products</h2>
      </div>
      <div className="product-grid" ref={gridRef}>
        <Card
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, type: "spring" }}
          variants={variants}
          image={Product1}
          heading="Solar Toughened Glass"
          content="Our Solar Toughened Glass offers high durability and strength, making it perfect for all solar applications. Engineered to withstand extreme conditions, it ensures maximum efficiency and longevity for your solar panels."
        />
        <Card
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, type: "spring" }}
          variants={variants}
          image={Product2}
          heading="LED Toughened Glass"
          content="Specifically designed for LED applications, our LED Toughened Glass provides exceptional clarity and strength. Its robust nature ensures protection while enhancing the luminosity and performance of LED displays."
        />
        <Card
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, type: "spring" }}
          variants={variants}
          image={Product3}
          heading="Window Toughened Glass"
          content="Our Window Toughened Glass is perfect for both residential and commercial buildings. It offers enhanced security and safety with its high strength and shatter resistance, while also providing excellent thermal insulation."
        />
        <Card
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, type: "spring" }}
          variants={variants}
          image={Product4}
          heading="Office Toughened Glass"
          content="Ideal for office spaces, our Office Toughened Glass combines strength and elegance. It ensures a safe working environment with its durability and shatter-proof properties, while adding a modern aesthetic to your office interiors."
        />
      </div>
      <span>
        <img
          className="scroll-arrow right"
          onClick={() => scroll("right")}
          src={scrollimg}
        />
        &gt;
      </span>
    </div>
  );
}

export default Product;
