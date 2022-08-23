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

const IconHelperNight = ({ nightIcon }) => {
  return (
    <>
      {nightIcon ? (
        <div className="">
          {nightIcon === "" && <div className=""></div>}
          {nightIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="clearsky_day" />
          )}
          {nightIcon === "partlycloudy_night" && (
            <img
              className="w-10 h-10"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {nightIcon === "heavyrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {nightIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="clearsky_night" />
          )}
          {nightIcon === "rainshowers_day" && (
            <img
              className="w-10 h-10"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {nightIcon === "lightrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {nightIcon === "partlycloudy_day" && (
            <img
              className="w-10 h-10"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {nightIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="fair_day" />
          )}
          {nightIcon === "lightrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {nightIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="cloudy" />
          )}
          {nightIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="fair_night" />
          )}
          {nightIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="heavyrain" />
          )}
          {nightIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="rain" />
          )}
          {nightIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="lightrain" />
          )}
          {nightIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="fog" />
          )}
          {nightIcon === "heavyrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {nightIcon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-10 h-10"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {nightIcon === "heavyrainshowers_day" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {nightIcon === "rainandthunder" && (
            <img
              className="w-10 h-10"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {nightIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="rainshowers_night" />
          )}
          {nightIcon === "lightrainshowers_day" && (
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

export default IconHelperNight;
