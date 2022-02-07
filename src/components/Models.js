import React from "react";
// import Card from "./Card";
import triangle from "../assets/tri.JPG";
import rectangle from "../assets/rect.JPG";
import hexagon from "../assets/Hex.jpg";

const Models = () => {
  return (
    <div className="About">
      <div className="aboutBlurb">
        <h2 className="modeltitle">Models for purchase </h2>
        <p className="modeltitle">
          All models are US made with premium rust resistant stainless steel!
          Contact greatgrate@yahoo.com for inquiries!
        </p>
        <div className="cardGrid">
          <div className="cardContainer">
            <div className="picContainer">
              <h3>Shellfish Lover</h3>
              <img className="modelPic" src={rectangle}></img>
            </div>
            <div className="subText">
              <h4>$49.99</h4>
              <h4>Dimensions: 12" x 16"</h4>
              <p>
                The Shellfish Lover's model is our largest, meant for true
                enthusiasts! Fits on a standard half hotel sheet and feeds
                dozens!
              </p>
            </div>
          </div>

          <div className="cardContainer">
            <div className="picContainer">
              <h3>Triangular</h3>
              <img className="modelPic" src={triangle}></img>
            </div>
            <div className="subText">
              <h4>$34.99</h4>
              <h4>Dimensions: 3 x 12"</h4>
              <p>
                Classic triangular shape for efficient grill space economy!
                Includes 12" x 12" serving board!
              </p>
            </div>
          </div>

          <div className="cardContainer">
            <div className="picContainer">
              <h3>Hexagonal</h3>
              <img className="modelPic" src={hexagon}></img>
            </div>
            <div className="subText">
              <h4>$14.99</h4>
              <h4>Dimensions: 6 x 4"</h4>
              <p>
                Small hexagonal appetizer model with convenient center hole for
                your various accoutrements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
