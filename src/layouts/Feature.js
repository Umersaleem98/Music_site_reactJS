import React from 'react';

function Feature() {
  return (
    <section className="feature-area pb-100" id="feature">
      <div className="container">
        <div className="row">
          {/* First Image */}
          <div className="col-lg-4 col-md-4 no-padding single-img">
            <img src="img/f1.jpg" className="image img-fluid" alt="Feature 1" />
            <div className="middle">
              <h2 className="text-uppercase text-white">Concert Toronto</h2>
              <p>Need concert details</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="col-lg-4 col-md-4 no-padding single-img">
            <img src="img/f2.jpg" className="image img-fluid" alt="Feature 2" />
            <div className="middle">
              <h2 className="text-uppercase text-white">Concert Toronto</h2>
              <p>Need concert details</p>
            </div>
          </div>

          {/* Third Image */}
          <div className="col-lg-4 col-md-4 no-padding single-img">
            <img src="img/f3.jpg" className="image img-fluid" alt="Feature 3" />
            <div className="middle">
              <h2 className="text-uppercase text-white">Concert Toronto</h2>
              <p>Need concert details</p>
            </div>
          </div>

          {/* Fourth Image with Video Link */}
          <div className="col-lg-6 col-sm-12 no-padding single-img">
            <img src="img/f4.jpg" className="image img-fluid" alt="Feature 4" />
            <div className="middle2">
              <a href="https://www.youtube.com/watch?v=L3V7LKYPIUQ" className="play-btn">
                <img className="vdo-icon" src="img/video-btn.png" alt="Play Video" />
              </a>
              <h2 className="text-uppercase text-white">Being unique is the preference</h2>
              <p>Youtube video will appear in popover</p>
            </div>
          </div>

          {/* Fifth Image with Video Link */}
          <div className="col-lg-6 col-sm-12 no-padding single-img">
            <img src="img/f5.jpg" className="image img-fluid" alt="Feature 5" />
            <div className="middle2">
              <a href="https://www.youtube.com/watch?v=L3V7LKYPIUQ" className="play-btn">
                <img className="vdo-icon" src="img/video-btn.png" alt="Play Video" />
              </a>
              <h2 className="text-uppercase text-white">Being unique is the preference</h2>
              <p>Youtube video will appear in popover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
