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

const IconHelperShorter = ({ icons }) => {
  const [icon, setIcon] = useState<any>([]);

  useEffect(() => {
    setIcon(icons);
  }, [icons]);

  return (
    <>
      {icon ? (
        <div className="w-1/6">
          {icon === "clearsky_day" && (
            <img className="w-10 h-10" src={Sun} alt="hej" />
          )}
          {icon === "partlycloudy_night" && (
            <img className="w-10 h-10" src={Mooncloud} alt="hej" />
          )}
          {icon === "clearsky_night" && (
            <img className="w-10 h-10" src={Halfmoon} alt="hej" />
          )}
          {icon === "partlycloudy_day" && (
            <img className="w-10 h-10" src={Smallsuncloud} alt="hej" />
          )}
          {icon === "fair_day" && (
            <img className="w-10 h-10" src={Bigsuncloud} alt="hej" />
          )}
          {icon === "cloudy" && (
            <img className="w-10 h-10" src={Lightcloud} alt="hej" />
          )}
          {icon === "fair_night" && (
            <img className="w-10 h-10" src={Bigmooncloud} alt="hej" />
          )}
          {icon === "heavyrain" && (
            <img className="w-10 h-10" src={Rain} alt="hej" />
          )}
          {icon === "rain" && (
            <img className="w-10 h-10" src={Littlerain} alt="hej" />
          )}
          {icon === "lightrain" && (
            <img className="w-10 h-10" src={Smallrain} alt="hej" />
          )}
          {icon === "rainandthunder" && (
            <img className="w-10 h-10" src={Rainandthunder} alt="hej" />
          )}
          {icon === "heavyrainandthunder" && (
            <img className="w-10 h-10" src={Heavyrainandthunder} alt="hej" />
          )}
          {icon === "heavyrainshowersandthunder_day" && (
            <img className="w-10 h-10" src={Sunthunderrain} alt="hej" />
          )}
          {icon === "rainshowers_night" && (
            <img className="w-10 h-10" src={Moonrain} alt="hej" />
          )}
          {icon === "lightrainshowers_day" && (
            <img className="w-10 h-10" src={Sunrain} alt="hej" />
          )}
          {icon === "fog" && <img className="w-10 h-10" src={Fog} alt="hej" />}
        </div>
      ) : (
        <div className="w-1/6"></div>
      )}
    </>
  );
};

export default IconHelperShorter;
