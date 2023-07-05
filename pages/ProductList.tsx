import react, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Icon, Link } from "vcc-ui";
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

  return (
    <div className="container-max">
      <h2 className="some-heading">Latest Recharge Cars</h2>

      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <p> {car.bodyType}</p>
          <div>
            <h2>{car.modelName}</h2>

            <p> {car.modelType}</p>
          </div>
          <div className="car-image">
            <Image
              src={car.imageUrl}
              alt={car.modelName}
              width={400}
              height={250}
            />
            div
          </div>
          <div className="car-details">
            <div className="flex flex-wrap gap-x-24">
              <a className="button-text" href={`/learn/${car.id}`}>
                Learn More <ChevronSmall />
              </a>
              <a className="button-text" href={`/shop/${car.id}`}>
                Shop Now <ChevronSmall />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
