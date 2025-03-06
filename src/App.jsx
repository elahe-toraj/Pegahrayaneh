import Header from "./components/Header";
import ProductCard from "./components/Productcard";
import "./harchi.css"
function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="product">
          <h3>محصولات ویژه</h3>
          <p>مشاهده همه</p>
          <div className="details">
            <div className="row">
              <ProductCard
                title="camera model 1"
                price={200}
                image="/images/camera1.webp"
                isFeatured
              />

              <ProductCard
                title="camera model 2"
                image="/images/camera2.webp"
                price={0}
              />

              <ProductCard
                title="camera model 3"
                price={800}
                image="/images/camera3.webp"
              />
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
}

export default App;
