export const customCssFunction = (timeNow, setCustomClass) => {
    if (timeNow > "08:00") {
        document.body.style.backgroundColor = "rgb(13, 165, 206)";
        setCustomClass("container-bg-day-item");
      }
      if (timeNow > "20:00" || timeNow < "08:00") {
        document.body.style.backgroundColor = "rgb(54, 50, 50)";
        setCustomClass("container-bg-night-item");
      }
}

export const customCssContainerFunction = (timeNow, setCustomClass) => {
    if (timeNow > "08:00") {
        document.body.style.backgroundColor = "rgb(13, 165, 206)";
        setCustomClass("container-bg-day");
      }
      if (timeNow > "20:00" || timeNow < "06:00") {
        document.body.style.backgroundColor = "rgb(54, 50, 50)";
        setCustomClass("container-bg-night");
      }
}