import React, { useEffect, useState } from "react";
import "moment/locale/sv";
import StartWeatherInfoItem from "./StartWeatherInfoItem";
import { getStartWeatherInfoTimeForCurrentLocation } from "../helper/timeFunctions";

const StartWeatherInfo = ({ currentWeatherData, cityData, countryData }) => {
  const [timeForCurrentLocation, setTimeForCurrentLocation] = useState<any>("");

  useEffect(() => {
    getStartWeatherInfoTimeForCurrentLocation(
      cityData,
      setTimeForCurrentLocation
    );
    const timer = setInterval(() => {
      getStartWeatherInfoTimeForCurrentLocation(
        cityData,
        setTimeForCurrentLocation
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [cityData]);

  return (
    <div className="text-white shadow-md">
      {currentWeatherData.map((weather, index) => (
        <div key={index}>
          <StartWeatherInfoItem
            weather={weather}
            cityData={cityData}
            countryData={countryData}
            timeForCurrentLocation={timeForCurrentLocation}
          />
        </div>
      ))}
    </div>
  );
};

export default StartWeatherInfo;
