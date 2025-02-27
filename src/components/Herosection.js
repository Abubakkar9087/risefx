import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
  { src: "/images/banner-1.jpg", title: "Empowering Your Digital Future", subtitle: "Innovative solutions for modern businesses." },
  { src: "/images/banner-2.jpg", title: "Creative Design & Development", subtitle: "Building user-friendly, high-quality websites." },
  { src: "/images/banner-3.jpg", title: "Transforming Ideas into Reality", subtitle: "Bringing your vision to life with technology." }
];

const Herosection = () => {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const changeSlide = () => {
      // GSAP animations for image zoom and fade-out
      gsap.to(imageRef.current, { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out" });
      gsap.to(textRef.current, { opacity: 0, y: -50, duration: 1, ease: "power2.out" });

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);

        // Reset image and text positions for next animation
        gsap.set(imageRef.current, { scale: 1, opacity: 0 });
        gsap.set(textRef.current, { opacity: 0, y: 50 });

        // New image and text appear with animation
        gsap.to(imageRef.current, { scale: 1.05, opacity: 1, duration: 1.5, ease: "power2.out" });
        gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      }, 1500); // Wait before changing slide
    };

    const interval = setInterval(changeSlide, 5000); // Change every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hero-container">
    <div className="hero-section">
      <img ref={imageRef} src={images[index].src} alt="Banner" className="hero-image" />
      <div ref={textRef} className="hero-content">
        <h1>{images[index].title}</h1>
        <p>{images[index].subtitle}</p>
      </div>
    </div>
      <style>
        {`
        .hero-container{
        width: 100%;
        padding: 20px;
        }
        .hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 10px;
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  opacity: 1;
}

.hero-content {
  position: absolute;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  transition: all 0.8s ease-in-out;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2rem;
  font-weight: 300;
}
`}
      </style>
    </div>
    </>
  );
};

export default Herosection;
