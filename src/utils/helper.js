//parse data from response to store to state
export const parseWeatherData = (data) => {
	return {
		...data.main,
		overall: data.weather[0].main,
		name: data.name,
	};
};

//conver kelvin to celcius
export const convertKtoC = (k) => Math.round(k - 273.15);
