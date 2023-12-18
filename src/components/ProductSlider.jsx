import { useState } from "react";
import ProductImage1 from "../assets/png/screen-img.png";
import ProductImage2 from "../assets/png/screen-img2.png";
import ProductImage3 from "../assets/png/screen-img3.png";
import ProductImage4 from "../assets/png/screen-img4.png";

const ProductSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    { id: 1, src: ProductImage1, alt: "product name" },
    { id: 2, src: ProductImage2, alt: "product name" },
    { id: 3, src: ProductImage3, alt: "product name" },
    { id: 4, src: ProductImage4, alt: "product name" },
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img
        className="w-full h-auto"
        src={productImages[currentImageIndex].src}
        alt={productImages[currentImageIndex].alt}
      />

      <div className="absolute inset-y-0 left-0 flex items-center cursor-pointer" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductSlider;
