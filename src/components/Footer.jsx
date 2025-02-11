import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      

        {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Site Logo" className="footer-logo" />
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy a type
            specimen book.
          </p> */}
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How to work?</a></li>
            <li><a href="#">Popular Course</a></li>
            <li><a href="#">Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Offline Course</a></li>
            <li><a href="#">Video Course</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>+0913-705-3875</li>
            <li>Elizabeth.J@jourrapide.com</li>
            <li>4808 Skinner Hollow Road, Days Creek, OR 97429</li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>BookStore All Right Reserved, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
