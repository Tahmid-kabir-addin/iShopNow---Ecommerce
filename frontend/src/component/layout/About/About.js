import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitFacebook = () => {
    window.location = "https://www.facebook.com/Addin.Tahmid.Kabir/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dfoqr8sif/image/upload/v1692200817/avatars/313269540_3155884901390464_7202136195450832068_n_ylwnf4.jpg"
              alt="Founder"
            />
            <Typography>Tahmid Kabir</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit Facebook
            </Button>
            {/* <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span> */}
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dfoqr8sif/image/upload/v1692123881/avatars/at2oiigaullkuhpoaafx.jpg"
              alt="Founder"
            />
            <Typography>Mainul Hasan</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit Facebook
            </Button>
            {/* <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span> */}
          </div>
        </div>
        <div className="par">
          Welcome to our vibrant ecommerce haven, where convenience meets elegance. Explore a handpicked selection of products that redefine style and functionality. From fashion to home essentials, we bring you curated treasures that elevate everyday living. With seamless navigation and secure transactions, your shopping experience is effortless. Immerse yourself in a world of choice, where innovation and quality converge. Embrace a new era of online shopping, tailored to your desires. Join us and indulge in a symphony of fashion, technology, and lifestyle. Your journey starts now – a journey where every click brings you closer to exceptional finds.
        </div>
      </div>
    </div>
  );
};

export default About;
