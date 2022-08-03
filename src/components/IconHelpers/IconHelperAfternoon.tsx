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

const IconHelperAfternoon = ({ afternoonIcon }) => {
  return (
    <>
      {afternoonIcon ? (
        <div className="w-1/9 mx-2">
          {afternoonIcon === "" && <div></div>}
          {afternoonIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="hej" />
          )}
          {afternoonIcon === "partlycloudy_night" && (
            <img className="w-10 h-10" src={Mooncloud} alt="hej" />
          )}
          {afternoonIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="hej" />
          )}
          {afternoonIcon === "partlycloudy_day" && (
            <img className="w-10 h-10" src={Smallsuncloud} alt="hej" />
          )}
          {afternoonIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="hej" />
          )}
          {afternoonIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="hej" />
          )}
          {afternoonIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="hej" />
          )}
          {afternoonIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="hej" />
          )}
          {afternoonIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="hej" />
          )}
          {afternoonIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="hej" />
          )}
          {afternoonIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="hej" />
          )}
          {afternoonIcon === "heavyrainandthunder" && (
            <img className="w-10 h-10" src={Heavyrainandthunder} alt="hej" />
          )}
          {afternoonIcon === "heavyrainshowersandthunder_day" && (
            <img className="w-10 h-10" src={Sunthunderrain} alt="hej" />
          )}
          {afternoonIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="hej" />
          )}
          {afternoonIcon === "lightrainshowers_day" && (
            <img className="w-10 h-10" src={Sunrain} alt="hej" />
          )}
        </div>
      ) : (
        <div className="w-1/9 mx-2"></div>
      )}
    </>
  );
};

export default IconHelperAfternoon;