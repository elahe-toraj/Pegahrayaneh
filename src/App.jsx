import Header from "./components/Header";
import ProductView from "./components/Productview";
import Slider from "./components/slider";
import "./harchi.css"
function App() {
  return (
    <div>
        <Header />
        <Slider />
      <main>
        <ProductView />
      </main>
    </div>
  );
}

export default App;
