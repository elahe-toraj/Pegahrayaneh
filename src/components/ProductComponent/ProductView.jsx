import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard";

const ProductView = () => {
  return (
    <section className="Product-card">
      <div className="product">
        <div className="header-pro">
          <h3 className="special">محصولات ویژه</h3>
          <p className="menu">مشاهده همه</p>
        </div>
        <div className="details">
          <div className="row">
            <ProductCard
              title="لپتاپ"
              price={200}
              image="../img/img1.webp"
              isFeatured
              rating={4}
              isDelivery={true}
              endTime="2025-03-30T23:59:59" 
            />
            <ProductCard
              title="گوشی موبایل"
              price={0}
              image="../img/img2.webp"
              rating={2}
              isDelivery={false}
            />
            <ProductCard
              title="گوشی موبایل"
              price={800}
              image="../img/img3.webp"
              rating={3.5}
              isDelivery={true}
              endTime="2025-03-29T12:00:00" 
            />
            <ProductCard
              title="لپتاپ"
              price={800}
              image="../img/img4.webp"
              rating={5}
              isDelivery={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;