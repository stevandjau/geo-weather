//import react
import React from "react";

//import dependencies
import { Container, Row, Col } from "reactstrap";
import Proptypes from "prop-types";

//import css file
import "./styles.scss";

//import utils
import cn from "../../utils/bem-cn";
import * as helper from "../../utils/helper";

//import weather icons
import Sunny from "../../components/icons/Sunny";
import Cloudy from "../../components/icons/Cloudy";

//define classname and bem func
const className = "weather-info";
const el = (element, mod) => cn(className, element, mod);

const WeatherInfo = ({ data }) => {
	const {
		temp,
		name,
		humidity,
		overall,
		pressure,
		temp_max,
		temp_min,
	} = data;

	const renderWeatherIcon = () => {
		console.log(overall);
		switch (overall) {
			case "Clear":
				return <Sunny />;
			default:
				return <Cloudy />;
		}
	};

	return (
		<Container className={className}>
			<Row>
				<Col xs={12} className={el("header")}>
					<h4>Current weather in {name}</h4>
				</Col>
			</Row>
			<Row>
				<Col xs={12} className={el("weather-icon")}>
					{renderWeatherIcon()}
					{`${temp ? helper.convertKtoC(temp) : "-"} °C`}
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={6}>
					<span>Minimum Temperature: </span>
					<span>
						{temp_min ? helper.convertKtoC(temp_min) : "-"}°C
					</span>
				</Col>
				<Col xs={12} lg={6}>
					<span>Pressure: </span>
					<span>{pressure || "-"} mb</span>
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={6}>
					<span>Maximum Temperature: </span>
					<span>
						{temp_max ? helper.convertKtoC(temp_max) : "-"}°C
					</span>
				</Col>
				<Col xs={12} lg={6}>
					<span>Humidity: </span>
					<span>{humidity || "-"} %</span>
				</Col>
			</Row>
		</Container>
	);
};

WeatherInfo.propTypes = {
	data: Proptypes.object,
};

export default WeatherInfo;
