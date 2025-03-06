const ProductCard = ({ title, image, price, isFeatured, isLoading, rating = 5 }) => {
    if (isLoading) {
      return <h1>LOADING...</h1>;
    } else
      return (
        <div className="product-card">
          {isFeatured && <p className="is-featured">تخفیف ویژه</p>}
          <img src={image} alt="camera" />
          <h3 className="product-title">{title}</h3>
  
          
            <div className="stars">
                <i className="bx bxs-star filled"></i>
                <span className="rating-number">{rating}</span>
            </div>

  
          {price > 0 && (
            <p className={`product-price ${price > 400 ? "red" : "green"}`}>
              price: {price}$
            </p>
          )}
        </div>
      );
  };
  
export default ProductCard;
  