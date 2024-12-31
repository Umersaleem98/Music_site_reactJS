import React, { useState } from 'react';

function Member() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const members = [
    {
      name: "Fredric Elsa",
      role: "Lead Vocalist",
      dob: "31st Dec, 1989",
      description: "Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.",
      imgSrc: "img/m1.jpg"
    },
    {
      name: "John Doe",
      role: "Guitarist",
      dob: "15th Feb, 1990",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consectetur.",
      imgSrc: "img/m2.jpg"
    },
    {
      name: "Jane Smith",
      role: "Drummer",
      dob: "25th Oct, 1992",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc: "img/m3.jpg"
    }
  ];

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  return (
    <section className="member-area relative pt-100 pb-100">
      <div className="overlay overlay-bg"></div>
      <div className="container relative">
        <div className="row justify-content-center">
          <div className="active-member-carousel">
            {/* Current Member */}
            <div className="single-member item">
              <div className="member-info d-flex flex-row justify-content-center">
                <img className="member-img" src={members[currentIndex].imgSrc} alt={members[currentIndex].name} />
                <div className="details">
                  <h4 className="text-white text-uppercase">{members[currentIndex].name}</h4>
                  <p>{members[currentIndex].role}</p>
                  <p>Date of Birth: {members[currentIndex].dob}</p>
                </div>
              </div>
              <p className="summery">
                {members[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="next-trigger" onClick={nextMember}>
          <span className="lnr lnr-arrow-right"></span>
        </div>
        <div className="prev-trigger" onClick={prevMember}>
          <span className="lnr lnr-arrow-left"></span>
        </div>
      </div>
    </section>
  );
}

export default Member;
