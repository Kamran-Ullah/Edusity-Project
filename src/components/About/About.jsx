import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img
          className="play-icon"
          src={play_icon}
          alt=""
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic
          explicabo maxime voluptates tempore sed perferendis est incidunt
          voluptate provident. Nobis voluptates accusamus distinctio. Impedit,
          repudiandae, voluptas dicta doloribus nulla,{" "}
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          dolor quia minus dolore autem similique atque! Impedit commodi
          distinctio sunt quod eius nemo qui, rem corporis repudiandae nesciunt
          numquam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem enim,
          soluta aspernatur velit, amet optio labore nostrum ullam deserunt,
          exercitationem voluptate? Ipsam dignissimos dolore enim distinctio
          accusantium, ratione veniam est!
        </p>
      </div>
    </div>
  );
};

export default About;
