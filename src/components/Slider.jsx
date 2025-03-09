import React from "react";

const Slider = () => {
    return (
        <section>
            <div className="slider">
                <div className="list">

                    <div className="item">
                        <img src="/img/1.png" alt="اسلاید 1" />
                        <div className="content">
                            <div className="title">کیس گیم</div>
                            <div className="type">گیگیلی</div>
                            <div className="description">
                                یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟
                            </div>
                            <div className="button">
                                <button>مشاهده</button>
                            </div>
                        </div>
                    </div>


                    <div className="item">
                        <img src="/img/2.png" alt="اسلاید 2" />
                        <div className="content">
                            <div className="title">کیس گیم</div>
                            <div className="type">گیگیلی</div>
                            <div className="description">
                                یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟
                            </div>
                            <div className="button">
                                <button>مشاهده</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/img/3.png" alt="اسلاید 3" />
                        <div className="content">
                            <div className="title">کیس گیم</div>
                            <div className="type">گیگیلی</div>
                            <div className="description">
                                یک کیس خوب و عالی برای بازی چه ویژگی هایی دارد ؟
                            </div>
                            <div className="button">
                                <button>مشاهده</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thumbnail">
                    <div className="item">
                        <img src="/img/1.png" alt="اسلاید 1" />
                    </div>
                    <div className="item">
                        <img src="/img/2.png" alt="اسلاید 1" />
                    </div>
                    <div className="item">
                        <img src="/img/3.png" alt="اسلاید 1" />
                    </div>
                </div>
                <div className="nextPrevArrows">
                    <button><i className='bx bx-chevron-right'></i></button>
                    <button><i className='bx bx-chevron-left'></i></button>
                </div>
            </div>
        </section>

    );
};

export default Slider;
