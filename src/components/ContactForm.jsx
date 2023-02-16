import React, { useState } from "react";
import "../components-css/ContactForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import { getSiteKey } from "../CaptchaKeys";

function ContactForm() {
  const [wrongCaptcha, setWrongCaptcha] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  let captcha;
  function onChange(value) {
    if (value) {
      setWrongCaptcha(false);
    } else {
      setWrongCaptcha(true);
    }
  }

  const handleMailSubmit = (e) => {
    e.preventDefault();
    captcha = null;
    if (!wrongCaptcha) {
      setWrongCaptcha(true);
    }
  };

  const resetCaptcha = () => {
    if (captcha !== null && captcha !== undefined) {
      captcha.reset();
    }
    if (!wrongCaptcha) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-header-container">
          <div className="left-line"></div>
          <h2 className="contact-header">GET IN TOUCH</h2>
          <div className="right-line"></div>
        </div>
        <form encType="multipart/form-data" onSubmit={handleMailSubmit} autoComplete="off">
          <div className="name-mail-container">
            <div className="name-container">
              <label htmlFor="inp" className="inp">
                <input type="text" name="name" required className="inputs" placeholder="&nbsp;" />
                <span className="label">Name</span>
                <svg width="200px" height="26px" viewBox="0 0 200 26" className="contact-form-svg">
                  <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 200,25"></path>
                </svg>
              </label>
            </div>
            <div className="mail-container">
              <label htmlFor="inp" className="inp">
                <input type="email" name="email" required className="inputs" placeholder="&nbsp;" />
                <span className="label">Email</span>
                <svg width="200px" height="26px" viewBox="0 0 200 26" className="contact-form-svg">
                  <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 200,25"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="message-container">
            <label htmlFor="inp" className="mess-inp">
              <input type="text" name="message" required className="mess-inputs" placeholder="&nbsp;" />
              <span className="label">Message</span>
              <svg width="100%" height="26px" viewBox="0 0 200 26" preserveAspectRatio="none" className="mess-svg">
                <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 200,25" width="100%"></path>
              </svg>
            </label>
          </div>
          <div className="captcha-container">
            <ReCAPTCHA sitekey={getSiteKey()} onChange={onChange} />
            {wrongCaptcha && <span className="wrong-captcha">Please solve the captcha</span>}
          </div>
          <div className="send-button-container">
            <button className="send-button" type="submit" onClick={resetCaptcha}>
              Send
            </button>
            {isSubmitted && <span className="email-sent">Email sent</span>}
          </div>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
