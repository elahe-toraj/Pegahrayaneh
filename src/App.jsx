import Header from "./components/Header";
import ProductCard from "./components/Productcard";
import "./harchi.css"
function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      
      <main>
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
                  image="/images/camera1.webp"
                  isFeatured
                />
                <ProductCard
                  title="camera model 2"
                  price={0}
                  image="/images/camera2.webp"
                />
                <ProductCard
                  title="camera model 3"
                  price={800}
                  image="/images/camera3.webp"
                />
                <ProductCard
                  title="camera model 4"
                  price={800}
                  image="/images/camera3.webp"
                />
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;
