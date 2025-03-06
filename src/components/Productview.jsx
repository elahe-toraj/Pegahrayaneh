import React from "react";
import ProductCard from "./Productcard";

const ProductView= () => {
    return(
        <section className="Product-card">
          <div className="product">
            <div className="header-pro">
              <h3 className="special">محصولات ویژه</h3>
              <p className="menu">مشاهده همه</p>
            </div>
            <div className="details">
              <div className="row">
                <ProductCard 
                  title="camera model 1"
                  price={200}
                  image="/img/img1.webp"
                  isFeatured
                  rating = {4}
                  isDelivery={true} 
                />
                <ProductCard
                  title="camera model 2"
                  price={0}
                  image="/img/img2.webp"
                  rating = {2}
                  isDelivery={false}
                />
                <ProductCard
                  title="camera model 3"
                  price={800}
                  image="/img/img3.webp"
                  rating = {3.5}
                  isDelivery={true}
                />
                <ProductCard
                  title="camera model 4"
                  price={800}
                  image="/img/img4.webp"
                  rating = {5}
                  isDelivery={false}
                />
              </div>
            </div>
          </div>
        </section>
    )
}
export default ProductView;