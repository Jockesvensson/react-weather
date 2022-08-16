import React from "react";

const SingleDayWeatherHeading = () => {
  return (
    <>
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
    </>
  );
};

export default SingleDayWeatherHeading;
