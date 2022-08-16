import React, { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SingleDayWeatherItem from "./SingleDayWeatherItem";
import SingleDayWeatherSunriseSundown from "./SingleDayWeatherSunriseSundown";
import SingleDayWeatherHeading from "./SingleDayWeatherHeading";

const SingleDayWeather = ({
  currentWeatherInformation,
  setShowMoreInformation,
  currentWeatherInformationShorter,
  setShowMoreInformationShorter,
  showMoreInformation,
  showMoreInformationShorter,
  currentDayInformation,
  currentDateInformation,
  currentMonthInformation,
  sunriseData,
  sunsetData,
  setSunDate,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setShowMoreInformation(false);
    setShowMoreInformationShorter(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    document.addEventListener("click", handleClickedOutside, true);
  }, []);

  const handleClickedOutside = (e) => {
    if (ref.current! && !ref.current!.contains(e.target)) {
      setShowMoreInformation(false);
      setShowMoreInformationShorter(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="z-30 fixed top-0 bottom-0 left-0 right-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 small:py-4">
        <div className="flex flex-col justify-center items-center relative min-h-full">
          <div
            ref={ref}
            className="mx-auto max-h-screen overflow-y-auto w-full sm:w-11/12 lg:max-w-6xl h-auto relative px-4 small:px-12 lg:px-20 pt-6 pb-10 small:pt-6 small:pb-6 bg-white"
          >
            <>
              <div
                className="absolute top-6 right-4 small:right-12 lg:right-20"
                onClick={() => handleClose()}
              >
                <CloseIcon sx={{ fontSize: 40, cursor: "pointer" }} />
              </div>
              <div className="mb-8 text-2xl capitalize">
                {currentDayInformation} {currentDateInformation}.{" "}
                {currentMonthInformation}
              </div>
              <SingleDayWeatherHeading />
              {showMoreInformation &&
                currentWeatherInformation.map((item, index) => (
                  <div
                    className="singleoneweek-item-container border-b-2 border-gray-400"
                    key={index}
                  >
                    <SingleDayWeatherItem item={item} />
                  </div>
                ))}
              {showMoreInformationShorter &&
                currentWeatherInformationShorter.map((item, index) => (
                  <div
                    className="singleoneweek-item-container border-b-2 border-gray-400"
                    key={index}
                  >
                    <SingleDayWeatherItem item={item} />
                  </div>
                ))}
            </>
            <SingleDayWeatherSunriseSundown
              sunriseData={sunriseData}
              sunsetData={sunsetData}
              setSunDate={setSunDate}
              currentWeatherInformation={currentWeatherInformation}
              currentWeatherInformationShorter={
                currentWeatherInformationShorter
              }
              showMoreInformation={showMoreInformation}
              showMoreInformationShorter={showMoreInformationShorter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDayWeather;
