import React, { useState, useEffect } from "react";

const ProductCard = ({ title, image, price, isFeatured, isLoading, rating = 5, isDelivery, endTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (endTime) {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(endTime).getTime() - now;

        if (distance > 0) {
          const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
          const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
          const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
          setTimeLeft(`${hours}:${minutes}:${seconds}`);
        } else {
          setTimeLeft("تخفیفات تمام شد");
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [endTime]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="product-card">
        {isFeatured && <p className="is-featured">تخفیف ویژه</p>}
        <img src={image} alt="shop" />
        <h3 className="product-title">{title}</h3>

        <div className="product-meta">
          <div className="stars">
            <i className="bx bxs-star filled"></i>
            <span className="rating-number">{rating}</span>
          </div>

          {isDelivery && (
            <div className="delivery-info">
              <span className="delivery-text">تحویل فوری</span>
              <i className="bx bxs-cable-car"></i>
            </div>
          )}
        </div>

        {price > 0 && (
          <p className={`product-price ${price > 400 ? "red" : "green"}`}>
            price: {price}$
          </p>
        )}

        {/* نمایش تایمر یا پیام پایان تخفیف */}
        {endTime && <p className="timer">{timeLeft}</p>}
      </div>
    );
  }
};

export default ProductCard;
