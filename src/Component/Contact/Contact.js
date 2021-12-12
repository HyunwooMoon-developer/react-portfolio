/* eslint-disable react/jsx-no-target-blank */
import './Contact.css';
import Github from '../../image/github.png';
import LinkedIn from '../../image/linkedin.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import resume from '../../image/resume.png';

const Contact = () => {
  //https://www.emailjs.com/docs/examples/reactjs/  <= email.js
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_kvjbp2a',
        'template_q5dess6',
        form.current,
        'user_OkPtIYIHVWwrEBmi2kuKe'
      )
      .then(setSent(true));
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h1 className="contact-title">Contact Me</h1>
        {sent ? (
          <div className="email-sent">Thank you! :)</div>
        ) : (
          <div className="contact-email">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" required />
              <br />
              <input
                type="text"
                placeholder="E-mail"
                name="user_email"
                required
              />
              <br />
              <textarea
                row="6"
                type="text"
                placeholder="Please message here!"
                name="message"
                required
              />
              <button>Submit</button>
            </form>
          </div>
        )}
      </div>
      <div className="contact-info-item">
        <a href="/files/resume.pdf" target="_blank" download>
          <img src={resume} alt="pdf" className="contact-icon" />
        </a>
        <a href="https://github.com/HyunwooMoon-developer" target="_blank">
          <img src={Github} alt="GitHub" className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/hyunwoomoon/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn" className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
