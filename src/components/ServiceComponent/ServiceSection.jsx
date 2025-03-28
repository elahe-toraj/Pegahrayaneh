import React from 'react';
import './ServiceCard.css'; // فایل استایل خود را اینجا وارد کنید

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <a href={link} className="service-card-button">مشاهده بیشتر</a>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div className="service-section">
      <ServiceCard 
        title="خدمات مشاوره" 
        description="ما به شما کمک می‌کنیم تا بهترین راهکارهای تکنولوژی را برای کسب‌وکار خود انتخاب کنید." 
        link="/consulting"
      />
      <ServiceCard 
        title="فروش محصولات تکنولوژی" 
        description="محصولات جدید و پیشرفته تکنولوژی را با قیمت مناسب از ما تهیه کنید."
        link="/products"
      />
      <ServiceCard 
        title="آموزش و پشتیبانی" 
        description="ما دوره‌های آموزشی و پشتیبانی فنی برای محصولات و خدمات ارائه می‌دهیم."
        link="/support"
      />
    </div>
  );
};

export default ServiceSection;
