import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TwoDays = ({
  twoDaysForwardWeatherData,
  setCurrentWeatherInformation,
  setShowMoreInformation,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [twoDaysWeather, setTwoDaysWeather] = useState<any>([]);
  const [twoDaysWeatherMaxTemp, setTwoDaysWeatherMaxTemp] = useState<any>([]);
  const [twoDaysWeatherMinTemp, setTwoDaysWeatherMinTemp] = useState<any>([]);
  const [twoDaysSumRain, setTwoDaysSumRain] = useState<any>([]);
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
    setDayName(moment().add(2, "days").format("dddd"));
    setDate(moment().add(2, "days").format("D"));
    setMonth(moment().add(2, "days").format("MMM "));
    setTwoDaysWeather(twoDaysForwardWeatherData);
  }, [twoDaysForwardWeatherData]);

  useEffect(() => {
    const getHighAndLowTempTwoDays = twoDaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setTwoDaysWeatherMaxTemp(Math.max(...getHighAndLowTempTwoDays));
    setTwoDaysWeatherMinTemp(Math.min(...getHighAndLowTempTwoDays));
    const getSumTwoDaysRain = twoDaysWeather
      .slice(0, 2)
      .map(
        (item, index) => item.data.next_1_hours.details.precipitation_amount
      );
    const getSumTwoDaysRainLastItem = twoDaysWeather
      .slice(-1)
      .map((item, index) =>
        item.data.next_6_hours
          ? item.data.next_6_hours.details.precipitation_amount
          : item.data.next_1_hours.details.precipitation_amount
      );
    const totalRain = [...getSumTwoDaysRain, ...getSumTwoDaysRainLastItem];
    setTwoDaysSumRain(totalRain.reduce((a, b) => a + b, 0).toFixed(1));
    const getWindspeed = twoDaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [twoDaysWeather]);

  useEffect(() => {
    if (twoDaysWeather.length <= 6) {
      const nightIcon = twoDaysWeather
        .slice(2, 3)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const morningIcon = twoDaysWeather
        .slice(3, 4)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const afternoonIcon = twoDaysWeather
        .slice(4, 5)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const eveningIcon = twoDaysWeather
        .slice(5, 6)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      setNightIcon(nightIcon[0]);
      setMorningIcon(morningIcon[0]);
      setAfternoonIcon(afternoonIcon[0]);
      setEveningIcon(eveningIcon[0]);
    }
    if (twoDaysWeather.length > 6) {
      const nightIcon = twoDaysWeather
        .slice(0, 1)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const morningIcon = twoDaysWeather
        .slice(6, 7)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const afternoonIcon = twoDaysWeather
        .slice(14, 15)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      const eveningIcon = twoDaysWeather
        .slice(-1)
        .map((item) =>
          item.data.next_6_hours !== undefined
            ? item.data.next_6_hours.summary.symbol_code
            : item.data.next_1_hours.summary.symbol_code
        );
      setNightIcon(nightIcon[0]);
      setMorningIcon(morningIcon[0]);
      setAfternoonIcon(afternoonIcon[0]);
      setEveningIcon(eveningIcon[0]);
    }
  }, [twoDaysWeather]);

  const handleWeatherInformation = (twoDaysWeather) => {
    setCurrentWeatherInformation(twoDaysWeather);
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
    <div
      className={`weather-item-container border-b-2 text-white cursor-pointer ${customClass}`}
      onClick={() => handleWeatherInformation(twoDaysWeather)}
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
          {twoDaysWeatherMaxTemp}°<span className="mx-1 text-black">/</span>
          {twoDaysWeatherMinTemp}°
        </div>
        {twoDaysSumRain <= 0 ? (
          <div className=""></div>
        ) : (
          <div className="text-blue-600">{twoDaysSumRain} mm</div>
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

export default TwoDays;
