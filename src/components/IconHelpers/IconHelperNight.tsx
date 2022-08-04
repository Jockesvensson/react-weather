import React from "react";
import Sun from "../../assets/sun.svg";
import Halfmoon from "../../assets/halfmoon.svg";
import Mooncloud from "../../assets/mooncloud.svg";
import Smallsuncloud from "../../assets/smallsuncloud.svg";
import Bigsuncloud from "../../assets/bigsuncloud.svg";
import Lightcloud from "../../assets/lightcloud.svg";
import Bigmooncloud from "../../assets/bigmooncloud.svg";
import Rain from "../../assets/rain.svg";
import Littlerain from "../../assets/littlerain.svg";
import Smallrain from "../../assets/smallrain.svg";
import Fog from "../../assets/fog.svg";
import Sunthunderrain from "../../assets/sunthunderrain.svg";
import Heavyrainandthunder from "../../assets/heavyrainandthunder.svg";
import Moonrain from "../../assets/moonrain.svg";
import Sunrain from "../../assets/sunrain.svg";
import Rainandthunder from "../../assets/rainandthunder.svg";

const IconHelperNight = ({ nightIcon }) => {
  return (
    <>
      {nightIcon ? (
        <div className="">
          {nightIcon === "" && <div className=""></div>}
          {nightIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="hej" />
          )}
          {nightIcon === "partlycloudy_night" && (
            <img className="w-10 h-10" src={Mooncloud} alt="hej" />
          )}
          {nightIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="hej" />
          )}
          {nightIcon === "partlycloudy_day" && (
            <img className="w-10 h-10" src={Smallsuncloud} alt="hej" />
          )}
          {nightIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="hej" />
          )}
          {nightIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="hej" />
          )}
          {nightIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="hej" />
          )}
          {nightIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="hej" />
          )}
          {nightIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="hej" />
          )}
          {nightIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="hej" />
          )}
          {nightIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="hej" />
          )}
          {nightIcon === "heavyrainandthunder" && (
            <img className="w-10 h-10" src={Heavyrainandthunder} alt="hej" />
          )}
          {nightIcon === "heavyrainshowersandthunder_day" && (
            <img className="w-10 h-10" src={Sunthunderrain} alt="hej" />
          )}
          {nightIcon === "rainandthunder" && (
            <img className="w-10 h-10" src={Rainandthunder} alt="hej" />
          )}
          {nightIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="hej" />
          )}
          {nightIcon === "lightrainshowers_day" && (
            <img className="w-10 h-10" src={Sunrain} alt="hej" />
          )}
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default IconHelperNight;
