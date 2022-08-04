import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Tomorrow = ({
  tomorrowWeatherData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [tomorrowWeather, setTomorrowsWeather] = useState<any>([]);
  const [tomorrowWeatherMaxTemp, setTomorrowsWeatherMaxTemp] = useState<any>(
    []
  );
  const [tomorrowWeatherMinTemp, setTomorrowsWeatherMinTemp] = useState<any>(
    []
  );
  const [tomorrowSumRain, setTomorrowSumRain] = useState<any>([]);
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
    setDayName(moment().add(1, "days").format("dddd"));
    setDate(moment().add(1, "days").format("D"));
    setMonth(moment().add(1, "days").format("MMM "));
    setTomorrowsWeather(tomorrowWeatherData);
  }, [tomorrowWeatherData]);

  useEffect(() => {
    const getHighAndLowTempTomorrow = tomorrowWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setTomorrowsWeatherMaxTemp(Math.max(...getHighAndLowTempTomorrow));
    setTomorrowsWeatherMinTemp(Math.min(...getHighAndLowTempTomorrow));
    const getSumTomorrowRain = tomorrowWeather.map(
      (item, index) => item.data.next_1_hours.details.precipitation_amount
    );
    setTomorrowSumRain(
      getSumTomorrowRain.reduce((a, b) => a + b, 0).toFixed(1)
    );
    const getWindspeed = tomorrowWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [tomorrowWeather]);

  useEffect(() => {
    var icons = tomorrowWeather.map(
      (item, index) => item.data.next_6_hours.summary.symbol_code
    );
    var nightIcon = icons[0];
    var morningIcon = icons[6];
    var afternoonIcon = icons[16];
    var eveningIcon = icons[18];
    setNightIcon(nightIcon);
    setMorningIcon(morningIcon);
    setAfternoonIcon(afternoonIcon);
    setEveningIcon(eveningIcon);
  }, [tomorrowWeather]);

  const handleWeatherInformation = (tomorrowWeather) => {
    setCurrentWeatherInformation(tomorrowWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div
      className="weather-item-container bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(tomorrowWeather)}
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
          {tomorrowWeatherMaxTemp}°<span className="mx-1">/</span>
          {tomorrowWeatherMinTemp}°
        </div>
        {tomorrowSumRain <= 0 ? (
          <div className=""></div>
        ) : (
          <div className="">{tomorrowSumRain} mm</div>
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

export default Tomorrow;
