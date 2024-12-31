import React from 'react';

function Services() {
  return (
    <section className="service-area pt-100 pb-100" data-parallax="scroll" data-image-src="img/service-bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* First Service */}
            <div className="single-service d-flex justify-content-between align-items-top">
              <div className="icon">
                <img src="img/s1.png" alt="DJ Party" />
              </div>
              <div className="desc">
                <h4 className="text-uppercase">DJ Party on the house</h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.
                </p>
              </div>
            </div>

            {/* Second Service */}
            <div className="single-service d-flex justify-content-between align-items-top">
              <div className="icon">
                <img src="img/s2.png" alt="Concert" />
              </div>
              <div className="desc">
                <h4 className="text-uppercase">Concert at its best</h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.
                </p>
              </div>
            </div>

            {/* Third Service */}
            <div className="single-service d-flex justify-content-between align-items-top">
              <div className="icon">
                <img src="img/s3.png" alt="Music Videos" />
              </div>
              <div className="desc">
                <h4 className="text-uppercase">Playing Music Videos</h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
