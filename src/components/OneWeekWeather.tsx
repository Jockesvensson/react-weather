import React, { useState } from "react";
import "moment/locale/sv";
import SingleOneWeekWeather from "./SingleOneWeekWeather";
import Today from "./oneWeekDays/Today";
import Tomorrow from "./oneWeekDays/Tomorrow";
import TwoDays from "./oneWeekDays/TwoDays";
import ThreeDays from "./oneWeekDays/ThreeDays";
import FourDays from "./oneWeekDays/FourDays";
import FiveDays from "./oneWeekDays/FiveDays";
import SixDays from "./oneWeekDays/SixDays";
import SevenDays from "./oneWeekDays/SevenDays";
import EightDays from "./oneWeekDays/EightDays";
import SingleOneWeekWeatherShorter from "./SingleOneWeekWeatherShorter";
import { categoryTitle } from "../services/categoryTitle";
import { categoryTitleMobile } from "../services/categoryTitleMobile";

const OneWeekWeather = ({
  forecastWeekData,
  tomorrowWeatherData,
  twoDaysForwardWeatherData,
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

  return (
    <>
      <div className="flex flex-col mt-4 py-4 px-2 sm:px-4 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
        <div className="oneweekweather-container-desktop text-sm border-sky-200 border-b-2">
          <div className="oneweekweather-item-symbols-headers">
            <div className="oneweekweather-item-night">Natt</div>
            <div className="oneweekweather-item-morning">Morgon</div>
            <div className="oneweekweather-item-afternoon">Efterm.</div>
            <div className="oneweekweather-item-evening">Kväll</div>
          </div>
          <div className="oneweekweather-item-forecast-headers">
            <div className="oneweekweather-item-temperature">Max/min temp</div>
            <div className="oneweekweather-item-precipitation">Nederbörd</div>
            <div className="oneweekweather-item-wind">Vind</div>
          </div>
        </div>
        <div className="oneweekweather-container-mobile text-sm border-sky-200 border-b-2">
          <div className="oneweekweather-item-mobile">
            <div className="oneweekweather-item-night">Natt</div>
            <div className="oneweekweather-item-day">Dag</div>
            <div className="oneweekweather-item-morning">Morgon</div>
            <div className="oneweekweather-item-afternoon">Efterm.</div>
            <div className="oneweekweather-item-evening">Kväll</div>
          </div>
        </div>
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
        <ThreeDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <FourDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <FiveDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <SixDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <SevenDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
        <EightDays
          forecastWeekData={forecastWeekData}
          setCurrentWeatherInformationShorter={
            setCurrentWeatherInformationShorter
          }
          setShowMoreInformationShorter={setShowMoreInformationShorter}
          setCurrentDayInformation={setCurrentDayInformation}
          setCurrentDateInformation={setCurrentDateInformation}
          setCurrentMonthInformation={setCurrentMonthInformation}
        />
      </div>
      {showMoreInformation && (
        <SingleOneWeekWeather
          currentWeatherInformation={currentWeatherInformation}
          setShowMoreInformation={setShowMoreInformation}
          currentDayInformation={currentDayInformation}
          currentDateInformation={currentDateInformation}
          currentMonthInformation={currentMonthInformation}
          sunriseData={sunriseData}
          sunsetData={sunsetData}
          setSunDate={setSunDate}
        />
      )}
      {showMoreInformationShorter && (
        <SingleOneWeekWeatherShorter
          currentWeatherInformationShorter={currentWeatherInformationShorter}
          setShowMoreInformationShorter={setShowMoreInformationShorter}
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
