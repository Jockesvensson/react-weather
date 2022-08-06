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
  const [customClass, setCustomClass] = useState<string>("");

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

  console.log(todaysWeather);

  const handleWeatherInformation = (todaysWeather) => {
    setCurrentWeatherInformation(todaysWeather.slice(1));
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
    document.body.style.overflow = "hidden";
  };

  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    if (timeNow > "08:00") {
      document.body.style.backgroundColor = "rgb(13, 165, 206)";
      setCustomClass("container-bg-day-item");
    }
    if (timeNow > "22:00" || timeNow < "08:00") {
      document.body.style.backgroundColor = "rgb(54, 50, 50)";
      setCustomClass("container-bg-night-item");
    }
  }, [timeNow]);

  return (
    <>
      {todaysWeather.length > 1 && (
        <div
          className={`weather-item-container border-b-2 text-white cursor-pointer ${customClass}`}
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
            <div className="text-red-500 text-lg">
              {todaysWeatherMaxTemp}°<span className="mx-1 text-black">/</span>
              {todaysWeatherMinTemp}°
            </div>
            {todaysSumRain <= 0 ? (
              <div className=""></div>
            ) : (
              <div className="text-blue-600">{todaysSumRain} mm</div>
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
      )}
    </>
  );
};

export default Today;
