import React from "react";

const Card = (pic, desc) => {
  return (
    <div className="cardContainer">
      <div className="picContainer">
        <img className="modelPic" src={pic}></img>
      </div>
      <div className="subText">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
