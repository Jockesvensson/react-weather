import React, { useEffect, useState } from "react";
import "moment/locale/sv";
import moment from "moment";
import SingleOneWeekWeather from "./SingleOneWeekWeather";
import Today from "./oneWeekDays/Today";
import Tomorrow from "./oneWeekDays/Tomorrow";
import TwoDays from "./oneWeekDays/TwoDays";
import SingleOneWeekWeatherShorter from "./SingleOneWeekWeatherShorter";
import { customCssContainerFunction } from "../helper/customCssFunctions";
import FinalSixDays from "./oneWeekDays/FinalSixDays";
import SingleDayWeather from "./SingleDayWeather";
import OneWeekWeatherHeading from "./OneWeekWeatherHeading";

const OneWeekWeather = ({
  forecastWeekData,
  tomorrowWeatherData,
  twoDaysForwardWeatherData,
  finalSixDaysWeatherData,
  sunriseData,
  sunsetData,
  setSunDate,
}) => {
  const [currentWeatherInformation, setCurrentWeatherInformation] =
    useState<any>([]);
  const [
    currentWeatherInformationShorter,
    setCurrentWeatherInformationShorter,
  ] = useState<any>([]);
  const [showMoreInformation, setShowMoreInformation] =
    useState<boolean>(false);
  const [showMoreInformationShorter, setShowMoreInformationShorter] =
    useState<boolean>(false);
  const [currentDayInformation, setCurrentDayInformation] =
    useState<string>("");
  const [currentDateInformation, setCurrentDateInformation] =
    useState<string>("");
  const [currentMonthInformation, setCurrentMonthInformation] =
    useState<string>("");
  const [customClass, setCustomClass] = useState<string>("");
  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    customCssContainerFunction(timeNow, setCustomClass);
  }, [timeNow]);

  return (
    <>
      <div
        className={`flex flex-col mt-4 py-4 px-2 sm:px-4 border-2 rounded-3xl text-white ${customClass}`}
      >
        <OneWeekWeatherHeading />
        <Today
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformation={setCurrentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <Tomorrow
          tomorrowWeatherData={tomorrowWeatherData}
          setCurrentWeatherInformation={setCurrentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <TwoDays
          twoDaysForwardWeatherData={twoDaysForwardWeatherData}
          setCurrentWeatherInformation={setCurrentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <FinalSixDays
          finalSixDaysWeatherData={finalSixDaysWeatherData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
      </div>
      {(showMoreInformation || showMoreInformationShorter) && (
        <SingleDayWeather
          currentWeatherInformation={currentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          currentWeatherInformationShorter={currentWeatherInformationShorter}
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          showMoreInformation={showMoreInformation}
          showMoreInformationShorter={showMoreInformationShorter}
          currentDayInformation={currentDayInformation}
          currentDateInformation={currentDateInformation}
          currentMonthInformation={currentMonthInformation}
          sunriseData={sunriseData}
          sunsetData={sunsetData}
          setSunDate={setSunDate}
        />
      )}
    </>
  );
};

export default OneWeekWeather;
