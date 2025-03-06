// global css
import "../harchi.css";
import React from "react";

const ProductDetails = () => {
  const name = "sara";
  const score = 80;

  function handleClick() {}

  return (
    <>
      <h3
        className="harchi"
        style={{
          color: "red",
          textDecoration: "overline",
        }}
      >
        HI STUDENT {name}
      </h3>
      <img src="/images/camera.webp" alt="camera" />
    </>
  );
};

export default ProductDetails;
