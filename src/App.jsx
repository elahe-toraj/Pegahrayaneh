import React from 'react';
import Footer from "./components/Footer component/Footer";
import Header from "./components/Header";
import ProductView from "./components/Productview";
import Quiz from "./components/Quiz";
import Slider from "./components/slider";
import ListBlog from "./components/ListBlog"; // تغییر نام به ListBlog
import BlogPage from "./components/BlogPage"; // وارد کردن BlogPage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // وارد کردن Router

import "./harchi.css";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Routes>
          {/* صفحه اصلی */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Slider />
                <main>
                <ProductView />
                <ListBlog />
                </main>
                <Footer />
              </>
            }
          />
          
          {/* صفحه وبلاگ خاص */}
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
=======
    <div>
      <Header />
      <Slider />
      <main>
        <ProductView />
        <Quiz />
      </main>
      <Footer /> 
    </div>
>>>>>>> ad9496c6cd2e6be3102b20c5cb8cd8b649fcda0c
  );
}

export default App;
