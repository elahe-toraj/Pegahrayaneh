import React from 'react';
import Footer from "./components/Footer component/Footer";
import Header from "./components/Header";
import ProductView from "./components/Productview";
import Quiz from "./components/Quiz";
import Slider from "./components/slider";
import ListBlog from "./components/ListBlog"; 
import BlogPage from "./components/BlogPage"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

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
