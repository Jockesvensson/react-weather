import moment from "moment";
import React, { useEffect, useState } from "react";
import { customCssFunction } from "../../helper/customCssFunctions";
import { iconsFunctionShorter } from "../../helper/iconFunctions";
import { finalSixDaysDateFunction } from "../../helper/timeFunctions";
import { weatherDetailsFunction } from "../../helper/weatherDetailsFunctions";
import OneDayItem from "./OneDayItem";

export const FinalSixDaysItem = ({
  item,
  dayIndex,
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
    setWeather(item);
  }, [item]);

  useEffect(() => {
    finalSixDaysDateFunction(
      dayIndex,
      setDayName,
      setDate,
      setMonth,
      item,
      setWeather
    );
    customCssFunction(timeNow, setCustomClass);
  }, [item, dayIndex, timeNow]);

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
