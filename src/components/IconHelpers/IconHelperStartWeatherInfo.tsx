import React, { useEffect, useState } from "react";
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
import Rainandthunder from "../../assets/rainandthunder.svg";
import Heavyrainandthunder from "../../assets/heavyrainandthunder.svg";
import Sunthunderrain from "../../assets/sunthunderrain.svg";
import Moonrain from "../../assets/moonrain.svg";
import Sunrain from "../../assets/sunrain.svg";
import Lightrainandthunder from "../../assets/lightrainandthunder.svg";
import RainShowerDay from "../../assets/rainshowerday.svg";
import LightRainShowersNight from "../../assets/lightrainshowers_night.svg";
import Heavyrainshowersday from "../../assets/heavyrainshowersday.svg";
import Heavyrainshowersnight from "../../assets/heavyrainshowersnight.svg";

const IconHelperStartWeatherInfo = ({ icons }) => {
  const [icon, setIcon] = useState<any>([]);

  useEffect(() => {
    setIcon(icons);
  }, [icons]);

  return (
    <>
      {icon ? (
        <>
          {icon === "clearsky_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Sun}
              alt="clearsky_day"
            />
          )}
          {icon === "partlycloudy_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {icon === "heavyrainshowers_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {icon === "rainshowers_day" && (
            <img
              className="w-20 h-20"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {icon === "lightrainshowers_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {icon === "clearsky_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Halfmoon}
              alt="clearsky_night"
            />
          )}
          {icon === "heavyrainshowers_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {icon === "partlycloudy_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {icon === "fair_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Bigsuncloud}
              alt="fair_day"
            />
          )}
          {icon === "lightrainandthunder" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {icon === "cloudy" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Lightcloud}
              alt="cloudy"
            />
          )}
          {icon === "fair_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Bigmooncloud}
              alt="fair_night"
            />
          )}
          {icon === "heavyrain" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Rain}
              alt="heavyrain"
            />
          )}
          {icon === "rain" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Littlerain}
              alt="rain"
            />
          )}
          {icon === "lightrain" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Smallrain}
              alt="lightrain"
            />
          )}
          {icon === "rainandthunder" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {icon === "heavyrainandthunder" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {icon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {icon === "rainshowers_night" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Moonrain}
              alt="rainshowers_night"
            />
          )}
          {icon === "lightrainshowers_day" && (
            <img
              className="w-16 h-16 xsm:w-20 xsm:h-20"
              src={Sunrain}
              alt="lightrainshowers_day"
            />
          )}
          {icon === "fog" && (
            <img className="w-16 h-16 xsm:w-20 xsm:h-20" src={Fog} alt="fog" />
          )}
        </>
      ) : (
        <div className="w-1/6"></div>
      )}
    </>
  );
};

export default IconHelperStartWeatherInfo;
