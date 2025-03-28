
const ProductCard = ({ title, image, price, isFeatured, isLoading, rating = 5, isDelivery, }) => {
    if (isLoading) {
      return <h1>LOADING...</h1>;
    } else
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
        </div>
      );
  };
  
export default ProductCard;
  
