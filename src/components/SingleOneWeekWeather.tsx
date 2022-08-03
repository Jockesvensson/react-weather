import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/sv";
import CloseIcon from "@mui/icons-material/Close";
import IconHelper from "./IconHelpers/IconHelper";
import SouthIcon from "@mui/icons-material/South";
import WindDescription from "./windDescription/WindDescription";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { singleOneWeekCategoryTitle } from "../services/singleOneWeekCategoryTitle";

const SingleOneWeekWeather = ({
  currentWeatherInformation,
  setShowMoreInformation,
  currentDayInformation,
  currentDateInformation,
  currentMonthInformation,
  sunriseData,
  sunsetData,
  setSunDate,
}) => {
  var t = new Date(sunriseData);
  var sunrise = moment(t, "hh:mm").format("HH:mm");
  var tt = new Date(sunsetData);
  var sunset = moment(tt, "hh:mm").format("HH:mm");

  const handleClose = () => {
    setShowMoreInformation(false);
  };

  useEffect(() => {
    const date = currentWeatherInformation[3].time;
    var t = new Date(date);
    var newDate = moment(t, "YYYY-MM-DD").format("YYYY-MM-DD");
    setSunDate(newDate);
  }, [currentWeatherInformation, setSunDate]);

  return (
    <div className="z-30 fixed top-0 bottom-0 left-0 right-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-scroll">
        <div className="flex flex-col justify-center items-center relative min-h-full">
          <div className="mx-auto w-5/6 h-auto relative px-24 py-16 bg-green-200">
            <>
              <div
                className="absolute top-2 right-2"
                onClick={() => handleClose()}
              >
                <CloseIcon sx={{ fontSize: 40, cursor: "pointer" }} />
              </div>
              <div className="mb-8 text-2xl capitalize">
                {currentDayInformation} {currentDateInformation}.{" "}
                {currentMonthInformation}
              </div>
              <div className="flex pb-2 border-b-2 border-gray-400">
                {singleOneWeekCategoryTitle.map((item, index) => (
                  <div className="w-1/6" key={index}>
                    {item.title}
                  </div>
                ))}
              </div>
              {currentWeatherInformation.map((item, index) => {
                var t = new Date(item.time);
                var measureDateSaying = moment(t, "hh").format("HH");
                var icons = "";
                if (!item.data.next_1_hours) {
                  icons = item.data.next_6_hours.summary.symbol_code;
                  var endTime = "";
                  if (measureDateSaying === "02") {
                    endTime = "08";
                  }
                  if (measureDateSaying === "08") {
                    endTime = "14";
                  }
                  if (measureDateSaying === "14") {
                    endTime = "20";
                  }
                  if (measureDateSaying === "20") {
                    endTime = "02";
                  }
                } else {
                  icons = item.data.next_1_hours.summary.symbol_code;
                  endTime = "";
                }
                var windDirection =
                  item.data.instant.details.wind_from_direction;
                var windSpeed = item.data.instant.details.wind_speed.toFixed(0);
                return (
                  <div
                    className="flex items-center border-b-2 border-gray-400"
                    key={index}
                  >
                    <div className="w-1/6 flex">
                      <div>{measureDateSaying}</div>
                      {endTime && (
                        <>
                          <span className="mx-1">-</span>
                          <div>{endTime}</div>
                        </>
                      )}
                    </div>
                    <div className="w-1/6">
                      <IconHelper icons={icons} />
                    </div>
                    <div className="w-1/6">
                      {item.data.instant.details.air_temperature
                        ? item.data.instant.details.air_temperature.toFixed(0)
                        : null}
                      °
                    </div>
                    {item.data.next_1_hours ? (
                      item.data.next_1_hours.details.precipitation_amount_min >
                        0 ||
                      item.data.next_1_hours.details.precipitation_amount_max >
                        0 ? (
                        <div className="w-1/6 flex">
                          <div>
                            {item.data.next_1_hours.details
                              .precipitation_amount_min
                              ? item.data.next_1_hours.details.precipitation_amount_min.toFixed(
                                  1
                                )
                              : 0}
                          </div>
                          <span className="mx-1">-</span>
                          <div>
                            {item.data.next_1_hours.details
                              .precipitation_amount_max
                              ? item.data.next_1_hours.details.precipitation_amount_max.toFixed(
                                  1
                                )
                              : 0}
                          </div>
                        </div>
                      ) : (
                        <div className="w-1/6"></div>
                      )
                    ) : item.data.next_6_hours.details
                        .precipitation_amount_min > 0 ||
                      item.data.next_6_hours.details.precipitation_amount_max >
                        0 ? (
                      <div className="w-1/6 flex">
                        <div>
                          {item.data.next_6_hours.details
                            .precipitation_amount_min
                            ? item.data.next_6_hours.details.precipitation_amount_min.toFixed(
                                1
                              )
                            : 0}
                        </div>
                        <span className="mx-1">-</span>
                        <div>
                          {item.data.next_6_hours.details
                            .precipitation_amount_max
                            ? item.data.next_6_hours.details.precipitation_amount_max.toFixed(
                                1
                              )
                            : 0}
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/6"></div>
                    )}
                    <div className="w-1/6 flex">
                      <div>
                        {item.data.instant.details.wind_speed
                          ? item.data.instant.details.wind_speed.toFixed(0)
                          : 0}
                      </div>
                      <span className="ml-1">
                        (
                        {item.data.instant.details.wind_speed_of_gust
                          ? item.data.instant.details.wind_speed_of_gust.toFixed(
                              0
                            )
                          : 0}
                        )
                      </span>
                      <div
                        className="ml-1 self-baseline"
                        style={{ transform: `rotate(${windDirection}deg)` }}
                      >
                        <SouthIcon fontSize="medium" />
                      </div>
                    </div>
                    <div className="w-1/6">
                      <WindDescription
                        windDirection={windDirection}
                        windSpeed={windSpeed}
                      />
                    </div>
                  </div>
                );
              })}
            </>
            <div className="flex justify-center mt-8">
              <div className="mx-4">
                <div className="mb-2">Soluppgång</div>
                <div className="flex items-center">
                  <img className="w-8 h-8" src={Sunrise} alt="hej" />
                  <div>{sunrise}</div>
                </div>
              </div>
              <div className="mx-4">
                <div className="mb-2">Solnedgång</div>
                <div className="flex items-center">
                  <img className="w-8 h-8" src={Sunset} alt="hej" />
                  <div>{sunset}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOneWeekWeather;
