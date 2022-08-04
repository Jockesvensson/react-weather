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

const IconHelperMorning = ({ morningIcon }) => {
  return (
    <>
      {morningIcon ? (
        <div className="">
          {morningIcon === "" && <div className=""></div>}
          {morningIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="hej" />
          )}
          {morningIcon === "partlycloudy_night" && (
            <img className="w-10 h-10" src={Mooncloud} alt="hej" />
          )}
          {morningIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="hej" />
          )}
          {morningIcon === "partlycloudy_day" && (
            <img className="w-10 h-10" src={Smallsuncloud} alt="hej" />
          )}
          {morningIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="hej" />
          )}
          {morningIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="hej" />
          )}
          {morningIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="hej" />
          )}
          {morningIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="hej" />
          )}
          {morningIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="hej" />
          )}
          {morningIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="hej" />
          )}
          {morningIcon === "rainandthunder" && (
            <img className="w-10 h-10" src={Rainandthunder} alt="hej" />
          )}
          {morningIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="hej" />
          )}
          {morningIcon === "heavyrainandthunder" && (
            <img className="w-10 h-10" src={Heavyrainandthunder} alt="hej" />
          )}
          {morningIcon === "heavyrainshowersandthunder_day" && (
            <img className="w-10 h-10" src={Sunthunderrain} alt="hej" />
          )}
          {morningIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="hej" />
          )}
          {morningIcon === "lightrainshowers_day" && (
            <img className="w-10 h-10" src={Sunrain} alt="hej" />
          )}
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default IconHelperMorning;
