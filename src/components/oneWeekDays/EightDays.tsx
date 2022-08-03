import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

const EightDays = ({
  forecastWeekData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [eightDaysWeather, setEightDaysWeather] = useState<any>([]);
  const [eightDaysWeatherMaxTemp, setEightDaysWeatherMaxTemp] = useState<any>(
    []
  );
  const [eightDaysWeatherMinTemp, setEightDaysWeatherMinTemp] = useState<any>(
    []
  );
  const [maxWindSpeed, setMaxWindSpeed] = useState<any>([]);
  const [eightDaysSumRain, setEightDaysSumRain] = useState<any>([]);
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [nightIcon, setNightIcon] = useState<string>("");
  const [morningIcon, setMorningIcon] = useState<string>("");
  const [afternoonIcon, setAfternoonIcon] = useState<string>("");
  const [eveningIcon, setEveningIcon] = useState<string>("");

  useEffect(() => {
    moment.locale("sv");
    setDayName(moment().add(8, "days").format("dddd"));
    setDate(moment().add(8, "days").format("D"));
    setMonth(moment().add(8, "days").format("MMM "));
    const eightDaysData = forecastWeekData.filter((item) =>
      item.time.includes(eightDays)
    );
    setEightDaysWeather(eightDaysData);
  }, [forecastWeekData]);

  useEffect(() => {
    const getHighAndLowTempEightDays = eightDaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setEightDaysWeatherMaxTemp(Math.max(...getHighAndLowTempEightDays));
    setEightDaysWeatherMinTemp(Math.min(...getHighAndLowTempEightDays));
    const getWindspeed = eightDaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
    const getSumEightDaysRain = eightDaysWeather.map(
      (item, index) => item.data.next_6_hours.details.precipitation_amount
    );
    setEightDaysSumRain(
      getSumEightDaysRain.reduce((a, b) => a + b, 0).toFixed(1)
    );
  }, [eightDaysWeather]);

  useEffect(() => {
    var icons = eightDaysWeather.map(
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
  }, [eightDaysWeather]);

  moment.locale("sv");
  var eightDays = moment().add(8, "days").format("L");

  const handleWeatherInformation = (eightDaysWeather) => {
    setCurrentWeatherInformationShorter(eightDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(eightDaysWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {eightDaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {eightDaysWeatherMinTemp}°
      </div>
      {eightDaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{eightDaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default EightDays;
