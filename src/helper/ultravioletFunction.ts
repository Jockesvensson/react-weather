export const ultravioletFunction = (currentWeatherUVI, setUVIName) => {
    if (currentWeatherUVI > 11) {
        setUVIName("Extremt");
    }

    if (
    currentWeatherUVI < 11 &&
    currentWeatherUVI > 8
    ) {
        setUVIName("Väldigt högt");
    }

    if (
    currentWeatherUVI < 8 &&
    currentWeatherUVI > 6
    ) {
        setUVIName("Högt");
    }

    if (
    currentWeatherUVI < 6 &&
    currentWeatherUVI > 3
    ) {
        setUVIName("Måttligt");
    }

    if (currentWeatherUVI < 3) {
        setUVIName("Lågt");
    }
}