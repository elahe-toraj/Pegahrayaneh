import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <section>
      <header>
        <div className="header">
          <a href="/" className="logo">پگاه رایانه</a>
          <nav className="navbar">
            <a href="/" className="active">خانه</a>
            <a href="/blog">مجله خبری</a>
            <a href="/ads">ارتباط با ما</a>
          </nav> 
          <div className="search-box">
            <input type="text" placeholder="سرچ کنید..." />
            <i className="bx bx-search"></i>
          </div>
        </div>
      </header>
    </section>

  );
};

export default Header;
