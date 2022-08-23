import React, { useEffect, useState } from "react";
import { iconFunction } from "../helper/iconFunctions";
import { weatherDetailsFunction } from "../helper/weatherDetailsFunctions";
import IconHelperNight from "./IconHelpers/IconHelperNight";
import IconHelperMorning from "./IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "./IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "./IconHelpers/IconHelperEvening";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { dateDayFunction } from "../helper/timeFunctions";

const OneWeekWeatherItem = ({ item, dayIndex, cityData }) => {
  const [weatherMaxTemp, setWeatherMaxTemp] = useState<any>([]);
  const [weatherMinTemp, setWeatherMinTemp] = useState<any>([]);
  const [sumRain, setSumRain] = useState<any>([]);
  const [maxWindSpeed, setMaxWindSpeed] = useState<any>([]);
  const [nightIcon, setNightIcon] = useState<string>("");
  const [morningIcon, setMorningIcon] = useState<string>("");
  const [afternoonIcon, setAfternoonIcon] = useState<string>("");
  const [eveningIcon, setEveningIcon] = useState<string>("");
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    dateDayFunction(setDayName, setDate, setMonth, dayIndex, cityData);
    weatherDetailsFunction(
      item,
      setWeatherMaxTemp,
      setWeatherMinTemp,
      setMaxWindSpeed,
      setSumRain
    );
    iconFunction(
      item,
      setNightIcon,
      setMorningIcon,
      setAfternoonIcon,
      setEveningIcon,
      cityData
    );
  }, [item, dayIndex, cityData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFetching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isFetching) {
    return (
      <Box
        sx={{
          gridColumnStart: 1,
          gridColumnEnd: 12,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <p className="weather-item-date capitalize text-black">
        {dayName} {date}. {month}
      </p>
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
        <p className="text-lg text-red-500">
          {weatherMaxTemp}°<span className="mx-1 text-black">/</span>
          {weatherMinTemp}°
        </p>
        {sumRain <= 0 ? (
          <p className=""></p>
        ) : (
          <p className="text-blue-600">{sumRain} mm</p>
        )}
        <p className="text-black">{maxWindSpeed} m/s</p>
      </div>
      <div className="hidden lg:flex items-center justify-end text-sm text-black">
        <p>Se tid för tid</p>
        <span className="ml-2">
          <ArrowForwardIosIcon sx={{ fontSize: 23 }} />
        </span>
      </div>
      <div className="weather-item-readmore text-sm">
        <ArrowForwardIosIcon />
      </div>
    </>
  );
};

export default OneWeekWeatherItem;
