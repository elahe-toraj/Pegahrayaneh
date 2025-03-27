import React, { useState } from "react";
import SliderDetails from "./SliderDetails";

const Slider = () => {
  const slides = [
    {
      img: "/img/1.png",
      title: "کیس گیم",
      type: "گیم",
      description: "یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد؟",
    },
    {
      img: "/img/2.png",
      title: "کیس گیم",
      type: "گیم",
      description: "یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد؟",
    },
    {
      img: "/img/3.png",
      title: "کیس گیم",
      type: "گیم",
      description: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div
        className="slider"
        style={{
          backgroundImage: `url(${slides[activeIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out"
        }}
      >
        <div className="list">
          <div className="item active">
            <img src={slides[activeIndex].img} alt={`اسلاید ${activeIndex + 1}`} />
            <div className="content">
              <div className="title">{slides[activeIndex].title}</div>
              <div className="type">{slides[activeIndex].type}</div>
              <div className="description">{slides[activeIndex].description}</div>
              <div className="button">
                <button>مشاهده</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          {slides
            .slice()
            .reverse()
            .map((item, index) => {
              const reversedIndex = slides.length - 1 - index; 
              return (
                <div
                  key={index}
                  className={`item ${reversedIndex === activeIndex ? "active" : ""}`}
                >
                  <img src={item.img} alt={`اسلاید ${index + 1}`} />
                </div>
              );
            })}
        </div>



        <SliderDetails onNext={nextSlide} onPrev={prevSlide} />
      </div>
    </section>
  );
};

export default Slider;
