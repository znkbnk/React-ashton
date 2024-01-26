import React, { useEffect, useState } from "react";
import "../Contact.css";
import emailjs from "emailjs-com";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  
  const [formData, setFormData] = useState({
    display: false,
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    textarea: "",
  });

  const inputCheck = (e) => {
    let filter = e.target.getAttribute("filter");
    e.target.value = e.target.value.replace(new RegExp(filter, "g"), "");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitCheck = (e) => {
    e.preventDefault();
    const { firstName, lastName, companyName, phone, email, textarea } =
      formData;
    const submitBtn = document.getElementById("submitBtn");

    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !phone ||
      !email ||
      !textarea
    ) {
      alert("Please fill in all fields.");
      document.getElementById("submitBtn").classList.add("error");
    } else if (!email.match(/@./g)) {
      alert("Email is in the wrong format.");
      document.getElementById("submitBtn").classList.add("error");
    } else {
      // Set the recipient's email dynamically

      // Send email using Email.js
      emailjs
        .send(
          "service ID",
          "template ID",
          {
            from_name: `${firstName} ${lastName}`,
            from_company: companyName,
            phone,
            email,
            message: textarea,
          },
          "Public Key"
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          setFormData({ ...formData, display: true });
          submitBtn.classNameList.add("success");
          window.alert("Email sent successfully!");
          // Reset button color after 3 seconds
          setTimeout(() => {
            submitBtn.classNameList.remove("success", "error");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Error sending email. Please try again later.");
          submitBtn.classNameList.add("error");

          // Reset button color after 3 seconds
          setTimeout(() => {
            submitBtn.classNameList.remove("success", "error");
          }, 3000);
        });
    }
  };

  return (
    <div>
      <ScrollToTopOnMount />

      <div className='contact-page-container'>
        <div className='map-container'>
          {/* Your map component or content goes here */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.361417200918!2d-1.9094392229483632!3d52.490697038398096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bceb47edcb43%3A0x8dc00b9177a71f66!2sAshton%20and%20Moore%20Ltd.!5e0!3m2!1sen!2suk!4v1702233251872!5m2!1sen!2suk'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Google Map of Ashton and Moore Ltd.'
          ></iframe>
        </div>
        <div className='content-container'>
          <div className='left-section'>
            <div className='contact-container-names'>
              <h1>Contact Us</h1>
              <div className='icons'>
                <i>
                  <span className='fa fa-map-marker' aria-hidden='true'></span>
                  Ashton & Moore Limited 12 Smith Street, Hockley, Birmingham,
                  B19 3EX
                </i>

                <i>
                  <span className='fa fa-phone' aria-hidden='true'></span>
                  08456 1881 96 (3p/min + telecoms companies access charge)
                </i>

                <i>
                  <span className='fa fa-envelope' aria-hidden='true'></span>
                  contact@ashton-moore.co.uk
                </i>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong> Managing Director and NDT Level III</strong>
                </div>
                <div className='name'>Dr. Keith Tucker</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong> Works Director</strong>
                </div>
                <div className='name'>Mark Hudson</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong> Production Manager</strong>
                </div>
                <div className='name'>Nazia Kouser</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Quality Manager</strong>
                </div>
                <div className='name'>Mark Nikolic</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Quality Administrator</strong>
                </div>
                <div className='name'>Valerie Mcadorey</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Technical Officer</strong>
                </div>
                <div className='name'>Joseph Adams, Paula Kalika</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Quotations</strong>
                </div>
                <div className='name'>
                  Jean Archer, Carol Smith, Greg Barrett
                </div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Contract Review / Customer Liaison</strong>
                </div>
                <div className='name'>Andrew, Ellie Vaughan</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Financial Controller</strong>
                </div>
                <div className='name'>Colin Marks</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Accounts Clerk</strong>
                </div>
                <div className='name'>Rita Cooper</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Purchasing and Stores</strong>
                </div>
                <div className='name'>Paul Laurence</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Despatch Supervisor</strong>
                </div>
                <div className='name'>Tariq Hussain</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Paint Shop Supervisor</strong>
                </div>
                <div className='name'>Will Ashman</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Phosphating / Silver / Cadmium Supervisor</strong>
                </div>
                <div className='name'>Kevin McGihon</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>
                    Sulphuric Anodising Supervisor / Thin Film Sulphuric
                    Anodising
                  </strong>
                </div>
                <div className='name'>Mark Downey</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Chromic Anodising Supervisor</strong>
                </div>
                <div className='name'>Arthur Worth</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Electropolishing Supervisor</strong>
                </div>
                <div className='name'>Mark Downey</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>Tartaric Sulphuric Anodising</strong>
                </div>
                <div className='name'>Mark Downey</div>
              </div>
              <div className='contact-list'>
                <div className='position'>
                  <strong>NDT Supervisor</strong>
                </div>
                <div className='name'>Andrew Hale</div>
              </div>
            </div>
          </div>
          <div className='contact-container'>
            <div className='form'>
              <div className='header'>
                <h4>Make An Enquiry</h4>
                <h4>Please provide your information below.</h4>
              </div>
              <div className='inputcontainer'>
                <input
                  filter='[^a-zA-Z ]'
                  name='firstName'
                  placeholder='First Name'
                  onChange={inputCheck}
                />
                <input
                  filter='[^a-zA-Z ]'
                  name='lastName'
                  placeholder='Last Name'
                  onChange={inputCheck}
                />
                <input
                  name='companyName'
                  placeholder='Company Name'
                  onChange={inputCheck}
                />
                <input
                  filter='[^0-9]'
                  maxLength='10'
                  name='phone'
                  placeholder='Phone Number'
                  onChange={inputCheck}
                />
                <input
                  placeholder='Email Address'
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <textarea
                  type='text'
                  placeholder='Enter your query...'
                  onChange={(e) =>
                    setFormData({ ...formData, textarea: e.target.value })
                  }
                ></textarea>
                <button
                  id='submitBtn'
                  onClick={submitCheck}
                  onTouchStart={(e) => submitCheck(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
