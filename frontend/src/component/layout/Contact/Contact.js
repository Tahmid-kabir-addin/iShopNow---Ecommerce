import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './Contact.css'
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false); // State for the popup

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gq9uhns",
        "template_bprd1yr",
        form.current,
        "BtZ2vNMb7yLExSIis"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowPopup(true); // Update the state to show the popup
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <div className="form">
    <>
      <StyledContactForm>
        <h2>Contact Us</h2>
        <hr />
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        {showPopup && <Popup>Successfully Sent!</Popup>}
      </StyledContactForm>
    </>
  );
};

export default Contact;

const Popup = styled.div`
  position: fixed;
  bottom: 0; /* Display at the bottom */
  left: 0;
  width: 100%;
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 18px;
`;
// Styles
const StyledContactForm = styled.div`
  width: 30%;
  margin-left: 500px;
  padding-top: 100px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    font-family: roboto;
  }
  hr {
    width: 40px;
    margin: 10px auto;
    border: 2px solid #ccc;
    color: black;
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid tomato;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid tomato;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
    input[type="submit"]: hover {
      background: #d13e04;
    }
  }
`;