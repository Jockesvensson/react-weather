import React from "react";

const OneWeekWeatherHeading = () => {
  return (
    <>
      <div className="oneweekweather-container-desktop text-sm border-b-2 text-gray-500">
        <div className="oneweekweather-item-symbols-headers">
          <p className="oneweekweather-item-night">Natt</p>
          <p className="oneweekweather-item-morning">Morgon</p>
          <p className="oneweekweather-item-afternoon">Efterm.</p>
          <p className="oneweekweather-item-evening">Kväll</p>
        </div>
        <div className="oneweekweather-item-forecast-headers">
          <p className="oneweekweather-item-temperature">Max/min temp</p>
          <p className="oneweekweather-item-precipitation">Nederbörd</p>
          <p className="oneweekweather-item-wind">Vind</p>
        </div>
      </div>
      <div className="oneweekweather-container-mobile text-sm border-b-2 text-gray-500">
        <div className="oneweekweather-item-mobile">
          <p className="oneweekweather-item-night">Natt</p>
          <p className="oneweekweather-item-day">Dag</p>
          <p className="oneweekweather-item-morning">Morgon</p>
          <p className="oneweekweather-item-afternoon">Efterm.</p>
          <p className="oneweekweather-item-evening">Kväll</p>
        </div>
      </div>
    </>
  );
};

export default OneWeekWeatherHeading;
