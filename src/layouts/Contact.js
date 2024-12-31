import React, { useState } from 'react';

function Contact() {
  // Define state for form inputs
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., sending the data to an API or backend)
    console.log(formData);
    // You can use fetch or axios to send the form data to the backend or any other service
  };

  return (
    <section className="contact-area pt-100 pb-100" id="contact">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/* Title Section */}
          <div className="col-lg-4 title-section">
            <h2 className="text-uppercase">
              Send <br />
              Us <br />
              Message
            </h2>
            <p>We won’t send any kind of spam</p>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-8">
            <form id="myForm" onSubmit={handleSubmit} className="contact-form">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <input
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                    className="common-input mt-20"
                    required
                    type="text"
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                    className="common-input mt-20"
                    required
                    type="email"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter phone number')}
                    className="common-input mt-20"
                    required
                    type="tel"
                  />
                </div>
                <div className="col-lg-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="common-textarea mt-20"
                    placeholder="Message"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Message')}
                    required
                  />
                  <button className="primary-btn d-inline-flex align-items-center mt-20" type="submit">
                    <span className="mr-10">Send Message</span>
                    <span className="lnr lnr-arrow-right"></span>
                  </button>
                  <br />
                  <div className="alert-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
