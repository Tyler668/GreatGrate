import React from "react";
import mussels from "../assets/croppederBanner.jpg";
import coast from "../assets/seabanner.jpg";

const Banner = () => {
  //   var banner = mussels;

  //   if (window.location.pathname == "/about") {
  //     banner = mussels;
  //   } else if (window.location.pathname == "/usage") {
  //     banner = coast;
  //   }
  //   var banner = window.location;

  //   console.log("Bnaner:", banner);

  return (
    <div>
      <img className="banner" src={mussels}></img>
    </div>
  );
};

export default Banner;
