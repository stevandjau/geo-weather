import React, { useState, useEffect } from "react";

//import dependencies
import { Container, Row, Col } from "reactstrap";

//import css file
import "./App.css";

//import components
import CityInput from "../components/CityInput";

//import utils
import cn from "./utils/bem-cn";

//import services
import * as weatherService from "../services/weather.service";

//define classname and bem func
const className = "city-input";
const el = (element, mod) => cn(className, element, mod);

const Weather = () => {
	//declare state to track inputs, error and weather data
	const [city, setCity] = useState("");
	const [data, setData] = useState(null);
	const [error, setError] = useState("");

	//function to fetch data
	const onSubmit = () => {
		weatherService
			.getCurrentWeather(city)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container className={className}>
			{data ? (
				<Row>
					<Col xs={12}>
						<CityInput
							city={city}
							setCity={setCity}
							error={error}
							setError={setError}
							onSubmit={() => onSubmit()}
						/>
					</Col>
				</Row>
			) : (
				<Row>
					<Col xs={12} md={4}>
						<CityInput
							city={city}
							setCity={setCity}
							error={error}
							setError={setError}
						/>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Weather;
