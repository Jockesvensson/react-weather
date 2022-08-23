import React from "react";

const SingleDayWeatherHeading = () => {
  return (
    <>
      <div className="singleoneweek-title-container pb-2 text-xs xsmall:text-sm sm:text-base border-b-2 border-gray-400 text-gray-500">
        <p className="singleoneweek-title-time">Tid</p>
        <p className="singleoneweek-title-weather">Väder</p>
        <div className="singleoneweek-title-forecast">
          <p className="singleoneweek-title-temp">Temp</p>
          <p className="singleoneweek-title-rain">Nederbörd mm</p>
          <p className="singleoneweek-title-wind">Vind(kast) m/s</p>
        </div>
        <p className="singleoneweek-title-windDesc hidden xsmall:block">
          Vindbeskrivelse
        </p>
      </div>
    </>
  );
};

export default SingleDayWeatherHeading;
