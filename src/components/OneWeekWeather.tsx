import React, { useEffect, useState } from "react";
import "moment/locale/sv";
import moment from "moment";
import { customCssContainerFunction } from "../helper/customCssFunctions";
import SingleDayWeather from "./SingleDayWeather";
import OneWeekWeatherHeading from "./OneWeekWeatherHeading";
import OneWeekWeatherItem from "./OneWeekWeatherItem";
import { testFunction } from "../helper/timeFunctions";

const OneWeekWeather = ({
  forecastWeekData,
  sunriseData,
  sunsetData,
  setSunDate,
  cityData,
}) => {
  const [currentWeatherInformation, setCurrentWeatherInformation] =
    useState<any>([]);
  const [showMoreInformation, setShowMoreInformation] =
    useState<boolean>(false);
  const [currentDayInformation, setCurrentDayInformation] =
    useState<string>("");
  const [currentDateInformation, setCurrentDateInformation] =
    useState<string>("");
  const [currentMonthInformation, setCurrentMonthInformation] =
    useState<string>("");
  const [weather, setWeather] = useState<any>([]);
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [customClass, setCustomClass] = useState<string>("");
  const [clickedIndex, setClickedIndex] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    customCssContainerFunction(timeNow, setCustomClass);
    testFunction(forecastWeekData, setWeather, cityData);
  }, [timeNow, cityData, forecastWeekData, clickedIndex]);

  const handleWeatherInformation = (weather, index) => {
    setClickedIndex(index);
    setCurrentWeatherInformation(weather[index]);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div
        className={`flex flex-col mt-4 py-4 px-2 sm:px-4 border-2 text-white shadow-md ${customClass}`}
      >
        <OneWeekWeatherHeading />
        {weather.map((item, index) => (
          <div
            key={index}
            className={`weather-item-container border-b-2 text-white cursor-pointer ${customClass}`}
            onClick={() => handleWeatherInformation(weather, index)}
          >
            <OneWeekWeatherItem
              item={item}
              dayIndex={index}
              cityData={cityData}
            />
          </div>
        ))}
      </div>
      {showMoreInformation && (
        <SingleDayWeather
          clickedIndex={clickedIndex}
          currentWeatherInformation={currentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          showMoreInformation={showMoreInformation}
          sunriseData={sunriseData}
          sunsetData={sunsetData}
          setSunDate={setSunDate}
          cityData={cityData}
        />
      )}
    </>
  );
};

export default OneWeekWeather;
