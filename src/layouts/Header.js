import React, { useState } from 'react';

function Header() {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="banner-area relative" id="home">
      <div className="container">
        {/* Start Header Area */}
        <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  {/* Use a relative path from the public folder */}
                  <a href="#home">
                    <img src="/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="main-menubar d-flex align-items-center">
                  {/* Conditionally apply the 'show' class to the nav based on the state */}
                  <nav className={isMenuOpen ? 'show' : 'hide'}>
                    <a href="#home">Home</a>
                    <a href="#feature">Feature</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                  </nav>
                  <div className="menu-bar" onClick={toggleMenu}>
                    <span className="lnr lnr-menu"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area */}

        <div
          className="row fullscreen align-items-center justify-content-center"
          style={{ height: '735px' }}
        >
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h1 className="text-uppercase text-white">Music is life</h1>
              <p className="text-uppercase mx-auto">Universal Truth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
