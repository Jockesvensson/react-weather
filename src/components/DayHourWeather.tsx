import React, { useEffect, useState } from "react";
import OpacityIcon from "@mui/icons-material/Opacity";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import moment from "moment";
import IconHelper from "./IconHelpers/IconHelper";
import { customCssContainerFunction } from "../helper/customCssFunctions";

const DayHourWeather = ({ forecastTwentyFourHoursData, cityData }) => {
  const [timeForCurrentLocation, setTimeForCurrentLocation] = useState<any>("");
  const [customClass, setCustomClass] = useState<string>("");
  const [showSlideLeft, setShowSlideLeft] = useState<boolean>(true);
  const [showSlideRight, setShowSlideRight] = useState<boolean>(true);
  const timeNow = moment().format("HH:mm");
  const slider = document.getElementById("slider");

  const slideLeft = () => {
    slider!.scrollLeft = slider!.scrollLeft - 300;
    // if (slider!.scrollLeft <= 300) {
    //   setShowSlideLeft(false);
    // }
    // if (slider!.scrollLeft >= 300) {
    //   setShowSlideRight(true);
    // }
  };
  const slideRight = () => {
    slider!.scrollLeft = slider!.scrollLeft + 300;
    // if (slider!.scrollLeft >= 0) {
    //   setShowSlideLeft(true);
    // }
    // if (slider!.scrollLeft >= 300) {
    //   setShowSlideRight(false);
    // }
  };

  useEffect(() => {
    customCssContainerFunction(timeNow, setCustomClass);
    setTimeForCurrentLocation(cityData);
  }, [timeNow, cityData]);

  return (
    <div
      className={`relative grid grid-cols-1 py-4 px-4 ${customClass} border-2 group shadow-md`}
    >
      {showSlideLeft && (
        <div
          className="bg-white top-1/2 left-1 -translate-y-1/2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden xsm:group-hover:block"
          onClick={() => slideLeft()}
        >
          <ArrowCircleLeftIcon sx={{ fontSize: 30 }} />
        </div>
      )}
      <div
        id="slider"
        className="flex gap-3 small:gap-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {forecastTwentyFourHoursData.map((item, index) => {
          var d = new Date(item.time);
          var localTime = d.getTime();
          var localOffset = d.getTimezoneOffset() * 60000;
          var utc = localTime + localOffset;
          var city = utc + 1000 * cityData.timezone;
          var nd = new Date(city);
          var measureDateSaying = moment(nd, "hh:mm").format("HH:mm");
          var icons = "";
          if (!item.data.next_1_hours) {
            icons = item.data.next_6_hours.summary.symbol_code;
          } else {
            icons = item.data.next_1_hours.summary.symbol_code;
          }
          return (
            <div
              className="flex flex-col justify-center items-center text-black"
              key={index}
            >
              <p className="mb-2 text-sm small:text-base">
                {measureDateSaying}
              </p>
              <IconHelper icons={icons} />
              <p className="my-1 text-base small:text-lg text-red-500">
                {item.data.instant.details.air_temperature
                  ? item.data.instant.details.air_temperature.toFixed(0)
                  : ""}
                °
              </p>
              <div className="flex items-center text-xs text-blue-600">
                <OpacityIcon sx={{ fontSize: 14, marginRight: "0.2rem" }} />
                <p>
                  {item.data.next_1_hours.details.probability_of_precipitation
                    ? item.data.next_1_hours.details.probability_of_precipitation.toFixed(
                        0
                      )
                    : 0}{" "}
                  %
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {showSlideRight && (
        <div
          className="bg-white top-1/2 right-1 -translate-y-1/2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden xsm:group-hover:block"
          onClick={() => slideRight()}
        >
          <ArrowCircleRightIcon sx={{ fontSize: 30 }} />
        </div>
      )}
    </div>
  );
};

export default DayHourWeather;
