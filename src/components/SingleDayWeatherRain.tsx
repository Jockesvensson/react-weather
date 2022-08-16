import React from "react";

const SingleDayWeatherRain = ({ item }) => {
  return (
    <>
      {item.data.next_1_hours ? (
        item.data.next_1_hours.details.precipitation_amount_min > 0 ||
        item.data.next_1_hours.details.precipitation_amount_max > 0 ? (
          <div className="singleoneweek-item-rain flex text-blue-600">
            <div>
              {item.data.next_1_hours.details.precipitation_amount_min
                ? item.data.next_1_hours.details.precipitation_amount_min.toFixed(
                    1
                  )
                : 0}
            </div>
            <span className="mx-1">-</span>
            <div>
              {item.data.next_1_hours.details.precipitation_amount_max
                ? item.data.next_1_hours.details.precipitation_amount_max.toFixed(
                    1
                  )
                : 0}
            </div>
          </div>
        ) : (
          <div className=""></div>
        )
      ) : item.data.next_6_hours.details.precipitation_amount_min > 0 ||
        item.data.next_6_hours.details.precipitation_amount_max > 0 ? (
        <div className="singleoneweek-item-rain flex text-blue-600">
          <div>
            {item.data.next_6_hours.details.precipitation_amount_min
              ? item.data.next_6_hours.details.precipitation_amount_min.toFixed(
                  1
                )
              : 0}
          </div>
          <span className="mx-1">-</span>
          <div>
            {item.data.next_6_hours.details.precipitation_amount_max
              ? item.data.next_6_hours.details.precipitation_amount_max.toFixed(
                  1
                )
              : 0}
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default SingleDayWeatherRain;
