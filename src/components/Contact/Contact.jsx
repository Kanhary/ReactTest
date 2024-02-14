import React from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the input values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    // Create the email body
    const emailBody = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Create a mailto link with the email address and body
    const mailtoLink = `mailto:ukkanhary04@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Open the mail client with the pre-filled email
    window.location.href = mailtoLink;

    // Clear the form inputs
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.phone.value = '';
    e.target.elements.message.value = '';
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-contain">
          <div className="c-heading">
            <h2>Contact Us</h2>
            <p>Thank you for visiting my website. If you have any questions, feedback, or would like to get in touch with me,
              <br /> please feel free to reach out using the contact form below or through the provided contact information.
            </p>
          </div>
          <div className="c-row">
            <div className="contact-column-left">
              <div className="detail-title">
                <h3>Contact Details</h3>
              </div>
              <div className="details">
                <div className="c-info">
                  <i><FaLocationDot /></i>
                  <h4>ADDRESS : 
                    <br />
                    <span>St6 Sangkat ToulSangkae ,Reusey Keo ,  <br /> Phnom Penh (Cambodia)
</span>
                  </h4>
                </div>
                <div className="c-info">
                  <i><FaPhoneAlt /></i>
                  <h4>PHONE : 
                    <br />
                    <span>+855965117722</span>
                  </h4>
                </div>
                <div className="c-info">
                  <i><IoIosMail /></i>
                  <h4>EMAIL : 
                    <br />
                    <span>ukkanhary04@gmail.com</span>
                  </h4>
                </div>
              </div>
              <ul className="contact-icon">
                <li className="c-icon facebook">
                  <a href="https://www.facebook.com/profile.php?id=100043775706247&mibextid=ZbWKwL">
                  <span className='tooltip'>Facebook</span>
                  <span><i><FaFacebookF /></i></span>
                  </a>
                </li>
                <li className="c-icon instagram">
                  <a href="https://www.instagram.com/every1loves.ryy?igsh=cXVyYXBkbm9wdG53">
                  <span className='tooltip'>Instagram</span>
                  <span><i><FaInstagram /></i></span>
                  </a>
                </li>
                <li className="c-icon telegram">
                  <a href="https://t.me/Kagna_ry/">
                  <span className='tooltip'>Telegram</span>
                  <span><i><FaTelegramPlane /></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-column-right">
              <form action="" onSubmit={handleSubmit}>
                <div className="inputGroup">
                  <input type="name" id='name' required />
                  <label>Enter Name</label>
                </div>
                <div className="inputGroup">
                  <input type="email" id='email' required />
                  <label>Enter Email</label>
                </div>
                <div className="inputGroup">
                  <input type="phone" id='phone' required />
                  <label>Enter Your Phone</label>
                </div>
                <div className="inputGroup">
                  <textarea id="message" cols="30" rows="5" ></textarea>
                  <label>Enter Your Message</label>
                </div>
                <button type='submit'><span>Submit</span> <i><IoSend /></i></button>
              </form> 
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;