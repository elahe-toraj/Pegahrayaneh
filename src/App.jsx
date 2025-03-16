import Footer from "./components/Footer component/Footer";
import Header from "./components/Header";
import ProductView from "./components/Productview";
import Quiz from "./components/Quiz";
import Slider from "./components/slider";
import "./harchi.css";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <main>
        <ProductView />
        <Quiz />
      </main>
      <Footer /> {/* اطمینان از استفاده از کامپوننت Footer */}
    </div>
  );
}

export default App;