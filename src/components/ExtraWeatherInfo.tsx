import React, { useEffect, useState } from "react";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import moment from "moment";
import { ultravioletFunction } from "../helper/ultravioletFunction";
import { customCssContainerFunction } from "../helper/customCssFunctions";

const ExtraWeatherInfo = ({ currentWeatherUVI, currentWeatherData }) => {
  const [UVIName, setUVIName] = useState<string>("");
  const [customClass, setCustomClass] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    ultravioletFunction(currentWeatherUVI, setUVIName);
  }, [currentWeatherUVI]);

  useEffect(() => {
    customCssContainerFunction(timeNow, setCustomClass);
  }, [timeNow]);

  return currentWeatherData.map((weather, index) => (
    <div
      className={`flex w-full mt-4 mb-12 py-4 border-2 text-white shadow-md ${customClass}`}
      key={index}
    >
      <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
        <div className="relative w-8 h-8 bg-yellow-400 rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-200 rounded-full"></div>
        </div>
        <p className="mt-2 text-black">UV-index</p>
        <p className="text-black">{UVIName}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
        <AirIcon sx={{ fontSize: 40, color: "gray" }} />
        <p className="mt-2 text-black">Vind</p>
        <p className="text-black">
          {weather.data.instant.details.wind_speed
            ? weather.data.instant.details.wind_speed.toFixed(0)
            : 0}{" "}
          m/s
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3">
        <OpacityIcon sx={{ color: "blue", fontSize: 40 }} />
        <p className="mt-2 text-black">Luftfukt.</p>
        <p className="text-black">
          {weather.data.instant.details.relative_humidity
            ? weather.data.instant.details.relative_humidity.toFixed(0)
            : 0}{" "}
          %
        </p>
      </div>
    </div>
  ));
};

export default ExtraWeatherInfo;
