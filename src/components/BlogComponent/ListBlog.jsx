import React from 'react';
import { Link } from 'react-router-dom';

const ListBlog = () => {
    return (
        <section className="blog-container">
            <div className="blog-list">
                <div className="blog-header">
                    <Link to="/blogs" className="view-more">مشاهده بیشتر</Link>

                    <h2 className="blog-title">وبلاگ‌ها</h2>
                </div>

                <div className="blog-box">
                    <Link to="/blog/1">
                        <div className="blog-image">
                            <img src="public/img/4.jpg" alt="Blog 1" />
                        </div>
                        <h3>وبلاگ 1</h3>
                        <p>توضیحات وبلاگ 1</p>
                    </Link>
                </div>
                <div className="blog-box">
                    <Link to="/blog/2">
                        <div className="blog-image">
                            <img src="public/img/3.jpg" alt="Blog 2" />
                        </div>
                        <h3>وبلاگ 2</h3>
                        <p>توضیحات وبلاگ 2</p>
                    </Link>
                </div>
                <div className="blog-box">
                    <Link to="/blog/3">
                        <div className="blog-image">
                            <img src="public/img/2.jpg" alt="Blog 3" />
                        </div>
                        <h3>وبلاگ 3</h3>
                        <p>توضیحات وبلاگ 3</p>
                    </Link>
                </div>
                <div className="blog-box">
                    <Link to="/blog/4">
                        <div className="blog-image">
                            <img src="public/img/5.jpg" alt="Blog 4" />
                        </div>
                        <h3>وبلاگ 4</h3>
                        <p>توضیحات وبلاگ 4</p>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default ListBlog;
