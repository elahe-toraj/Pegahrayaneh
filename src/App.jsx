import React from 'react';
import Header from "./components/Header";
import ProductView from "./components/ProductComponent/ProductView"; 
import Footer from "./components/FooterComponent/Footer"; 
import Quiz from "./components/Quiz";
import Slider from "./components/Slider";  
import ListBlog from "./components/ListBlog"; 
import BlogPage from "./components/BlogPage"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ServiceSection from './components/ServiceComponent/ServiceSection'; 
import "./harchi.css";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Slider />
                <ServiceSection />
                <main>
                  <ProductView />
                  <Quiz /> 
                  <ListBlog />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
