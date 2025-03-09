import Header from "./components/Header";
import Slider from "./components/slider";
import ProductView from "./components/Productview";
import "./harchi.css"
function App() {
  return (
    <div>
        <Header />
      <main>
        <Slider />
        <ProductView />
      </main>
    </div>
  );
}

export default App;
