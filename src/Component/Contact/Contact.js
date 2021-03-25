/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <h2>Contact Me</h2>
        <form
          action="http://formspree.io/f/mknpznyd"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Your Name : </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            required
          />
          <br />
          <label htmlFor="email">Your E-mail : </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="your email"
            required
          />
          <br />
          <label htmlFor="message">Message : </label>
          <br />
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="text"
            rows="4"
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="contact-social">
          <SocialIcon
            url="http://www.linkedin.com/in/hyunwoomoon"
            target="_blank"
          />{" "}
          <SocialIcon
            url="http://github.com/HyunwooMoon-developer"
            target="_blank"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
