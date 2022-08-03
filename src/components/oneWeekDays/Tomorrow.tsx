import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

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
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(tomorrowWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {tomorrowWeatherMaxTemp}°<span className="mx-1">/</span>
        {tomorrowWeatherMinTemp}°
      </div>
      {tomorrowSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{tomorrowSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default Tomorrow;
