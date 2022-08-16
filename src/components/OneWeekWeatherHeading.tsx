import React from "react";

const OneWeekWeatherHeading = () => {
  return (
    <>
      <div className="oneweekweather-container-desktop text-sm border-b-2">
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
      <div className="oneweekweather-container-mobile text-sm  border-b-2">
        <div className="oneweekweather-item-mobile">
          <div className="oneweekweather-item-night">Natt</div>
          <div className="oneweekweather-item-day">Dag</div>
          <div className="oneweekweather-item-morning">Morgon</div>
          <div className="oneweekweather-item-afternoon">Efterm.</div>
          <div className="oneweekweather-item-evening">Kväll</div>
        </div>
      </div>
    </>
  );
};

export default OneWeekWeatherHeading;
