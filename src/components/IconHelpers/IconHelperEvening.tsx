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

const IconHelperEvening = ({ eveningIcon }) => {
  return (
    <>
      {eveningIcon ? (
        <div className="">
          {eveningIcon === "" && <div></div>}
          {eveningIcon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="clearsky_day" />
          )}
          {eveningIcon === "partlycloudy_night" && (
            <img
              className="w-10 h-10"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {eveningIcon === "heavyrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {eveningIcon === "rainshowers_day" && (
            <img
              className="w-10 h-10"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {eveningIcon === "lightrainshowers_night" && (
            <img
              className="w-10 h-10"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {eveningIcon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="clearsky_night" />
          )}
          {eveningIcon === "partlycloudy_day" && (
            <img
              className="w-10 h-10"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {eveningIcon === "lightrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {eveningIcon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="fair_day" />
          )}
          {eveningIcon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="cloudy" />
          )}
          {eveningIcon === "heavyrainshowers_day" && (
            <img
              className="w-10 h-10"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {eveningIcon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="fair_night" />
          )}
          {eveningIcon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="heavyrain" />
          )}
          {eveningIcon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="rain" />
          )}
          {eveningIcon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="lightrain" />
          )}
          {eveningIcon === "fog" && (
            <img className="w-10 h-10" src={Fog} alt="fog" />
          )}
          {eveningIcon === "rainandthunder" && (
            <img
              className="w-10 h-10"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {eveningIcon === "heavyrainandthunder" && (
            <img
              className="w-10 h-10"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {eveningIcon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-10 h-10"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {eveningIcon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="rainshowers_night" />
          )}
          {eveningIcon === "lightrainshowers_day" && (
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

export default IconHelperEvening;
