import React from 'react';

function StartQuote() {
  return (
    <section className="quote-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 quote-left">
            <h2 className="text-right">
              <span>Music</span> gives soul to the universe,
              <br />
              wings to the <span>mind</span>, flight
              <br />
              to the <span>imagination</span>.
            </h2>
          </div>
          <div className="col-lg-6 col-sm-12 quote-right">
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartQuote;
