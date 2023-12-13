import React, { useState } from "react";
import "../Contact.css"; 
import Footer from "./Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    display: false,
    firstName: "",
    lastName: "",
    companyName: '',
    phone: "",
    email: "",
    textarea: "",
  });

  const inputCheck = (e) => {
    let filter = e.target.getAttribute("filter");
    e.target.value = e.target.value.replace(new RegExp(filter, "g"), "");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitCheck = () => {
    const { firstName, lastName, companyName, phone, email, textarea } = formData;
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
          submitBtn.classList.add("success");
          window.alert("Email sent successfully!");
          // Reset button color after 3 seconds
          setTimeout(() => {
            submitBtn.classList.remove("success", "error");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Error sending email. Please try again later.");
          submitBtn.classList.add("error");

          // Reset button color after 3 seconds
          setTimeout(() => {
            submitBtn.classList.remove("success", "error");
          }, 3000);
        });
    }
  };

  return (
    <div>
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
            <h2>Left Section</h2>
            <table class='borderless' width='100%'>
              <tbody>
                <tr></tr>
                <tr>
                  <td>
                    Managing Director and NDT Level III
                    <hr />
                  </td>
                  <td>-Dr. Keith Tucker</td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Works Director
                      <hr />
                    </p>
                  </td>
                  <td>
                    <p>-Mark Hudson</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Production Manager
                    <hr />
                  </td>
                  <td>
                    <p>-Nazia Kouser</p>
                  </td>
                </tr>
                <tr>
                  <td>Quality Manager</td>

                  <td>-Mark Nikolic</td>
                </tr>
                <tr>
                  <td>
                    <span>Quality Administrator</span>
                  </td>
                  <td>-Valerie Mcadorey</td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <span>
                      <span>Technical Officer</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>Joseph Adams</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Technical Officer</td>

                  <td>Paula Kalika</td>
                </tr>
                <hr />

                <tr>
                  <td>Quotations</td>
                  <td>
                    <p>-Jean Archer</p>
                    <p>-Carol Smith</p>
                    <p>-Greg Barrett</p>
                  </td>
                </tr>
                <hr />

                <tr>
                  <td>Contract Review / Customer Liaison</td>
                  <td>
                    <p>
                      <span>-Andrew</span>
                    </p>
                    <p>-Ellie Vaughan</p>
                  </td>
                </tr>
                <hr />

                <tr>
                  <td>
                    <span>Financial Controller</span>
                  </td>
                  <td>
                    <span>
                      <span>-Colin Marks</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <span>Accounts Clerk</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>-Rita Cooper</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <span>Purchasing and Stores</span>
                    </span>
                  </td>
                  <td>Ted Tancred / Paul Laurence</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <span>Despatch Supervisor</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>-Tariq Hussain</span>
                    </span>
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <span>
                      <span>Paint Shop Supervisors</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>-Will Ashman</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <span>Phosphating / Silver / Cadmium Supervisor</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>-Kevin McGihon</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <span>
                        Sulphuric Anodising Supervisor / Thin Film Sulphuric
                        Anodising
                      </span>
                    </span>
                  </td>
                  <td>
                    <span>-Mark Downey</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Chromic Anodising Supervisor</span>
                  </td>
                  <td>
                    <span>-Arthur Worth</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Electropolishing Supervisor</span>
                  </td>
                  <td>
                    <span>-Mark Downey</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Tartaric Sulphuric Anodising</span>
                  </td>
                  <td>
                    <span>-Mark Downey</span>
                  </td>
                </tr>
                <tr>
                  <td>NDT Supervisor</td>
                  <td>-Andrew Hale</td>
                </tr>
                <hr />
              </tbody>
            </table>
          </div>
          <div className='contact-container'>
            <div className='form'>
              <div className='header'>
                <h1>Welcome!</h1>
                <p>Please provide your information below.</p>
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
                <button id='submitBtn' onClick={submitCheck}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
