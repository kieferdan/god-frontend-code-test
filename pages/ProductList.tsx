import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronSmall } from "../src/assets/icons/chevron-small";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  rechargeType: string;
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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="product-list">
      <div className="bo bp bq br bs bt">
        <div className="a b fo fp fq fr">
          <h2 className="a cg cj ck cl co cr cs ct cw cx dd dg dh fs ft fu fv fw fx fy fz ga gb gc p">
            Todos os modelos Recharge
          </h2>
        </div>
      </div>
      <div className="a gu gv">
        <div className="a bg">
          <div className="a gw gx">
            <div className="bo bp bq br bs bt">
              <div className="a b fo fp fq fr">
                <div className="a fo gy o">
                  <div
                    style={{
                      width: "100%",
                      touchAction: "pan-y",
                      animation: "ease-in",
                    }}
                  >
                    <Slider {...settings}>
                      {cars.map((car) => (
                        <div
                          key={car.id}
                          className="a b hf hg hh"
                          style={{
                            width: "100%",
                            display: "inline-block",
                            padding: "4px",
                          }}
                        >
                          <div className="bo bp bq br bs bt hi hj z">
                            <a
                              href={`/br/cars/${car.id}`}
                              className="bo bp bq br bs bt ef hk hl hm hn ho hp hq hr hs"
                            >
                              <div className="bo bp bq br bs bt hk">
                                <em className="a cg ch cj ck co cp cq cr cs ct cu cv cw cx dd de df fg fs gi gj gk gl gm gn go gp gq gr p item-category">
                                  {car.bodyType}
                                </em>
                                <h3 className="bo dy ie">
                                  <span className="a cg ch cj ck co cp cq cr cs ct cu cv cw cx dd de df dg dh fs gi if p item-name">
                                    {car.modelName}
                                  </span>
                                  <span className="a cg ch co cp cq ct cu cv dd de df gi gj gp gq gr gs p item-name-suffix">
                                    {car.rechargeType}
                                  </span>
                                </h3>
                                <div className="a gs item-price">
                                  <small className="a cg co ct dd ev gj gp gq gr ht hu hv hw hx hy hz ia ib ic id ig p"></small>
                                </div>
                              </div>
                              <div className="bg bo bp bq br bs bt ih ii o q">
                                <picture className="a b bb bg ij ik il o">
                                  <img
                                    aria-hidden="true"
                                    src={car.imageUrl}
                                    alt={`Vista lateral do ${car.modelName} na cor Cloud Blue parado sobre um chão cinzento de um estúdio.`}
                                    className="a b gv li lj lk y z item-image"
                                    style={{ width: "100%" }}
                                  />
                                </picture>
                              </div>
                            </a>
                            <div className="a im">
                              <div className="bo bq br bs bt ds dw dy in io ip iq product-list-carousel-item-links">
                                <div className="a ox">
                                  <a
                                    draggable="false"
                                    href={`/br/cars/${car.id}`}
                                    className="a ah ar as at au cg cj ef el em ev jk jl jm jn jo jp jq jr js jt ju jv"
                                  >
                                    Conheça
                                    <span className="fe fg">
                                      &#xFEFF;
                                      <svg
                                        className="jw jx o"
                                        preserveAspectRatio="xMinYMin meet"
                                        viewBox="0 0 11 11"
                                        width="0.7851em"
                                        height="0.7851em"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2 1.5l4 4-4 4"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
