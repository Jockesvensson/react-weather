import React, { useEffect, useState } from "react";
import moment from "moment";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { customCssContainerFunction } from "../helper/customCssFunctions";

const SunriseSundown = ({
  todaySunriseData,
  todaySunsetData,
  cityData,
  forecastWeekData,
}) => {
  const [customClass, setCustomClass] = useState<string>("");
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var city = utc + 1000 * cityData.timezone;

    var milliseconds = localTime - city;
    var timeDiffInHours = milliseconds / 3600000;

    var t = new Date(todaySunriseData);
    var tt = new Date(todaySunsetData);

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
    customCssContainerFunction(timeNow, setCustomClass);
  }, [timeNow, forecastWeekData, cityData, todaySunriseData, todaySunsetData]);

  return (
    <div
      className={`flex w-full mt-4 py-4 px-8 border-2 text-white shadow-md ${customClass}`}
    >
      <div className="flex flex-col items-center w-1/2">
        <p className="text-black">Soluppgång</p>
        <p className="mb-2 text-black">{sunrise}</p>
        <img className="w-16 h-16" src={Sunrise} alt="sunrise" />
      </div>
      <div className="flex flex-col items-center w-1/2">
        <p className="text-black">Solnedgång</p>
        <p className="mb-2 text-black">{sunset}</p>
        <img className="w-16 h-16" src={Sunset} alt="sundown" />
      </div>
    </div>
  );
};

export default SunriseSundown;
