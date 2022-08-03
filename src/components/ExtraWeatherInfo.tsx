import React, { useEffect, useState } from "react";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";

const ExtraWeatherInfo = ({
  forecastCurrentDayHumidity,
  forecastCurrentDayWindSpeed,
  forecastCurrentDayUVI,
  currentWeatherData,
}) => {
  const [UVIName, setUVIName] = useState<string>("");

  useEffect(() => {
    if (currentWeatherData.ultraviolet_index_clear_sky > 11) {
      setUVIName("Extremt");
    }

    if (
      currentWeatherData.ultraviolet_index_clear_sky < 11 &&
      currentWeatherData.ultraviolet_index_clear_sky > 8
    ) {
      setUVIName("Väldigt högt");
    }

    if (
      currentWeatherData.ultraviolet_index_clear_sky < 8 &&
      currentWeatherData.ultraviolet_index_clear_sky > 6
    ) {
      setUVIName("Högt");
    }

    if (
      currentWeatherData.ultraviolet_index_clear_sky < 6 &&
      currentWeatherData.ultraviolet_index_clear_sky > 3
    ) {
      setUVIName("Måttligt");
    }

    if (currentWeatherData.ultraviolet_index_clear_sky < 3) {
      setUVIName("Lågt");
    }
  }, [currentWeatherData.ultraviolet_index_clear_sky]);

  return (
    <div className="flex w-full mt-4 mb-12 py-4 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
      <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
        <div className="relative w-8 h-8 bg-yellow-400 rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-200 rounded-full"></div>
        </div>
        <div className="mt-2">UV-index</div>
        <div>{UVIName}</div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
        <div>
          <AirIcon sx={{ fontSize: 40 }} />
        </div>
        <div className="mt-2">Vind</div>
        <div>
          {currentWeatherData.wind_speed
            ? currentWeatherData.wind_speed.toFixed(0)
            : 0}{" "}
          m/s
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3">
        <div>
          <OpacityIcon sx={{ color: "blue", fontSize: 40 }} />
        </div>
        <div className="mt-2">Luftfukt.</div>
        <div>
          {currentWeatherData.relative_humidity
            ? currentWeatherData.relative_humidity.toFixed(0)
            : 0}{" "}
          %
        </div>
      </div>
    </div>
  );
};

export default ExtraWeatherInfo;
