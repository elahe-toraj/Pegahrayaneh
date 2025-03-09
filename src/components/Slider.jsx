import React, { useState } from "react";
import SliderDetails from "./SliderDetails"; 

const Slider = () => {
    const slides = [
        {
            img: "/img/1.png",
            title: "کیس گیم",
            type: "گیگیلی",
            description: "یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟"
        },
        {
            img: "/img/2.png",
            title: "کیس گیم",
            type: "گیگیلی",
            description: "یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟"
        },
        {
            img: "/img/3.png",
            title: "کیس گیم",
            type: "گیگیلی",
            description: "یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section>
            <div className="slider">
                <div className="list">
                    {slides.map((item, index) => (
                        <div key={index} className={`item ${index === activeIndex ? "active" : ""}`}>
                            <img src={item.img} alt={`اسلاید ${index + 1}`} />
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="type">{item.type}</div>
                                <div className="description">{item.description}</div>
                                <div className="button">
                                    <button>مشاهده</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail">
                    {slides.map((item, index) => (
                        <div key={index} className={`item ${index === activeIndex ? "active" : ""}`}>
                            <img src={item.img} alt={`اسلاید ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <SliderControls onNext={nextSlide} onPrev={prevSlide} />
            </div>
        </section>
    );
};

export default Slider;
