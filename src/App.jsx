import Header from "./components/Header";
import ProductView from "./components/Productview";
import Quiz from "./components/Quiz";
import Slider from "./components/slider";
import "./harchi.css"
function App() {
  return (
    <div>
        <Header />
        <Slider />
      <main>
        <ProductView />
        <Quiz />
      </main>
    </div>
  );
}

export default App;
