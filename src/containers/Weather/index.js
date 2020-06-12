import React, { useState } from "react";

//import dependencies
import { Container, Row, Col } from "reactstrap";

//import components
import CityInput from "../../components/CityInput";
import WeatherInfo from "../../components/WeatherInfo";

//import services
import * as weatherService from "../../services/weather.service";

//import utils
import cn from "../../utils/bem-cn";
import * as helper from "../../utils/helper";

import "./styles.scss";

const className = "weather";
const el = (element, mod) => cn(className, element, mod);

const Weather = () => {
	//declare state to track inputs, error and weather data
	const [city, setCity] = useState("");
	const [data, setData] = useState(null);
	const [error, setError] = useState("");

	//function to fetch data
	const submitForm = () => {
		weatherService
			.getCurrentWeather(city)
			.then((res) => {
				setError("");
				setData(helper.parseWeatherData(res.data));
			})
			.catch((error) => {
				switch (error.status) {
					case 400:
					case 404:
						setError("Location entered is not found");
						break;
					default:
						setError("Unexpected error occured. Please try again");
						break;
				}
				setData(null);
			});
	};

	return (
		<Container className={className}>
			{data ? (
				<Row>
					<Col xs={12} lg={4}>
						<CityInput
							city={city}
							setCity={setCity}
							error={error}
							submitForm={() => submitForm()}
						/>
					</Col>
					{!error && (
						<Col className={el("weather-info")} xs={8}>
							<WeatherInfo data={data} />
						</Col>
					)}
				</Row>
			) : (
				<Row>
					<Col xs={12}>
						<CityInput
							city={city}
							setCity={setCity}
							error={error}
							setError={setError}
							submitForm={() => submitForm()}
						/>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Weather;
