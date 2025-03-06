const ProductCard = ({ title, image, price, isFeatured, isLoading }) => {
    if (isLoading) {
      return <h1>LOADING...</h1>;
    } else
      return (
        <div className="card">
          {isFeatured && <p style={{ color: "red" }}>SPECIAL OFFER</p>}
          <img src={image} alt="camera" />
          <h3>{title}</h3>
          {price > 0 && (
            <p className={price > 400 ? "red" : "green"}>price: {price}$</p>
          )}
        </div>
      );
  };
  
  export default ProductCard;
  