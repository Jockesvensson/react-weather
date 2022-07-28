import React from "react";
import OpacityIcon from "@mui/icons-material/Opacity";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import moment from "moment";

const DayHourWeather = ({ forecastTwentyFourHoursData }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 300;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 300;
  };

  return (
    <div className="relative grid grid-cols-1 py-4 px-8 bg-sky-300 border-sky-200 border-2 rounded-3xl group">
      <div
        className="bg-white top-1/2 left-1 -translate-y-1/2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden xsm:group-hover:block"
        onClick={() => slideLeft()}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: 30 }} />
      </div>
      <div
        id="slider"
        className="flex gap-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {forecastTwentyFourHoursData.map((item, index) => {
          var t = new Date(item.dt * 1000);
          var measureDateSaying = moment(t, "hh:mm").format("HH:mm");
          return (
            <div
              className="flex flex-col justify-center items-center text-white"
              key={index}
            >
              <div>{measureDateSaying}</div>
              {item.weather.map((item, index) => (
                <img
                  className="w-12 h-12"
                  src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="hej"
                  key={index}
                />
              ))}
              <div className="my-1 text-lg">{item.temp ? item.temp.toFixed(0) : ''}°</div>
              <div className="flex items-center text-xs">
                <OpacityIcon sx={{ fontSize: 14, marginRight: '0.2rem' }} />
                <div>{item.humidity} %</div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="bg-white top-1/2 right-1 -translate-y-1/2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden xsm:group-hover:block"
        onClick={() => slideRight()}
      >
        <ArrowCircleRightIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default DayHourWeather;
