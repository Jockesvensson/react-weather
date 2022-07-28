import React, { useEffect, useState } from "react";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";

const ExtraWeatherInfo = ({
  forecastCurrentDayHumidity,
  forecastCurrentDayWindSpeed,
  forecastCurrentDayUVI,
}) => {
  const [UVIName, setUVIName] = useState<string>("");

  useEffect(() => {
    if (forecastCurrentDayUVI > 11) {
      setUVIName("Extremt");
    }

    if (forecastCurrentDayUVI < 11 && forecastCurrentDayUVI > 8) {
      setUVIName("Väldigt högt");
    }

    if (forecastCurrentDayUVI < 8 && forecastCurrentDayUVI > 6) {
      setUVIName("Högt");
    }

    if (forecastCurrentDayUVI < 6 && forecastCurrentDayUVI > 3) {
      setUVIName("Måttligt");
    }

    if (forecastCurrentDayUVI < 3) {
      setUVIName("Lågt");
    }
  }, [forecastCurrentDayUVI]);

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
          {forecastCurrentDayWindSpeed
            ? (forecastCurrentDayWindSpeed * 3.6).toFixed(0)
            : null}{" "}
          km/h
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3">
        <div>
          <OpacityIcon sx={{ color: "blue", fontSize: 40 }} />
        </div>
        <div className="mt-2">Luftfukt.</div>
        <div>{forecastCurrentDayHumidity} %</div>
      </div>
    </div>
  );
};

export default ExtraWeatherInfo;
