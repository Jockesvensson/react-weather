import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/sv";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { sunriseSunsetFunction } from "../helper/sunriseSunsetFunctions";

const SingleOneWeekWeatherSunriseSundown = ({
  sunriseData,
  sunsetData,
  setSunDate,
  currentWeatherInformation,
}) => {
  var t = new Date(sunriseData);
  var sunrise = moment(t, "hh:mm").format("HH:mm");
  var tt = new Date(sunsetData);
  var sunset = moment(tt, "hh:mm").format("HH:mm");

  useEffect(() => {
    sunriseSunsetFunction(currentWeatherInformation, setSunDate);
  }, [currentWeatherInformation, setSunDate]);

  return (
    <div className="flex justify-center mt-8 pb-4">
      <div className="mx-4">
        <div className="mb-2">Soluppgång</div>
        <div className="flex items-center">
          <img className="w-8 h-8" src={Sunrise} alt="hej" />
          <div>{sunrise}</div>
        </div>
      </div>
      <div className="mx-4">
        <div className="mb-2">Solnedgång</div>
        <div className="flex items-center">
          <img className="w-8 h-8" src={Sunset} alt="hej" />
          <div>{sunset}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleOneWeekWeatherSunriseSundown;
