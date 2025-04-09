import React, { useState, useEffect } from "react";
import "./SpecialOffers.css";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([
    {
      title: "لپتاپ",
      price: 200000,
      image: "../img/img1.webp",
      rating: 4.5,
      isDelivery: true,
    },
    {
      title: "گوشی موبایل",
      price: 300000,
      image: "../img/img2.webp",
      rating: 3.2,
      isDelivery: false,
    },
    {
      title: "گوشی موبایل",
      price: 800000,
      image: "../img/img3.webp",
      rating: 4.8,
      isDelivery: true,
    },
    {
      title: "لپتاپ",
      price: 800000,
      image: "../img/img4.webp",
      rating: 3.9,
      isDelivery: true,
    },
    {
      title: "لپتاپ",
      price: 800000,
      image: "../img/img4.webp",
      rating: 4.0,
      isDelivery: false,
    },
    {
      title: "لپتاپ",
      price: 800,
      image: "../img/img4.webp",
      rating: 4.1,
      isDelivery: false,
    },
  ]);


  const [timeLeft, setTimeLeft] = useState(1 * 60); 
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsVisible(false); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(1, "0");
    const seconds = String(time % 60).padStart(1, "0");
    return `${minutes}:${seconds}`;
  };

  if (!isVisible) return null; 

  return (
    <section className="special">
      <div className="special-offers">
        <div className="header">
          <h3>تخفیفات ویژه</h3>
          <div className="special-timer">
            <p>زمان باقی‌مانده: {formatTime(timeLeft)}</p>
          </div>
        </div>

        <div className="offers">
          {offers.map((offer, index) => (
            <div className="product-card" key={index}>
              <img src={offer.image} alt={offer.title} />
              <h3 className="product-title">{offer.title}</h3>

              <div className="product-meta">
                <div className="stars">
                  <i className="bx bxs-star filled"></i>
                  <span className="rating-number">{offer.rating}</span>
                </div>

                {offer.isDelivery && (
                  <div className="delivery-info">
                    <span className="delivery-text">تحویل فوری</span>
                    <i className="bx bxs-cable-car"></i>
                  </div>
                )}
              </div>

              {offer.price > 0 && (
                <p
                  className={`product-price`}
                >
                  {offer.price} تومان
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
