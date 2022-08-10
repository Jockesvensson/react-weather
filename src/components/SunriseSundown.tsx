import React, { useEffect, useState } from "react";
import moment from "moment";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { customCssFunction } from "../helper/customCssFunctions";

const SunriseSundown = ({ todaySunriseData, todaySunsetData }) => {
  const [customClass, setCustomClass] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  var t = new Date(todaySunriseData);
  var sunrise = moment(t, "hh:mm").format("HH:mm");
  var tt = new Date(todaySunsetData);
  var sunset = moment(tt, "hh:mm").format("HH:mm");

  useEffect(() => {
    customCssFunction(timeNow, setCustomClass);
  }, [timeNow]);

  return (
    <div
      className={`flex w-full mt-4 py-4 px-8 border-2 rounded-3xl text-white ${customClass}`}
    >
      <div className="flex flex-col items-center w-1/2">
        <div>Soluppgång</div>
        <div className="mb-2">{sunrise}</div>
        <img className="w-16 h-16" src={Sunrise} alt="hej" />
      </div>
      <div className="flex flex-col items-center w-1/2">
        <div>Solnedgång</div>
        <div className="mb-2">{sunset}</div>
        <img className="w-16 h-16" src={Sunset} alt="hej" />
      </div>
    </div>
  );
};

export default SunriseSundown;
