import React from 'react';

function About() {
  return (
    <section className="about-area" id="about">
      <div className="container-fluid">
        <div className="row d-flex justify-content-start align-items-center">
          {/* Left Column: Image */}
          <div className="col-lg-6 col-md-12 no-padding">
            <img className="img-fluid" src="img/about-img.png" alt="About Image" />
          </div>

          {/* Right Column: Text */}
          <div className="about-details col-lg-4 col-md-12">
            <h2>
              <span>Music</span> gives soul to the universe, <br />
              wings to the <span>mind</span>, flight <br />
              to the <span>imagination</span>.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
