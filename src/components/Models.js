import React from "react";
// import Card from "./Card";
import pic from "../assets/gg2.PNG";

const Models = () => {
  return (
    <div className="About">
      <div className="aboutBlurb">
        <div className='cardGrid'>
          <div className="cardContainer">
            <div className="picContainer">
              <img className="modelPic" src={pic}></img>
            </div>
            <div className="subText">
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot

              </p>
            </div>
          </div>

          <div className="cardContainer">
            <div className="picContainer">
              <img className="modelPic"></img>
            </div>
            <div className="subText">
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot

              </p>
            </div>
          </div>

          <div className="cardContainer">
            <div className="picContainer">
              <img className="modelPic"></img>
            </div>
            <div className="subText">
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
