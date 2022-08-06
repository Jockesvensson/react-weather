import React, { useEffect, useState } from "react";
import OpacityIcon from "@mui/icons-material/Opacity";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import moment from "moment";
import IconHelper from "./IconHelpers/IconHelper";

const DayHourWeather = ({ forecastTwentyFourHoursData }) => {
  const [customClass, setCustomClass] = useState<string>("");

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 300;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 300;
  };

  const timeNow = moment().format("HH:mm");

  useEffect(() => {
    if (timeNow > "08:00") {
      document.body.style.backgroundColor = "rgb(13, 165, 206)";
      setCustomClass("container-bg-day");
    }
    if (timeNow > "22:00") {
      document.body.style.backgroundColor = "rgb(54, 50, 50)";
      setCustomClass("container-bg-night");
    }
  }, [timeNow]);

  return (
    <div
      className={`relative grid grid-cols-1 py-4 px-4 ${customClass} border-2 rounded-3xl group`}
    >
      <div
        className="bg-white top-1/2 left-1 -translate-y-1/2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden xsm:group-hover:block"
        onClick={() => slideLeft()}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: 30 }} />
      </div>
      <div
        id="slider"
        className="flex gap-3 small:gap-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {forecastTwentyFourHoursData.map((item, index) => {
          var t = new Date(item.time);
          var measureDateSaying = moment(t, "hh:mm").format("HH:mm");
          var icons = "";
          if (!item.data.next_1_hours) {
            icons = item.data.next_6_hours.summary.symbol_code;
          } else {
            icons = item.data.next_1_hours.summary.symbol_code;
          }
          return (
            <div
              className="flex flex-col justify-center items-center text-white"
              key={index}
            >
              <div className="mb-2 text-sm small:text-base">
                {measureDateSaying}
              </div>
              <IconHelper icons={icons} />
              <div className="my-1 text-base small:text-lg">
                {item.data.instant.details.air_temperature
                  ? item.data.instant.details.air_temperature.toFixed(0)
                  : ""}
                °
              </div>
              <div className="flex items-center text-xs">
                <OpacityIcon sx={{ fontSize: 14, marginRight: "0.2rem" }} />
                <div>
                  {item.data.next_1_hours.details.probability_of_precipitation
                    ? item.data.next_1_hours.details.probability_of_precipitation.toFixed(
                        0
                      )
                    : 0}{" "}
                  %
                </div>
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
