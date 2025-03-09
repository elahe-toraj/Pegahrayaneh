import React from "react";

const SliderDetails = ({ onNext, onPrev }) => {
    return (
        <div className="nextPrevArrows">
            <button className="right" onClick={onNext}><i className="bx bx-chevron-right"></i></button>
            <button className="left" onClick={onPrev}><i className="bx bx-chevron-left"></i></button>
        </div>
    );
};

export default SliderDetails;
