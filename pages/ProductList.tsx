import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronSmall } from "../src/assets/icons/chevron-small";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const ProductList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cars.json");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="product-list">
      <h2 className="product-list-heading">Latest Recharge Cars</h2>

      <Slider {...settings}>
        {cars.map((car) => (
          <div key={car.id} className="product-card " style={{
            padding: '16px',
            display: 'flex',
            gap: '4px'
          }}>
            <img src={car.imageUrl} alt={car.modelName} className="product-image" style={{
              width: "100%",
              
            }} />
            <div className="product-details">
              <h3 className="product-name">{car.modelName}</h3>
              <p className="product-type">{car.modelType}</p>
              <p className="product-body-type">{car.bodyType}</p>
            </div>
            <div className="product-actions">
              <a href={`/learn/${car.id}`} className="product-link">
                Learn More <ChevronSmall />
              </a>
              <a href={`/shop/${car.id}`} className="product-link">
                Shop Now <ChevronSmall />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
