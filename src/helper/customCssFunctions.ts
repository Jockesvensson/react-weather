export const customCssFunction = (timeNow, setCustomClass) => {
  if (timeNow > "08:00") {
    document.body.style.backgroundColor = "#f5f6f7";
    setCustomClass("container-bg-day-item");
  }
  if (timeNow > "22:00" || timeNow < "08:00") {
    document.body.style.backgroundColor = "rgb(95, 95, 95)";
    setCustomClass("container-bg-night-item");
  }
};

export const customCssContainerFunction = (timeNow, setCustomClass) => {
  if (timeNow > "08:00") {
    document.body.style.backgroundColor = "#f5f6f7";
    setCustomClass("container-bg-day");
  }
  if (timeNow > "22:00" || timeNow < "06:00") {
    document.body.style.backgroundColor = "rgb(95, 95, 95)";
    setCustomClass("container-bg-night");
  }
};
