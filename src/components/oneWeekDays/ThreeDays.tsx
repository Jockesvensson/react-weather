import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

const ThreeDays = ({
  forecastWeekData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [threeDaysWeather, setThreeDaysWeather] = useState<any>([]);
  const [threeDaysWeatherMaxTemp, setThreeDaysWeatherMaxTemp] = useState<any>(
    []
  );
  const [threeDaysWeatherMinTemp, setThreeDaysWeatherMinTemp] = useState<any>(
    []
  );
  const [threeDaysSumRain, setThreeDaysSumRain] = useState<any>([]);
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
    setDayName(moment().add(3, "days").format("dddd"));
    setDate(moment().add(3, "days").format("D"));
    setMonth(moment().add(3, "days").format("MMM "));
    const threeDaysData = forecastWeekData.filter((item) =>
      item.time.includes(threeDays)
    );
    setThreeDaysWeather(threeDaysData);
  }, [forecastWeekData]);

  useEffect(() => {
    const getHighAndLowTempThreeDays = threeDaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setThreeDaysWeatherMaxTemp(Math.max(...getHighAndLowTempThreeDays));
    setThreeDaysWeatherMinTemp(Math.min(...getHighAndLowTempThreeDays));
    const getSumThreeDaysRain = threeDaysWeather.map(
      (item, index) => item.data.next_6_hours.details.precipitation_amount
    );
    setThreeDaysSumRain(
      getSumThreeDaysRain.reduce((a, b) => a + b, 0).toFixed(1)
    );
    const getWindspeed = threeDaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [threeDaysWeather]);

  useEffect(() => {
    var icons = threeDaysWeather.map(
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
  }, [threeDaysWeather]);

  moment.locale("sv");
  var threeDays = moment().add(3, "days").format("L");

  const handleWeatherInformation = (threeDaysWeather) => {
    setCurrentWeatherInformationShorter(threeDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(threeDaysWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {threeDaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {threeDaysWeatherMinTemp}°
      </div>
      {threeDaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{threeDaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default ThreeDays;
