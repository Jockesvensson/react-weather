import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import { iconsFunctionShorter } from "../../helper/iconFunctions";
import OneDayItem from "./OneDayItem";
import { weatherDetailsFunction } from "../../helper/weatherDetailsFunctions";
import { dayDateFunction } from "../../helper/timeFunctions";
import { customCssFunction } from "../../helper/customCssFunctions";

const SixDays = ({
  forecastWeekData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [weather, setWeather] = useState<any>([]);
  const [weatherMaxTemp, setWeatherMaxTemp] = useState<number>(0);
  const [weatherMinTemp, setWeatherMinTemp] = useState<number>(0);
  const [sumRain, setSumRain] = useState<any>([]);
  const [maxWindSpeed, setMaxWindSpeed] = useState<any>([]);
  const [day, setDay] = useState<number>(6);
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
    dayDateFunction(
      day,
      setDayName,
      setDate,
      setMonth,
      forecastWeekData,
      setWeather
    );
    customCssFunction(timeNow, setCustomClass);
  }, [forecastWeekData, day, timeNow]);

  useEffect(() => {
    weatherDetailsFunction(
      weather,
      setWeatherMaxTemp,
      setWeatherMinTemp,
      setMaxWindSpeed,
      setSumRain
    );
    iconsFunctionShorter(
      weather,
      setNightIcon,
      setMorningIcon,
      setAfternoonIcon,
      setEveningIcon
    );
  }, [weather]);

  const handleWeatherInformation = (weather) => {
    setCurrentWeatherInformationShorter(weather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
    document.body.style.overflow = "hidden";
  };

  return (
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
  );
};

export default SixDays;
