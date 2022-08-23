import React from "react";
import IconHelperStartWeatherInfo from "./IconHelpers/IconHelperStartWeatherInfo";
import SouthIcon from "@mui/icons-material/South";
import Temperature from "../assets/temperature.png";
import Umbrella from "../assets/umbrella.png";
import AirIcon from "@mui/icons-material/Air";

const StartWeatherInfoItem = ({
  weather,
  cityData,
  timeForCurrentLocation,
  countryData,
}) => {
  return (
    <div className="relative px-6 xsmall:px-12 xmd:px-24 pt-4 xsmall:pt-8 pb-4 xsmall:pb-12 mb-4 bg-white text-black border-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 xsmall:mb-6 text-xl xsmall:text-3xl lg:text-4xl">
        <div className="flex mb-0 xsmall:mb-2 sm:mb-0">
          <h1>{cityData.name}</h1>
          <span className="mr-2">,</span>
          <h1>{countryData}</h1>
        </div>
        <div className="flex">
          <h1 className="capitalize">{timeForCurrentLocation}</h1>
        </div>
      </div>
      <div className="flex items-center w-full">
        <div className="absolute top-3 right-2 xsm:relative">
          <IconHelperStartWeatherInfo
            icons={weather.data.next_1_hours.summary.symbol_code}
          />
        </div>
        <div className="flex flex-col xmd:flex-row justify-between w-full">
          <div className="mt-4 flex items-end sm:ml-9">
            <img
              className="w-7 h-7 mb-1 mr-2"
              src={Temperature}
              alt="Temperature"
            />
            <h1 className="mr-2 text-2xl xsm:text-4xl lg:text-5xl text-red-500">
              {weather.data.instant.details.air_temperature_percentile_90
                ? weather.data.instant.details.air_temperature_percentile_90
                  ? weather.data.instant.details.air_temperature_percentile_90.toFixed(
                      0
                    )
                  : 0
                : weather.data.instant.details.air_temperature
                ? weather.data.instant.details.air_temperature.toFixed(0)
                : 0}
              °
            </h1>
            <p>Känns som</p>{" "}
            <p className="ml-1 text-red-500">
              {weather.data.instant.details.air_temperature
                ? weather.data.instant.details.air_temperature.toFixed(0)
                : 0}
              °
            </p>
          </div>
          <div className="flex items-end sm:ml-9 text-blue-600">
            <div className="mt-2 xsm:mt-4 flex items-end">
              <img
                className="w-7 h-7 mb-1 mr-2"
                src={Umbrella}
                alt="Umbrella"
              />
              <h1 className="mr-2 text-2xl xsm:text-4xl lg:text-5xl">
                {weather.data.next_1_hours.details.precipitation_amount
                  ? weather.data.next_1_hours.details.precipitation_amount.toFixed(
                      0
                    )
                  : 0}{" "}
              </h1>
              <p>mm</p>
            </div>
          </div>
          <div className="flex items-end sm:ml-9">
            <div className="mt-2 xsm:mt-4 flex items-end">
              <AirIcon sx={{ fontSize: 30, marginRight: "0.5rem" }} />
              <h1 className="mr-1 text-2xl xsm:text-4xl lg:text-5xl">
                {weather.data.instant.details.wind_speed
                  ? weather.data.instant.details.wind_speed.toFixed(0)
                  : 0}
              </h1>
              <p>
                (
                {weather.data.instant.details.wind_speed_of_gust
                  ? weather.data.instant.details.wind_speed_of_gust.toFixed(0)
                  : 0}
                ) m/s
              </p>
              <div
                className="ml-1 self-end"
                style={{
                  transform: `rotate(${weather.data.instant.details.wind_from_direction}deg)`,
                }}
              >
                <SouthIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWeatherInfoItem;
