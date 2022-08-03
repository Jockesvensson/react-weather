import React, { useEffect, useState } from "react";

const WindDescription = ({ windDirection, windSpeed }) => {
  const [windSpeedName, setWindSeedName] = useState<string>("Svag");

  useEffect(() => {
    if (windSpeed > 3) {
      setWindSeedName("Lätt");
    }
    if (windSpeed >= 6) {
      setWindSeedName("Måttlig");
    }
  }, [windSpeed]);

  return (
    <>
      {windDirection < 22.5 && <div>{windSpeedName} vind från nord</div>}
      {windDirection > 337.6 && <div>{windSpeedName} vind från nord</div>}
      {windDirection > 22.6 && windDirection < 67.5 && (
        <div>{windSpeedName} vind från nordöst</div>
      )}
      {windDirection > 67.6 && windDirection < 112.5 && (
        <div>{windSpeedName} vind från öst</div>
      )}
      {windDirection > 112.6 && windDirection < 157.5 && (
        <div>{windSpeedName} vind från sydöst</div>
      )}
      {windDirection > 157.6 && windDirection < 202.5 && (
        <div>{windSpeedName} vind från syd</div>
      )}
      {windDirection > 202.6 && windDirection < 247.5 && (
        <div>{windSpeedName} vind från sydväst</div>
      )}
      {windDirection > 247.6 && windDirection < 292.5 && (
        <div>{windSpeedName} vind från väst</div>
      )}
      {windDirection > 292.6 && windDirection < 337.5 && (
        <div>{windSpeedName} vind från nordväst</div>
      )}
    </>
  );
};

export default WindDescription;
