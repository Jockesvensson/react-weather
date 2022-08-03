import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

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
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [nightIcon, setNightIcon] = useState<string>("");
  const [morningIcon, setMorningIcon] = useState<string>("");
  const [afternoonIcon, setAfternoonIcon] = useState<string>("");
  const [eveningIcon, setEveningIcon] = useState<string>("");

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
      .slice(0, 19)
      .map(
        (item, index) => item.data.next_1_hours.details.precipitation_amount
      );
    const getSumTwoDaysRainLastItem = twoDaysWeather
      .slice(20, 21)
      .map(
        (item, index) => item.data.next_6_hours.details.precipitation_amount
      );
    const totalRain = [...getSumTwoDaysRain, ...getSumTwoDaysRainLastItem];
    setTwoDaysSumRain(totalRain.reduce((a, b) => a + b, 0).toFixed(1));
  }, [twoDaysWeather]);

  useEffect(() => {
    var nightIcon = twoDaysWeather
      .slice(0, 1)
      .map((item) => item.data.next_6_hours.summary.symbol_code);
    var morningIcon = twoDaysWeather
      .slice(6, 7)
      .map((item) => item.data.next_6_hours.summary.symbol_code);
    var afternoonIcon = twoDaysWeather
      .slice(14, 15)
      .map((item) => item.data.next_6_hours.summary.symbol_code);
    var eveningIcon = twoDaysWeather
      .slice(20, 21)
      .map((item) => item.data.next_6_hours.summary.symbol_code);
    setNightIcon(nightIcon[0]);
    setMorningIcon(morningIcon[0]);
    setAfternoonIcon(afternoonIcon[0]);
    setEveningIcon(eveningIcon[0]);
  }, [twoDaysWeather]);

  const handleWeatherInformation = (twoDaysWeather) => {
    setCurrentWeatherInformation(twoDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformation(true);
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(twoDaysWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {twoDaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {twoDaysWeatherMinTemp}°
      </div>
      {twoDaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{twoDaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">5 m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default TwoDays;
