import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

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

  const handleWeatherInformation = (fiveDaysWeather, dayName, date, month) => {
    setCurrentWeatherInformationShorter(fiveDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() =>
        handleWeatherInformation(fiveDaysWeather, dayName, date, month)
      }
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {fiveDaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {fiveDaysWeatherMinTemp}°
      </div>
      {fiveDaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{fiveDaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default FiveDays;
