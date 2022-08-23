import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { sunriseSunsetFunction } from "../helper/sunriseSunsetFunctions";

const SingleDayWeatherSunriseSundown = ({
  sunriseData,
  sunsetData,
  setSunDate,
  currentWeatherInformation,
  showMoreInformation,
  cityData,
}) => {
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState<string>("");

  useEffect(() => {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var city = utc + 1000 * cityData.timezone;
    var milliseconds = localTime - city;
    var timeDiffInHours = milliseconds / 3600000;

    var t = new Date(sunriseData);
    var tt = new Date(sunsetData);

    if (timeDiffInHours > 0) {
      setSunrise(
        moment(t, "hh:mm").subtract("hours", timeDiffInHours).format("HH:mm")
      );
      setSunset(
        moment(tt, "hh:mm").subtract("hours", timeDiffInHours).format("HH:mm")
      );
    }
    if (timeDiffInHours === 0) {
      setSunrise(moment(t, "hh:mm").format("HH:mm"));
      setSunset(moment(tt, "hh:mm").format("HH:mm"));
    }
    if (timeDiffInHours < 0) {
      setSunrise(
        moment(t, "hh:mm").subtract("hours", timeDiffInHours).format("HH:mm")
      );
      setSunset(
        moment(tt, "hh:mm").subtract("hours", timeDiffInHours).format("HH:mm")
      );
    }

    if (showMoreInformation) {
      sunriseSunsetFunction(currentWeatherInformation, setSunDate);
    }
  }, [
    currentWeatherInformation,
    showMoreInformation,
    setSunDate,
    cityData,
    sunriseData,
    sunsetData,
  ]);

  return (
    <div className="flex justify-center mt-8 pb-4">
      <div className="mx-4">
        <p className="mb-2">Soluppgång</p>
        <div className="flex items-center">
          <img className="w-8 h-8" src={Sunrise} alt="hej" />
          <p>{sunrise}</p>
        </div>
      </div>
      <div className="mx-4">
        <p className="mb-2">Solnedgång</p>
        <div className="flex items-center">
          <img className="w-8 h-8" src={Sunset} alt="hej" />
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleDayWeatherSunriseSundown;
