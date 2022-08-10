import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import { iconsFunction } from "../../helper/iconFunctions";
import OneDayItem from "./OneDayItem";
import { specialWeatherDetailsFunction } from "../../helper/weatherDetailsFunctions";
import { customCssFunction } from "../../helper/customCssFunctions";
import { twoDaysDateFunction } from "../../helper/timeFunctions";

const TwoDays = ({
  twoDaysForwardWeatherData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
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
    twoDaysDateFunction(
      setDayName,
      setDate,
      setMonth,
      setWeather,
      twoDaysForwardWeatherData
    );
    specialWeatherDetailsFunction(
      weather,
      setWeatherMaxTemp,
      setWeatherMinTemp,
      setMaxWindSpeed,
      setSumRain
    );
    iconsFunction(
      weather,
      setNightIcon,
      setMorningIcon,
      setAfternoonIcon,
      setEveningIcon
    );
    customCssFunction(timeNow, setCustomClass);
  }, [twoDaysForwardWeatherData, weather, timeNow]);

  const handleWeatherInformation = (weather) => {
    setCurrentWeatherInformation(weather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
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

export default TwoDays;
