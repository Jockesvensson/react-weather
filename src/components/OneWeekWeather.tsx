import React, { useEffect, useState } from "react";
import OpacityIcon from "@mui/icons-material/Opacity";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "moment/locale/sv";

const OneWeekWeather = ({ forecastWeekData }) => {
  const navigate = useNavigate();

  const handleWeatherDay = (item, day) => {
    navigate(`/weather/${day}`, { state: { item } });
  };

  return (
    <div className="flex flex-col mt-4 py-4 px-4 xsm:px-8 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
      {forecastWeekData.map((item, index) => {
        var t = new Date(item.dt * 1000);
        moment.locale("sv");
        var day = moment(t, "dddd").format("dddd");
        if (index === 0) {
          day = "idag";
        }
        return (
          <div
            className="flex justify-between items-center"
            key={index}
          >
            <div className="w-1/5 text-sm xsm:text-base cursor-pointer capitalize" onClick={() => handleWeatherDay(item, day)}>{day}</div>
            <div className="flex flex-col xsm:flex-row items-center w-1/5 text-right">
              <OpacityIcon sx={{ fontSize: 12, marginRight: "0.2rem" }} />
              <div className="text-xs">
                {item.rain ? item.rain.toFixed(0) + "%" : "0 %"}
              </div>
            </div>
            {item.weather.map((item, index) =>
              item.icon ? (
                <img
                  key={index}
                  className="w-12 h-12 text-right"
                  src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="hej"
                />
              ) : null
            )}
            <div className="w-1/5 text-right text-sm xsm:text-lg">
              {item.temp.max ? item.temp.max.toFixed(0) : null}°
            </div>
            <div className="w-1/5 text-right text-sm xsm:text-lg">
              {item.temp.min ? item.temp.min.toFixed(0) : null}°
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneWeekWeather;
