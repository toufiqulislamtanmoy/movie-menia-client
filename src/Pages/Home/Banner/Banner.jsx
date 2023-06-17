import { useEffect, useState } from "react";
import img1 from "../../../assets/Banner/img1.png";
import img2 from "../../../assets/Banner/img2.png";
import img3 from "../../../assets/Banner/img3.png";
import img4 from "../../../assets/Banner/img4.png";
import img5 from "../../../assets/Banner/img5.png";
import img6 from "../../../assets/Banner/img6.png";
const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="hero bg-transparent min-h-screen relative"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1
            className="mb-5 text-5xl font-bold"
            style={{ fontFamily: "Russo One, sans-serif" }}
          >
            Cinephile Central
          </h1>
          <p className="mb-5">
            Discover the latest movies, read reviews, and make informed choices
            before watching.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div className="image-transition"></div>
    </div>
  );
};

export default Banner;
