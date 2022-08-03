import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import IconHelperNight from "../IconHelpers/IconHelperNight";
import IconHelperMorning from "../IconHelpers/IconHelperMorning";
import IconHelperAfternoon from "../IconHelpers/IconHelperAfternoon";
import IconHelperEvening from "../IconHelpers/IconHelperEvening";

const SevenDays = ({
  forecastWeekData,
  setCurrentWeatherInformationShorter,
  setShowMoreInformationShorter,
  setCurrentDayInformation,
  setCurrentDateInformation,
  setCurrentMonthInformation,
}) => {
  const [sevenDaysWeather, setSevenDaysWeather] = useState<any>([]);
  const [sevenDaysWeatherMaxTemp, setSevenDaysWeatherMaxTemp] = useState<any>(
    []
  );
  const [sevenDaysWeatherMinTemp, setSevenDaysWeatherMinTemp] = useState<any>(
    []
  );
  const [sevenDaysSumRain, setSevenDaysSumRain] = useState<any>([]);
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
    setDayName(moment().add(7, "days").format("dddd"));
    setDate(moment().add(7, "days").format("D"));
    setMonth(moment().add(7, "days").format("MMM "));
    const sevenDaysData = forecastWeekData.filter((item) =>
      item.time.includes(sevenDays)
    );
    setSevenDaysWeather(sevenDaysData);
  }, [forecastWeekData]);

  useEffect(() => {
    const getHighAndLowTempSevenDays = sevenDaysWeather.map((item, index) =>
      item.data.instant.details.air_temperature.toFixed(0)
    );
    setSevenDaysWeatherMaxTemp(Math.max(...getHighAndLowTempSevenDays));
    setSevenDaysWeatherMinTemp(Math.min(...getHighAndLowTempSevenDays));
    const getSumSevenDaysRain = sevenDaysWeather.map(
      (item, index) => item.data.next_6_hours.details.precipitation_amount
    );
    setSevenDaysSumRain(
      getSumSevenDaysRain.reduce((a, b) => a + b, 0).toFixed(1)
    );
    const getWindspeed = sevenDaysWeather.map((item, index) =>
      item.data.instant.details.wind_speed.toFixed(0)
    );
    setMaxWindSpeed(Math.max(...getWindspeed));
  }, [sevenDaysWeather]);

  useEffect(() => {
    var icons = sevenDaysWeather.map(
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
  }, [sevenDaysWeather]);

  moment.locale("sv");
  var sevenDays = moment().add(7, "days").format("L");

  const handleWeatherInformation = (sevenDaysWeather) => {
    setCurrentWeatherInformationShorter(sevenDaysWeather);
    setCurrentDayInformation(dayName);
    setCurrentDateInformation(date);
    setCurrentMonthInformation(month);
    setShowMoreInformationShorter(true);
  };

  return (
    <div
      className="flex items-center py-4 px-2 xsm:px-4 bg-sky-300 hover:bg-sky-600 border-sky-200 border-b-2 text-white cursor-pointer"
      onClick={() => handleWeatherInformation(sevenDaysWeather)}
    >
      <div className="w-2/9 capitalize">
        {dayName} {date}. {month}
      </div>
      <IconHelperNight nightIcon={nightIcon} />
      <IconHelperMorning morningIcon={morningIcon} />
      <IconHelperAfternoon afternoonIcon={afternoonIcon} />
      <IconHelperEvening eveningIcon={eveningIcon} />
      <div className="w-1/9 mx-2">
        {sevenDaysWeatherMaxTemp}°<span className="mx-1">/</span>
        {sevenDaysWeatherMinTemp}°
      </div>
      {sevenDaysSumRain <= 0 ? (
        <div className="w-1/9 mx-2"></div>
      ) : (
        <div className="w-1/9 mx-2">{sevenDaysSumRain} mm</div>
      )}
      <div className="w-1/9 mx-2">{maxWindSpeed} m/s</div>
      <div className="w-1/9 text-sm">Se tid för tid</div>
    </div>
  );
};

export default SevenDays;
