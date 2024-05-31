// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      emailjs
        .sendForm('service_9wtlvnf', 'template_kp8gjlk', form.current, '0_SjZpcT5ozqBaa3m')
        .then(
          () => {
            toast.success('Successfully Submitted!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce
            });
            resetForm();
          },
          (error) => {
            toast.error(`Failed to send message: ${error.text}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce
            });
          }
        );
    }
  };

  const validateForm = () => {
    const firstname = document.getElementById("fname").value.trim();
    const lastname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("msg").value.trim();

    if (firstname === "" || lastname === "" || email === "" || message === "") {
      toast.warn('Please fill in all fields.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return false;
    }
    return true;
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className="border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Contact
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <input type="text" name="from_first_name" placeholder="First Name" id="fname" />
            <input type="text" name="from_last_name" placeholder="Last Name" id="lname" />
          </div>
          <input type="text" name="from_email" placeholder="Email" id="email" />
          <textarea name="message" placeholder="Message" rows={3} id="msg"></textarea>
          <button type="submit">Submit</button>
          <ToastContainer />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
