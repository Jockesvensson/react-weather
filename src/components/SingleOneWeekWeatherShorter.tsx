import React, { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SingleOneWeekWeatherShorterItem from "./SingleOneWeekWeatherShorterItem";
import SingleOneWeekWeatherShorterSunriseSundown from "./SingleOneWeekWeatherShorterSunriseSundown";

const SingleOneWeekWeatherShorter = ({
  currentWeatherInformationShorter,
  setShowMoreInformationShorter,
  currentDayInformation,
  currentDateInformation,
  currentMonthInformation,
  sunriseData,
  sunsetData,
  setSunDate,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setShowMoreInformationShorter(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    document.addEventListener("click", handleClickedOutside, true);
  }, []);

  const handleClickedOutside = (e) => {
    if (ref.current! && !ref.current!.contains(e.target)) {
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
            className="mx-auto w-full sm:w-11/12 lg:max-w-7xl h-auto relative px-4 small:px-12 lg:px-20 pt-6 pb-10 small:pt-6 small:pb-6 bg-white"
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
              <div className="singleoneweek-title-container pb-2 text-xs xsmall:text-sm sm:text-base border-b-2 border-gray-400 text-gray-500">
                <div className="singleoneweek-title-time">Tid</div>
                <div className="singleoneweek-title-weather">Väder</div>
                <div className="singleoneweek-title-forecast">
                  <div className="singleoneweek-title-temp">Temp</div>
                  <div className="singleoneweek-title-rain">Nederbörd mm</div>
                  <div className="singleoneweek-title-wind">Vind(kast) m/s</div>
                </div>
                <div className="singleoneweek-title-windDesc hidden xsmall:block">
                  Vindbeskrivelse
                </div>
              </div>
              {currentWeatherInformationShorter.map((item, index) => (
                <div
                  className="singleoneweek-item-container border-b-2 border-gray-400"
                  key={index}
                >
                  <SingleOneWeekWeatherShorterItem item={item} />
                </div>
              ))}
            </>
            <SingleOneWeekWeatherShorterSunriseSundown
              sunriseData={sunriseData}
              sunsetData={sunsetData}
              setSunDate={setSunDate}
              currentWeatherInformationShorter={
                currentWeatherInformationShorter
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOneWeekWeatherShorter;
