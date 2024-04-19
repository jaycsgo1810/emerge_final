import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const registerFeedback = async (e) => {
    e.preventDefault();
    console.log(formDetails);
    try {
      const response = await axios.post(
        "/feedback/add",
        {
          name: formDetails.name,
          email: formDetails.email,
          feedback: formDetails.message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      console.log(formDetails);
      console.log(response);
      toast.success("Feedback added successfully");
    } catch (error) {
      console.error("Error adding feedback:", error);
      toast.error("Unable to add feedback");
    }
  }

  return (
    <section
      className="register-section flex-center"
      id="contact"
    >
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Feedback</h2>
        <form
          className="register-form "
        >
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>

          <button
            type="submit"
            className="btn form-btn"
            onClick={registerFeedback}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
