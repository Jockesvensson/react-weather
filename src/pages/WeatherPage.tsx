import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { tempTitle } from "../services/tempTitle";
import { feelsLikeTitle } from "../services/feelsLikeTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const WeatherPage = () => {
  const { state } = useLocation();
  const { item }: any = state;
  const navigate = useNavigate();

  var t = new Date(item.sunrise * 1000);
  var sunrise = moment(t, "hh:mm").format("HH:mm");
  var tt = new Date(item.sunset * 1000);
  var sunset = moment(tt, "hh:mm").format("HH:mm");
  var day = moment(t, "dddd").format("dddd");

  const [UVIName, setUVIName] = useState<string>("");

  useEffect(() => {
    if (item.uvi > 11) {
      setUVIName("Extremt");
    }

    if (item.uvi < 11 && item.uvi > 8) {
      setUVIName("Väldigt högt");
    }

    if (item.uvi < 8 && item.uvi > 6) {
      setUVIName("Högt");
    }

    if (item.uvi < 6 && item.uvi > 3) {
      setUVIName("Måttligt");
    }

    if (item.uvi < 3) {
      setUVIName("Lågt");
    }
  }, [item.uvi]);

  const handleGoBack = () => {
    navigate("/");
  };

  console.log(item);

  return (
    <>
      <div className="mt-8">
        <ArrowBackIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "white" }}
          onClick={() => handleGoBack()}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-5xl text-white capitalize">{day}</div>
          {item.weather.map((item, index) => (
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
            />
          ))}
        </div>
      </div>
      <div className="text-xl text-white">
        Risk för regn {item.rain ? item.rain.toFixed(0) : 0} %
      </div>
      <div className="flex flex-col mt-4 py-4 px-4 small:px-8 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
        <div className="flex flex-wrap">
          {tempTitle.map((item, index) => (
            <div className="w-1/6 text-sm small:text-xl" key={index}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.day ? item.temp.day.toFixed(0) : ""}°
          </div>
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.eve ? item.temp.eve.toFixed(0) : ""}°
          </div>
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.max ? item.temp.max.toFixed(0) : ""}°
          </div>
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.min ? item.temp.max.toFixed(0) : ""}°
          </div>
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.night ? item.temp.night.toFixed(0) : ""}°
          </div>
          <div className="w-1/6 text-sm small:text-xl">
            {item.temp.morn ? item.temp.morn.toFixed(0) : ""}°
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 py-4 px-4 small:px-8 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
        <div className="flex">
          {feelsLikeTitle.map((item, index) => (
            <div className="w-1/4 xsm:w-1/6 text-sm small:text-xl" key={index}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="w-1/4 xsm:w-1/6 text-sm small:text-xl">
            {item.feels_like.day ? item.feels_like.day.toFixed(0) : ""}°
          </div>
          <div className="w-1/4 xsm:w-1/6 text-sm small:text-xl">
            {item.feels_like.eve ? item.feels_like.eve.toFixed(0) : ""}°
          </div>
          <div className="w-1/4 xsm:w-1/6 text-sm small:text-xl">
            {item.feels_like.night ? item.feels_like.night.toFixed(0) : ""}°
          </div>
          <div className="w-1/4 xsm:w-1/6 text-sm small:text-xl">
            {item.feels_like.morn ? item.feels_like.morn.toFixed(0) : ""}°
          </div>
        </div>
      </div>
      <div className="flex w-full mt-4 py-4 px-8 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
        <div className="flex flex-col items-center w-1/2">
          <div>Soluppgång</div>
          <div>{sunrise}</div>
          <div className="mt-12 relative w-28 h-2 bg-orange-100 rounded-full">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-orange-100 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-yellow-400 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-orange-400 rounded-t-full"></div>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div>Solnedgång</div>
          <div>{sunset}</div>
          <div className="mt-12 relative w-28 h-2 bg-orange-100 rounded-full">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-orange-100 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-pink-300 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-pink-500 rounded-t-full"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-4 mb-12 py-4 bg-sky-300 border-sky-200 border-2 rounded-3xl text-white">
        <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
          <div className="relative w-8 h-8 bg-yellow-400 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-200 rounded-full"></div>
          </div>
          <div className="mt-2">UV-index</div>
          <div>{UVIName}</div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 border-r-2 border-white">
          <div>
            <AirIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="mt-2">Vind</div>
          <div>
            {item.wind_speed ? (item.wind_speed * 3.6).toFixed(0) : null} km/h
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <div>
            <OpacityIcon sx={{ color: "blue", fontSize: 40 }} />
          </div>
          <div className="mt-2">Luftfukt.</div>
          <div>{item.humidity} %</div>
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
