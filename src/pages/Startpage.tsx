import React, { useEffect, useState } from "react";
import {
  getCityData,
  getCurrentWeatherData,
  getForecastDailyData,
  getForecastTwentyFourHoursData,
  getForecastWeekData,
  getGeolocationData,
} from "../services/api";
import DayHourWeather from "../components/DayHourWeather";
import ExtraWeatherInfo from "../components/ExtraWeatherInfo";
import OneWeekWeather from "../components/OneWeekWeather";
import SunriseSundown from "../components/SunriseSundown";
import StartWeatherInfo from "../components/StartWeatherInfo";

const Startpage = () => {
  const [cityData, setCityData] = useState<any>([]);
  const [forecastCurrentDayMinTemp, setForecastCurrentDayMinTemp] =
    useState<number>();
  const [forecastCurrentDayMaxTemp, setForecastCurrentDayMaxTemp] =
    useState<number>();
  const [forecastCurrentDaySunrise, setForecastCurrentDaySunrise] =
    useState<number>();
  const [forecastCurrentDaySunset, setForecastCurrentDaySunset] =
    useState<number>();
  const [forecastCurrentDayHumidity, setForecastCurrentDayHumidity] =
    useState<number>();
  const [forecastCurrentDayWindSpeed, setForecastCurrentDayWindSpeed] =
    useState<number>();
  const [geolocationData, setGeolocationData] = useState<any>();
  const [forecastCurrentDayUVI, setForecastCurrentDayUVI] = useState<number>();
  const [currentWeatherData, setCurrentWeatherData] = useState<any>([]);
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string>("");
  const [currentWeatherIconDescription, setCurrentWeatherIconDescription] =
    useState<string>("");
  const [forecastTwentyFourHoursData, setForecastTwentyFourHoursData] =
    useState<any>([]);
  const [forecastWeekData, setForecastWeekData] = useState<any>([]);
  const [lat, setLat] = useState<string>("62.34714000000008");
  const [lon, setLon] = useState<string>("17.02091000000007");

  useEffect(() => {
    getCityData(setCityData, lat, lon);
    getCurrentWeatherData(
      setCurrentWeatherData,
      setCurrentWeatherIcon,
      setCurrentWeatherIconDescription,
      lat,
      lon
    );
    getForecastDailyData(
      setForecastCurrentDayMinTemp,
      setForecastCurrentDayMaxTemp,
      setForecastCurrentDaySunrise,
      setForecastCurrentDaySunset,
      setForecastCurrentDayHumidity,
      setForecastCurrentDayWindSpeed,
      setForecastCurrentDayUVI,
      lat,
      lon
    );
    getForecastTwentyFourHoursData(setForecastTwentyFourHoursData, lat, lon);
    getForecastWeekData(setForecastWeekData, lat, lon);
  }, [lat, lon]);

  return (
    <>
      <StartWeatherInfo
        cityData={cityData}
        forecastCurrentDayMinTemp={forecastCurrentDayMinTemp}
        forecastCurrentDayMaxTemp={forecastCurrentDayMaxTemp}
        currentWeatherData={currentWeatherData}
        currentWeatherIcon={currentWeatherIcon}
        currentWeatherIconDescription={currentWeatherIconDescription}
        setLat={setLat}
        setLon={setLon}
      />
      <DayHourWeather
        forecastTwentyFourHoursData={forecastTwentyFourHoursData}
      />
      <OneWeekWeather forecastWeekData={forecastWeekData} />
      <SunriseSundown
        forecastCurrentDaySunrise={forecastCurrentDaySunrise}
        forecastCurrentDaySunset={forecastCurrentDaySunset}
      />
      <ExtraWeatherInfo
        forecastCurrentDayHumidity={forecastCurrentDayHumidity}
        forecastCurrentDayWindSpeed={forecastCurrentDayWindSpeed}
        forecastCurrentDayUVI={forecastCurrentDayUVI}
      />
    </>
  );
};

export default Startpage;
