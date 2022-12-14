import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SingleDayWeatherItem from "./SingleDayWeatherItem";
import SingleDayWeatherSunriseSundown from "./SingleDayWeatherSunriseSundown";
import SingleDayWeatherHeading from "./SingleDayWeatherHeading";
import { getClickedWeatherDate } from "../helper/timeFunctions";

const SingleDayWeather = ({
  currentWeatherInformation,
  setShowMoreInformation,
  showMoreInformation,
  // showMoreInformationShorter,
  sunriseData,
  sunsetData,
  setSunDate,
  cityData,
  clickedIndex,
}) => {
  const [dayName, setDayName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setShowMoreInformation(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    getClickedWeatherDate(
      setDayName,
      setDate,
      setMonth,
      cityData,
      clickedIndex
    );
    document.addEventListener("click", handleClickedOutside, true);
  }, [cityData, clickedIndex]);

  const handleClickedOutside = (e) => {
    if (ref.current! && !ref.current!.contains(e.target)) {
      setShowMoreInformation(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="z-30 fixed top-0 bottom-0 left-0 right-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 small:py-4 overflow-y-scroll">
        <div className="flex flex-col justify-center items-center relative min-h-full">
          <div
            ref={ref}
            className="mx-auto w-full sm:w-11/12 lg:max-w-6xl h-auto relative px-4 small:px-12 lg:px-20 pt-6 pb-10 small:pt-12 small:pb-12 bg-white shadow-2xl"
          >
            <>
              <div
                className="absolute top-6 right-4 small:right-12 lg:right-20"
                onClick={() => handleClose()}
              >
                <CloseIcon sx={{ fontSize: 40, cursor: "pointer" }} />
              </div>
              <h3 className="mb-8 text-2xl capitalize">
                {dayName} {date}. {month}
              </h3>
              <SingleDayWeatherHeading />
              {showMoreInformation &&
                currentWeatherInformation.map((item, index) => (
                  <div
                    className="singleoneweek-item-container border-b-2 border-gray-400"
                    key={index}
                  >
                    <SingleDayWeatherItem item={item} cityData={cityData} />
                  </div>
                ))}
            </>
            <SingleDayWeatherSunriseSundown
              sunriseData={sunriseData}
              sunsetData={sunsetData}
              setSunDate={setSunDate}
              currentWeatherInformation={currentWeatherInformation}
              showMoreInformation={showMoreInformation}
              // showMoreInformationShorter={showMoreInformationShorter}
              cityData={cityData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDayWeather;
