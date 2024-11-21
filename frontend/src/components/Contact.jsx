import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.scss'; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSubmitting = useRef(false); // Ref to track submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting.current) return;

    if (name && email && message) {
      isSubmitting.current = true; // Set submitting to true

      // Show success toast
      toast.success('Your message has been sent successfully!', {
        position: "top-right",
        autoClose: 3000, // Automatically close after 3 seconds
      });

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');

      // Reset submission status after a short delay to allow for toast display
      setTimeout(() => {
        isSubmitting.current = false; // Allow resubmission
      }, 3500); // Duration longer than toast autoClose
    } else {
      // Show error toast if form fields are incomplete
      toast.error('Please fill out all the fields!', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="contact-form-container" id='contact'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className='noto-serif-oriya'>CONTACT US</h2>

        <div className="form-group">
          <label htmlFor="name" className='roboto-slab'>Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className='roboto-slab'>Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className='roboto-slab'>Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <ToastContainer 
        autoClose={3000} // Ensures toasts automatically close
        hideProgressBar={true} // Option to hide the progress bar
        closeOnClick={true} // Allow closing the toast on click
        draggable={false} // Prevent dragging
        pauseOnHover={false} // Don't pause on hover
      />
    </div>
  );
};
export default ContactForm;