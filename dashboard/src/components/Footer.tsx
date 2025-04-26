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
        <a href="https://drive.google.com/file/d/1Kpxt42kXWsmyG-w_GM5PpQysOOfKeraJ/view" download className="cv-button">
          My CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
