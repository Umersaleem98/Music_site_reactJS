import React from 'react';

function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row footer-content">
          {/* Copyright Section */}
          <div className="col-lg-6 copy-right-text">
            Copyright &copy;
            <script>{`document.write(new Date().getFullYear())`}</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
          </div>

          {/* Social Media Links Section */}
          <div className="col-lg-6 footer-social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-behance"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
