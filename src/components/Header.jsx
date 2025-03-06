import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <a href="/" className="logo">پگاه رایانه</a>
        <nav className="navbar">
          <a href="/">خانه</a>
          <a href="/blog">مجله خبری</a>
          <a href="/ads">ارتباط با ما</a>
        </nav> 

        <div className="search-box">
          <input type="text" placeholder="سرچ کنید..." />
          <i className="bx bx-search"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
