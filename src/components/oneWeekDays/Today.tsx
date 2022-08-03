import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import { iconFunction } from "../../helper/iconFunction";

const Today = ({
  forecastWeekData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
  //   setSunDate,
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
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(todaysWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {todaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {todaysWeatherMinTemp}°
      </div>
      {todaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{todaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default Today;
