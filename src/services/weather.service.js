import axios from "../utils/axios";

//API key is usually stored on the env files but for demo purpose I have it here.
const key = "5e864d26fcf2c5d47652306458a12e7d";

export const getCurrentWeather = (city) => {
	return axios.get(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
	);
};
