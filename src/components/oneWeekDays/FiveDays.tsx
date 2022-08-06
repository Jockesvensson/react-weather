import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FiveDays = ({
  forecastWeekData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [fiveDaysWeather, setFiveDaysWeather] = useState<any>([]);
  const [fiveDaysWeatherMaxTemp, setFiveDaysWeatherMaxTemp] = useState<any>([]);
  const [fiveDaysWeatherMinTemp, setFiveDaysWeatherMinTemp] = useState<any>([]);
  const [fiveDaysSumRain, setFiveDaysSumRain] = useState<any>([]);
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
    setDayName(moment().add(5, "days").format("dddd"));
    setDate(moment().add(5, "days").format("D"));
    setMonth(moment().add(5, "days").format("MMM "));
    const fiveDaysData = forecastWeekData.filter((item) =>
      item.time.includes(fiveDays)
    );
    setFiveDaysWeather(fiveDaysData);
  }, [forecastWeekData]);

  useEffect(() => {
    const getHighAndLowTempFiveDays = fiveDaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setFiveDaysWeatherMaxTemp(Math.max(...getHighAndLowTempFiveDays));
    setFiveDaysWeatherMinTemp(Math.min(...getHighAndLowTempFiveDays));
    const getSumFiveDaysRain = fiveDaysWeather.map(
      (item, index) => item.data.next_6_hours.details.precipitation_amount
    );
    setFiveDaysSumRain(
      getSumFiveDaysRain.reduce((a, b) => a + b, 0).toFixed(1)
    );
    const getWindspeed = fiveDaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [fiveDaysWeather]);

  useEffect(() => {
    var icons = fiveDaysWeather.map(
      (item, index) => item.data.next_6_hours.summary.symbol_code
    );
    var nightIcon = icons[0];
    var morningIcon = icons[1];
    var afternoonIcon = icons[2];
    var eveningIcon = icons[3];
    setNightIcon(nightIcon);
    setMorningIcon(morningIcon);
    setAfternoonIcon(afternoonIcon);
    setEveningIcon(eveningIcon);
  }, [fiveDaysWeather]);

  moment.locale("sv");
  var fiveDays = moment().add(5, "days").format("L");

  const handleWeatherInformation = (fiveDaysWeather) => {
    setCurrentWeatherInformationShorter(fiveDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
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
    <div
      className={`weather-item-container border-b-2 text-white cursor-pointer ${customClass}`}
      onClick={() => handleWeatherInformation(fiveDaysWeather)}
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
          {fiveDaysWeatherMaxTemp}°<span className="mx-1 text-black">/</span>
          {fiveDaysWeatherMinTemp}°
        </div>
        {fiveDaysSumRain <= 0 ? (
          <div className=""></div>
        ) : (
          <div className="text-blue-600">{fiveDaysSumRain} mm</div>
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

export default FiveDays;
