import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-name">Yash Tripathi</h2>
        <div className="contact-info">
          <span className="footer-email">
            📧 <a href="mailto:tripathiyash143@gmail.com">tripathiyash143@gmail.com</a> 
          </span>
          |
          <span className="footer-phone">
            📞 <a href="tel:9260923337">+91-9260923337</a>
          </span>
        </div>
        <a href="https://drive.google.com/file/d/1-jMQOcXVGtjfyR0OxT1l50raSg2l7O_6/view?usp=sharing" download className="cv-button">
          My CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
