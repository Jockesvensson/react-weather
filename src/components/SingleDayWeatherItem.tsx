import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelper from "./IconHelpers/IconHelper";
import SouthIcon from "@mui/icons-material/South";
import WindDescription from "./windDescription/WindDescription";
import { otherWeatherDetailsFunction } from "../helper/weatherDetailsFunctions";
import SingleDayWeatherRain from "./SingleDayWeatherRain";

const SingleDayWeatherItem = ({ item, cityData }) => {
  const [endTime, setEndTime] = useState<string>("");
  const [measureDateSaying, setMeasureDateSaying] = useState<string>("");
  const [icons, setIcons] = useState<string>("");
  const [windDirection, setWindDirection] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);

  useEffect(() => {
    var d = new Date(item.time);
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var city = utc + 1000 * cityData.timezone;
    var nd = new Date(city);
    setMeasureDateSaying(moment(nd).format("HH"));
  }, [cityData, item.time]);

  useEffect(() => {
    otherWeatherDetailsFunction(
      item,
      setIcons,
      setEndTime,
      measureDateSaying,
      setWindDirection,
      setWindSpeed
    );
  }, [measureDateSaying, item]);

  return (
    <>
      <div className="singleoneweek-item-time self-center">
        <div className="flex text-xs">
          <p>{measureDateSaying}</p>
          {endTime && (
            <>
              <span className="mx-1">-</span>
              <p>{endTime}</p>
            </>
          )}
        </div>
      </div>
      <div className="singleoneweek-item-weather">
        <IconHelper icons={icons} />
      </div>
      <div className="singleoneweek-item-forecast">
        <p className="singleoneweek-item-temp text-red-500">
          {item.data.instant.details.air_temperature
            ? item.data.instant.details.air_temperature.toFixed(0)
            : null}
          °
        </p>
        <SingleDayWeatherRain item={item} />
        <div className="singleoneweek-item-wind flex">
          <p>
            {item.data.instant.details.wind_speed
              ? item.data.instant.details.wind_speed.toFixed(0)
              : 0}
          </p>
          <span className="ml-1">
            (
            {item.data.instant.details.wind_speed_of_gust
              ? item.data.instant.details.wind_speed_of_gust.toFixed(0)
              : 0}
            )
          </span>
          <div
            className="ml-1 self-baseline"
            style={{ transform: `rotate(${windDirection}deg)` }}
          >
            <SouthIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <div className="singleoneweek-item-windDesc">
        <WindDescription windDirection={windDirection} windSpeed={windSpeed} />
      </div>
    </>
  );
};

export default SingleDayWeatherItem;
