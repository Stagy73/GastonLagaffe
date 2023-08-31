import React, { useState, useEffect } from "react";
import "./SlideshowWithAds.css";

const SlideshowWithAds = () => {
  const images = [
    "./image1.png",
    "./image2.png",
    "./image3.png",
    "./image4.png",
    "./image5.png",
    "./image6.png",
    "./image7.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]); // Add images to the dependency array

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slideshow-image ${
            index === currentImageIndex ? "visible" : "hidden"
          }`}
        >
          {index === currentImageIndex && (
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SlideshowWithAds;
