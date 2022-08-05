import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/sv";
import CloseIcon from "@mui/icons-material/Close";
import IconHelper from "./IconHelpers/IconHelper";
import SouthIcon from "@mui/icons-material/South";
import WindDescription from "./windDescription/WindDescription";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";

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
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const date = currentWeatherInformation[1].time;
    var t = new Date(date);
    var newDate = moment(t, "YYYY-MM-DD").format("YYYY-MM-DD");
    setSunDate(newDate);
  }, [currentWeatherInformation, setSunDate]);

  return (
    <div className="z-30 fixed top-0 bottom-0 left-0 right-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 small:py-4">
        <div className="flex flex-col justify-center items-center relative min-h-full">
          <div className="mx-auto max-h-screen overflow-y-auto w-full sm:w-11/12 lg:max-w-6xl h-auto relative px-4 small:px-12 lg:px-20 pt-6 pb-10 small:pt-6 small:pb-6 bg-white small:rounded-3xl">
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
                    className="singleoneweek-item-container border-b-2 border-gray-400"
                    key={index}
                  >
                    <div className="singleoneweek-item-time self-center">
                      <div className="flex text-xs">
                        <div>{measureDateSaying}</div>
                        {endTime && (
                          <>
                            <span className="mx-1">-</span>
                            <div>{endTime}</div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="singleoneweek-item-weather">
                      <IconHelper icons={icons} />
                    </div>
                    <div className="singleoneweek-item-forecast">
                      <div className="singleoneweek-item-temp text-red-500">
                        {item.data.instant.details.air_temperature
                          ? item.data.instant.details.air_temperature.toFixed(0)
                          : null}
                        °
                      </div>
                      {item.data.next_1_hours ? (
                        item.data.next_1_hours.details
                          .precipitation_amount_min > 0 ||
                        item.data.next_1_hours.details
                          .precipitation_amount_max > 0 ? (
                          <div className="singleoneweek-item-rain flex text-blue-600">
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
                          <div className=""></div>
                        )
                      ) : item.data.next_6_hours.details
                          .precipitation_amount_min > 0 ||
                        item.data.next_6_hours.details
                          .precipitation_amount_max > 0 ? (
                        <div className="singleoneweek-item-rain flex text-blue-600">
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
                        <div className=""></div>
                      )}
                      <div className="singleoneweek-item-wind flex">
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
                    </div>
                    <div className="singleoneweek-item-windDesc">
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
