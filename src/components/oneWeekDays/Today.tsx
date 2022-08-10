import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import { iconFunction } from "../../helper/iconFunctions";
import OneDayItem from "./OneDayItem";
import { weatherDetailsFunction } from "../../helper/weatherDetailsFunctions";
import { todayDateFunction } from "../../helper/timeFunctions";
import { customCssFunction } from "../../helper/customCssFunctions";

const Today = ({
  forecastWeekData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [weather, setWeather] = useState<any>([]);
  const [weatherMaxTemp, setWeatherMaxTemp] = useState<any>([]);
  const [weatherMinTemp, setWeatherMinTemp] = useState<any>([]);
  const [sumRain, setSumRain] = useState<any>([]);
  const [maxWindSpeed, setMaxWindSpeed] = useState<any>([]);
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [nightIcon, setNightIcon] = useState<string>("");
  const [morningIcon, setMorningIcon] = useState<string>("");
  const [afternoonIcon, setAfternoonIcon] = useState<string>("");
  const [eveningIcon, setEveningIcon] = useState<string>("");
  const [customClass, setCustomClass] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    todayDateFunction(
      setDate,
      setMonth,
      setDayName,
      forecastWeekData,
      setWeather
    );
    customCssFunction(timeNow, setCustomClass);
  }, [forecastWeekData, timeNow]);

  useEffect(() => {
    weatherDetailsFunction(
      weather,
      setWeatherMaxTemp,
      setWeatherMinTemp,
      setMaxWindSpeed,
      setSumRain
    );
    iconFunction(
      weather,
      setNightIcon,
      setMorningIcon,
      setAfternoonIcon,
      setEveningIcon
    );
  }, [weather]);

  const handleWeatherInformation = (weather) => {
    setCurrentWeatherInformation(weather.slice(1));
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {weather.length > 1 && (
        <div
          className={`weather-item-container border-b-2 text-white cursor-pointer ${customClass}`}
          onClick={() => handleWeatherInformation(weather)}
        >
          <OneDayItem
            dayName={dayName}
            date={date}
            month={month}
            nightIcon={nightIcon}
            morningIcon={morningIcon}
            afternoonIcon={afternoonIcon}
            eveningIcon={eveningIcon}
            weatherMaxTemp={weatherMaxTemp}
            weatherMinTemp={weatherMinTemp}
            sumRain={sumRain}
            maxWindSpeed={maxWindSpeed}
          />
        </div>
      )}
    </>
  );
};

export default Today;
