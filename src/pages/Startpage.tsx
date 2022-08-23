import React, { useEffect, useState } from "react";
import {
  getCityData,
  getYrCurrentSunriseSunsetData,
  getYrCurrentWeatherData,
  getYrSunriseSunsetData,
  getYrTwentyFourHoursData,
  getYrWeekWeatherData,
} from "../services/api";
import DayHourWeather from "../components/DayHourWeather";
import ExtraWeatherInfo from "../components/ExtraWeatherInfo";
import OneWeekWeather from "../components/OneWeekWeather";
import SunriseSundown from "../components/SunriseSundown";
import StartWeatherInfo from "../components/StartWeatherInfo";
import moment from "moment";
import "moment/locale/sv";
import SearchLocation from "../components/SearchLocation";

const Startpage = () => {
  const [cityData, setCityData] = useState<any>([]);
  const [countryData, setCountryData] = useState<any>([]);
  const [currentWeatherData, setCurrentWeatherData] = useState<any>([]);
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
  const [currentWeatherUVI, setCurrentWeatherUVI] = useState<number>(0);
  const [sunDate, setSunDate] = useState<string>(moment().format("L"));

  //MATFORS
  const [lat, setLat] = useState<string>("62.348157");
  const [lon, setLon] = useState<string>("17.031465");

  //ÅBO
  // const [lat, setLat] = useState<string>("60.454510");
  // const [lon, setLon] = useState<string>("22.264824");

  //Atlanta
  // const [lat, setLat] = useState<string>("33.753746");
  // const [lon, setLon] = useState<string>("-84.386330");

  //TOKYO
  //  const [lat, setLat] = useState<string>("35.652832");
  //  const [lon, setLon] = useState<string>("139.839478");

  const callApi = () => {
    getCityData(setCityData, lat, lon, setCountryData);
    getYrTwentyFourHoursData(lat, lon, setForecastTwentyFourHoursData);
    getYrCurrentWeatherData(
      lat,
      lon,
      setCurrentWeatherData,
      setCurrentWeatherUVI
    );
    getYrWeekWeatherData(lat, lon, setForecastWeekData);
    getYrCurrentSunriseSunsetData(
      lat,
      lon,
      setTodaySunriseData,
      setTodaySunsetData,
      sunTodayDate,
      cityData
    );
    getYrSunriseSunsetData(
      lat,
      lon,
      setSunriseData,
      setSunsetData,
      sunDate,
      cityData
    );
  };

  useEffect(() => {
    callApi();
  }, [lat, lon, sunDate, sunTodayDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      callApi();
    }, 300000);

    return () => {
      clearInterval(timer);
    };
  }, [lat, lon, sunDate, sunTodayDate]);

  return (
    <>
      <SearchLocation setLat={setLat} setLon={setLon} />
      <StartWeatherInfo
        currentWeatherData={currentWeatherData}
        cityData={cityData}
        countryData={countryData}
      />
      <DayHourWeather
        forecastTwentyFourHoursData={forecastTwentyFourHoursData}
        cityData={cityData}
      />
      <OneWeekWeather
        forecastWeekData={forecastWeekData}
        sunriseData={sunriseData}
        sunsetData={sunsetData}
        setSunDate={setSunDate}
        cityData={cityData}
      />
      <SunriseSundown
        todaySunriseData={todaySunriseData}
        todaySunsetData={todaySunsetData}
        cityData={cityData}
        forecastWeekData={forecastWeekData}
      />
      <ExtraWeatherInfo
        currentWeatherData={currentWeatherData}
        currentWeatherUVI={currentWeatherUVI}
      />
    </>
  );
};

export default Startpage;
