import React, { useState, useEffect } from "react";
import "./SpecialOffers.css";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([
    {
      title: "لپتاپ",
      price: 200,
      image: "../img/img1.webp",
      isFeatured: true,
    },
    {
      title: "گوشی موبایل",
      price: 0,
      image: "../img/img2.webp",
      isFeatured: false,
    },
    {
      title: "گوشی موبایل",
      price: 800,
      image: "../img/img3.webp",
      isFeatured: true,
    },
    {
      title: "لپتاپ",
      price: 800,
      image: "../img/img4.webp",
      isFeatured: false,
    },
    {
      title: "لپتاپ",
      price: 800,
      image: "../img/img4.webp",
      isFeatured: false,
    },
    {
      title: "لپتاپ",
      price: 800,
      image: "../img/img4.webp",
      isFeatured: false,
    },
  ]);

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 دقیقه به ثانیه

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="special">
      <div className="special-offers">
        <div className="header">
          <h3>تخفیفات ویژه</h3>
          {/* تایمر */}
          <div className="special-timer">
            <p>زمان باقی‌مانده: {formatTime(timeLeft)}</p>
          </div>
        </div>
        <div className="offers">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <img src={offer.image} alt={offer.title} />
              <h4>{offer.title}</h4>
              <p>قیمت: {offer.price} تومان</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SpecialOffers;
