import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header"; 
import Footer from "../FooterComponent/Footer"; 
import "./Blog.css";
const BlogPage = () => {
  const { id } = useParams(); 

  return (
    <div>
      <Header /> 
      <div className="blog-page">
        <h1>وبلاگ شماره {id}</h1>
        <p>محتوای وبلاگ {id} اینجا نمایش داده می‌شود.</p>
      </div>
      <Footer /> 
    </div>
  );
};

export default BlogPage;
