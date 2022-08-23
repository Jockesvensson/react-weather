import React from "react";

const SingleDayWeatherRain = ({ item }) => {
  return (
    <>
      {!item.data.next_1_hours && !item.data.next_6_hours ? (
        item.data.instant ? null : null
      ) : item.data.next_1_hours ? (
        item.data.next_1_hours.details.precipitation_amount_min > 0 ||
        item.data.next_1_hours.details.precipitation_amount_max > 0 ? (
          <div className="singleoneweek-item-rain flex text-blue-600">
            <p>
              {item.data.next_1_hours.details.precipitation_amount_min
                ? item.data.next_1_hours.details.precipitation_amount_min.toFixed(
                    1
                  )
                : 0}
            </p>
            <span className="mx-1">-</span>
            <p>
              {item.data.next_1_hours.details.precipitation_amount_max
                ? item.data.next_1_hours.details.precipitation_amount_max.toFixed(
                    1
                  )
                : 0}
            </p>
          </div>
        ) : item.data.next_1_hours.details.precipitation_amount > 0 ? (
          <div className="singleoneweek-item-rain flex text-blue-600">
            <p className="">
              {item.data.next_1_hours.details.precipitation_amount.toFixed(1)}
            </p>
          </div>
        ) : (
          <p className=""></p>
        )
      ) : item.data.next_6_hours.details.precipitation_amount_min > 0 ||
        item.data.next_6_hours.details.precipitation_amount_max > 0 ? (
        <div className="singleoneweek-item-rain flex text-blue-600">
          <p>
            {item.data.next_6_hours.details.precipitation_amount_min
              ? item.data.next_6_hours.details.precipitation_amount_min.toFixed(
                  1
                )
              : 0}
          </p>
          <span className="mx-1">-</span>
          <p>
            {item.data.next_6_hours.details.precipitation_amount_max
              ? item.data.next_6_hours.details.precipitation_amount_max.toFixed(
                  1
                )
              : 0}
          </p>
        </div>
      ) : item.data.next_6_hours.details.precipitation_amount > 0 ? (
        <div className="singleoneweek-item-rain flex text-blue-600">
          <p className="">
            {item.data.next_6_hours.details.precipitation_amount.toFixed(1)}
          </p>
        </div>
      ) : (
        <p className=""></p>
      )}
    </>
  );
};

export default SingleDayWeatherRain;
