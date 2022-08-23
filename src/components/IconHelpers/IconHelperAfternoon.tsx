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
import Lightrainandthunder from "../../assets/lightrainandthunder.svg";
import RainShowerDay from "../../assets/rainshowerday.svg";
import LightRainShowersNight from "../../assets/lightrainshowers_night.svg";
import Heavyrainshowersday from "../../assets/heavyrainshowersday.svg";
import Heavyrainshowersnight from "../../assets/heavyrainshowersnight.svg";


const IconHelperAfternoon = ({ afternoonIcon }) => {
  return (
    <>
      {afternoonIcon ? (
        <div className="">
          {afternoonIcon === "" && <div></div>}
          {afternoonIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="clearsky_day" />
          )}
          {afternoonIcon === "partlycloudy_night" && (
            <img
              className="w-10 h-10"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {afternoonIcon === "heavyrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {afternoonIcon === "heavyrainshowers_day" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {afternoonIcon === "rainshowers_day" && (
            <img
              className="w-10 h-10"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {afternoonIcon === "lightrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {afternoonIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="clearsky_night" />
          )}
          {afternoonIcon === "partlycloudy_day" && (
            <img
              className="w-10 h-10"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {afternoonIcon === "lightrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {afternoonIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="fair_day" />
          )}
          {afternoonIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="cloudy" />
          )}
          {afternoonIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="fair_night" />
          )}
          {afternoonIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="heavyrain" />
          )}
          {afternoonIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="rain" />
          )}
          {afternoonIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="lightrain" />
          )}
          {afternoonIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="fog" />
          )}
          {afternoonIcon === "heavyrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {afternoonIcon === "rainandthunder" && (
            <img
              className="w-10 h-10"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {afternoonIcon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-10 h-10"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {afternoonIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="rainshowers_night" />
          )}
          {afternoonIcon === "lightrainshowers_day" && (
            <img
              className="w-10 h-10"
              src={Sunrain}
              alt="lightrainshowers_day"
            />
          )}
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default IconHelperAfternoon;
