import React, { useEffect, useState } from "react";
import {
  getCityData,
  getYrCurrentSunriseSunsetData,
  getYrCurrentWeatherData,
  getYrSunriseSunsetData,
  getYrTomorrowWeatherData,
  getYrTwentyFourHoursData,
  getYrTwoDaysForwardWeatherData,
  getYrWeekWeatherData,
} from "../services/api";
import DayHourWeather from "../components/DayHourWeather";
import ExtraWeatherInfo from "../components/ExtraWeatherInfo";
import OneWeekWeather from "../components/OneWeekWeather";
import SunriseSundown from "../components/SunriseSundown";
import StartWeatherInfo from "../components/StartWeatherInfo";
import moment from "moment";
import "moment/locale/sv";

const Startpage = () => {
  const [cityData, setCityData] = useState<any>([]);
  const [forecastCurrentDayMaxTemp, setForecastCurrentDayMaxTemp] =
    useState<number>();
  const [currentWeatherData, setCurrentWeatherData] = useState<any>([]);
  const [currentWeatherTemp, setCurrentWeatherTemp] = useState<any>([]);
  const [forecastTwentyFourHoursData, setForecastTwentyFourHoursData] =
    useState<any>([]);
  const [forecastWeekData, setForecastWeekData] = useState<any>([]);
  const [todaySunriseData, setTodaySunriseData] = useState<any>([]);
  const [sunriseData, setSunriseData] = useState<any>([]);
  const [todaySunsetData, setTodaySunsetData] = useState<any>([]);
  const [sunsetData, setSunsetData] = useState<any>([]);
  const [sunTodayDate, setSunTodayDate] = useState<string>(
    moment().format("L")
  );
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string>("");
  const [currentWeatherWindSpeed, setCurrentWeatherWindSpeed] =
    useState<string>("");
  const [currentWeatherGust, setCurrentWeatherGust] = useState<string>("");
  const [currentWeatherRain, setCurrentWeatherRain] = useState<string>("");
  const [currentWindDirection, setCurrentWindDirection] = useState<string>("");
  const [currentWeatherUVI, setCurrentWeatherUVI] = useState<number>(0);
  const [currentWeatherHumidity, setCurrentWeatherHumidity] =
    useState<number>(0);
  const [sunDate, setSunDate] = useState<string>(moment().format("L"));
  const [tomorrowWeatherData, setTomorrowWeatherData] = useState<any>([]);
  const [twoDaysForwardWeatherData, setTwoDaysForwardWeatherData] =
    useState<any>([]);
  const [lat, setLat] = useState<string>("62.348157");
  const [lon, setLon] = useState<string>("17.031465");

  useEffect(() => {
    getCityData(setCityData, lat, lon);
    getYrTwentyFourHoursData(lat, lon, setForecastTwentyFourHoursData);
    getYrCurrentWeatherData(
      lat,
      lon,
      setCurrentWeatherTemp,
      setForecastCurrentDayMaxTemp,
      setCurrentWeatherData,
      setCurrentWeatherIcon,
      setCurrentWeatherWindSpeed,
      setCurrentWeatherGust,
      setCurrentWeatherRain,
      setCurrentWindDirection,
      setCurrentWeatherUVI,
      setCurrentWeatherHumidity
    );
    getYrWeekWeatherData(lat, lon, setForecastWeekData);
    getYrTomorrowWeatherData(lat, lon, setTomorrowWeatherData);
    getYrTwoDaysForwardWeatherData(lat, lon, setTwoDaysForwardWeatherData);
    getYrCurrentSunriseSunsetData(
      lat,
      lon,
      setTodaySunriseData,
      setTodaySunsetData,
      sunTodayDate
    );
    getYrSunriseSunsetData(lat, lon, setSunriseData, setSunsetData, sunDate);
  }, [lat, lon, sunDate, sunTodayDate]);

  return (
    <>
      <StartWeatherInfo
        cityData={cityData}
        forecastCurrentDayMaxTemp={forecastCurrentDayMaxTemp}
        currentWeatherTemp={currentWeatherTemp}
        setLat={setLat}
        setLon={setLon}
        currentWeatherIcon={currentWeatherIcon}
        currentWeatherWindSpeed={currentWeatherWindSpeed}
        currentWeatherGust={currentWeatherGust}
        currentWeatherRain={currentWeatherRain}
        currentWindDirection={currentWindDirection}
      />
      <DayHourWeather
        forecastTwentyFourHoursData={forecastTwentyFourHoursData}
      />
      <OneWeekWeather
        forecastWeekData={forecastWeekData}
        tomorrowWeatherData={tomorrowWeatherData}
        twoDaysForwardWeatherData={twoDaysForwardWeatherData}
        sunriseData={sunriseData}
        sunsetData={sunsetData}
        setSunDate={setSunDate}
      />
      <SunriseSundown
        todaySunriseData={todaySunriseData}
        todaySunsetData={todaySunsetData}
      />
      <ExtraWeatherInfo
        currentWeatherWindSpeed={currentWeatherWindSpeed}
        currentWeatherUVI={currentWeatherUVI}
        currentWeatherHumidity={currentWeatherHumidity}
      />
    </>
  );
};

export default Startpage;
