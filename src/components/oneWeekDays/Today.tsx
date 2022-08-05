import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import { iconFunction } from "../../helper/iconFunction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Today = ({
  forecastWeekData,
  tomorrowWeatherData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [todaysWeather, setTodaysWeather] = useState<any>([]);
  const [todaysWeatherMaxTemp, setTodaysWeatherMaxTemp] = useState<any>([]);
  const [todaysWeatherMinTemp, setTodaysWeatherMinTemp] = useState<any>([]);
  const [todaysSumRain, setTodaysSumRain] = useState<any>([]);
  const [maxWindSpeed, setMaxWindSpeed] = useState<any>([]);
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [nightIcon, setNightIcon] = useState<string>("");
  const [morningIcon, setMorningIcon] = useState<string>("");
  const [afternoonIcon, setAfternoonIcon] = useState<string>("");
  const [eveningIcon, setEveningIcon] = useState<string>("");

  useEffect(() => {
    moment.locale("sv");
    var today = moment().format("L");
    setDate(moment().format("D"));
    setMonth(moment().format("MMM "));
    if (today) {
      setDayName("Idag");
    }

    const todaysData = forecastWeekData.filter((item) =>
      item.time.includes(today)
    );
    setTodaysWeather(todaysData.slice(0, -2));
  }, [forecastWeekData]);

  useEffect(() => {
    const getHighAndLowTempToday = todaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setTodaysWeatherMaxTemp(Math.max(...getHighAndLowTempToday));
    setTodaysWeatherMinTemp(Math.min(...getHighAndLowTempToday));
    const getSumTodayRain = todaysWeather.map(
      (item, index) => item.data.next_1_hours.details.precipitation_amount
    );
    setTodaysSumRain(getSumTodayRain.reduce((a, b) => a + b, 0).toFixed(1));
    const getWindspeed = todaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [todaysWeather]);

  useEffect(() => {
    iconFunction(
      todaysWeather,
      setNightIcon,
      setMorningIcon,
      setAfternoonIcon,
      setEveningIcon
    );
  }, [todaysWeather]);

  const handleWeatherInformation = (todaysWeather) => {
    setCurrentWeatherInformation(todaysWeather.slice(1));
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div
      className="weather-item-container bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(todaysWeather)}
    >
      <div className="weather-item-date capitalize">
        {dayName} {date}. {month}
      </div>
      <div className="weather-item-icons">
        <div className="weather-item-symbol-0">
          <IconHelperNight nightIcon={nightIcon} />
        </div>
        <div className="weather-item-symbol-1">
          <IconHelperMorning morningIcon={morningIcon} />
        </div>
        <div className="weather-item-symbol-2">
          <IconHelperAfternoon afternoonIcon={afternoonIcon} />
        </div>
        <div className="weather-item-symbol-3">
          <IconHelperEvening eveningIcon={eveningIcon} />
        </div>
      </div>
      <div className="weather-item-forecast">
        <div className="">
          {todaysWeatherMaxTemp}°<span className="mx-1">/</span>
          {todaysWeatherMinTemp}°
        </div>
        {todaysSumRain <= 0 ? (
          <div className=""></div>
        ) : (
          <div className="">{todaysSumRain} mm</div>
        )}
        <div className="">{maxWindSpeed} m/s</div>
      </div>
      <div className="hidden lg:flex items-center justify-end text-sm">
        <div>Se tid för tid</div>
        <span className="ml-2">
          <ArrowForwardIosIcon sx={{ fontSize: 23 }} />
        </span>
      </div>
      <div className="weather-item-readmore text-sm">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Today;
