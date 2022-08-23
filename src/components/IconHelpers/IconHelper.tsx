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

export const IconHelper = ({ icons }) => {
  const [icon, setIcon] = useState<any>([]);

  useEffect(() => {
    setIcon(icons);
  }, [icons]);

  return (
    <>
      {icon ? (
        <div className="">
          {icon === "clearsky_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sun}
              alt="clearsky_day"
            />
          )}
          {icon === "heavyrainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {icon === "partlycloudy_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {icon === "heavyrainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {icon === "rainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {icon === "lightrainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {icon === "clearsky_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Halfmoon}
              alt="clearsky_night"
            />
          )}
          {icon === "lightrainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {icon === "partlycloudy_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {icon === "fair_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Bigsuncloud}
              alt="fair_day"
            />
          )}
          {icon === "cloudy" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Lightcloud}
              alt="cloudy"
            />
          )}
          {icon === "fair_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Bigmooncloud}
              alt="fair_night"
            />
          )}
          {icon === "heavyrain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Rain}
              alt="heavyrain"
            />
          )}
          {icon === "rain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Littlerain}
              alt="rain"
            />
          )}
          {icon === "lightrain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Smallrain}
              alt="lightrain"
            />
          )}
          {icon === "rainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {icon === "heavyrainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {icon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {icon === "rainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Moonrain}
              alt="rainshowers_night"
            />
          )}
          {icon === "lightrainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sunrain}
              alt="lightrainshowers_day"
            />
          )}
          {icon === "fog" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Fog}
              alt="fog"
            />
          )}
        </div>
      ) : (
        <div className="">
          {icon === "clearsky_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sun}
              alt="clearsky_day"
            />
          )}
          {icon === "partlycloudy_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Mooncloud}
              alt="partlycloudy_night"
            />
          )}
          {icon === "clearsky_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Halfmoon}
              alt="clearsky_night"
            />
          )}
          {icon === "rainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={RainShowerDay}
              alt="rainshowers_day"
            />
          )}
          {icon === "lightrainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={LightRainShowersNight}
              alt="lightrainshowers_night"
            />
          )}
          {icon === "partlycloudy_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Smallsuncloud}
              alt="partlycloudy_day"
            />
          )}
          {icon === "fair_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Bigsuncloud}
              alt="fair_day"
            />
          )}
          {icon === "cloudy" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Lightcloud}
              alt="cloudy"
            />
          )}
          {icon === "fair_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Bigmooncloud}
              alt="fair_night"
            />
          )}
          {icon === "heavyrain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Rain}
              alt="heavyrain"
            />
          )}
          {icon === "heavyrainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Heavyrainshowersday}
              alt="heavyrainshowers_day"
            />
          )}
          {icon === "rain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Littlerain}
              alt="rain"
            />
          )}
          {icon === "lightrain" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Smallrain}
              alt="lightrain"
            />
          )}
          {icon === "rainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Rainandthunder}
              alt="rainandthunder"
            />
          )}
          {icon === "heavyrainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Heavyrainandthunder}
              alt="heavyrainandthunder"
            />
          )}
          {icon === "heavyrainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10mall:h-10"
              src={Heavyrainshowersnight}
              alt="heavyrainshowers_night"
            />
          )}
          {icon === "heavyrainshowersandthunder_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sunthunderrain}
              alt="heavyrainshowersandthunder_day"
            />
          )}
          {icon === "rainshowers_night" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Moonrain}
              alt="rainshowers_night"
            />
          )}
          {icon === "lightrainandthunder" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Lightrainandthunder}
              alt="lightrainandthunder"
            />
          )}
          {icon === "lightrainshowers_day" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Sunrain}
              alt="lightrainshowers_day"
            />
          )}
          {icon === "fog" && (
            <img
              className="w-8 h-8 small:w-10 small:h-10"
              src={Fog}
              alt="fog"
            />
          )}
        </div>
      )}
    </>
  );
};

export default IconHelper;
