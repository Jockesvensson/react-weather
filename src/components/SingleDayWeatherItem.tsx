import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelper from "./IconHelpers/IconHelper";
import SouthIcon from "@mui/icons-material/South";
import WindDescription from "./windDescription/WindDescription";
import { otherWeatherDetailsFunction } from "../helper/weatherDetailsFunctions";
import SingleDayWeatherRain from "./SingleDayWeatherRain";

const SingleDayWeatherItem = ({ item }) => {
  const t = new Date(item.time);
  const [endTime, setEndTime] = useState<string>("");
  const [measureDateSaying, setMeasureDateSaying] = useState<string>(
    moment(t, "hh").format("HH")
  );
  const [icons, setIcons] = useState<string>("");
  const [windDirection, setWindDirection] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);

  useEffect(() => {
    otherWeatherDetailsFunction(
      item,
      setIcons,
      setEndTime,
      measureDateSaying,
      setWindDirection,
      setWindSpeed
    );
  }, []);

  return (
    <>
      <div className="singleoneweek-item-time self-center">
        <div className="flex text-xs">
          <div>{measureDateSaying}</div>
          {endTime && (
            <>
              <span className="mx-1">-</span>
              <div>{endTime}</div>
            </>
          )}
        </div>
      </div>
      <div className="singleoneweek-item-weather">
        <IconHelper icons={icons} />
      </div>
      <div className="singleoneweek-item-forecast">
        <div className="singleoneweek-item-temp text-red-500">
          {item.data.instant.details.air_temperature
            ? item.data.instant.details.air_temperature.toFixed(0)
            : null}
          °
        </div>
        <SingleDayWeatherRain item={item} />
        <div className="singleoneweek-item-wind flex">
          <div>
            {item.data.instant.details.wind_speed
              ? item.data.instant.details.wind_speed.toFixed(0)
              : 0}
          </div>
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
