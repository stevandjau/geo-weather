export const parseWeatherData = (data) => {
	return {
		...data.main,
		overall: data.weather[0].main,
	};
};
