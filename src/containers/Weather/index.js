import React, { useState, useEffect } from "react";

//import dependencies
import { Container, Row, Col } from "reactstrap";

//import css file

//import components
import CityInput from "../../components/CityInput";
//import WeatherInfo from "../../components/WeatherInfo";

//import services
import * as weatherService from "../../services/weather.service";

//import utils
import * as helper from "../../utils/helper";

const className = "city-input";

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
						setError("Country entered is not found");
						break;
					default:
						setError("Unexpected error occured. Please try again");
						break;
				}
			});
	};
	console.log(data);

	return (
		<Container className={className}>
			{data ? (
				<Row>
					<Col xs={12} md={4}>
						<CityInput
							city={city}
							setCity={setCity}
							error={error}
							setError={setError}
							submitForm={() => submitForm()}
						/>
					</Col>
					<Col xs={12} md={8}>
						{/* //<WeatherInfo data={data} /> */}
					</Col>
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
