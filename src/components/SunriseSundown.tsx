import React from "react";
import moment from "moment";

const SunriseSundown = ({ todaySunriseData, todaySunsetData }) => {
  var t = new Date(todaySunriseData);
  var sunrise = moment(t, "hh:mm").format("HH:mm");
  var tt = new Date(todaySunsetData);
  var sunset = moment(tt, "hh:mm").format("HH:mm");

  return (
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
  );
};

export default SunriseSundown;
