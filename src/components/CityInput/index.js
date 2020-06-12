//import react
import React from "react";

//import dependencies
import { Container, Row, Col } from "reactstrap";
import Proptypes from "prop-types";

//import css file
import "./styles.scss";

//import components

//import utils
import cn from "../../utils/bem-cn";

//define classname and bem func
const className = "city-input";
const el = (element, mod) => cn(className, element, mod);

const CityInput = ({ city, setCity, error, setError, submitForm }) => {
	return (
		<Container className={className}>
			<Row>Where do you live</Row>
			<Row>
				<input value={city} onChange={(e) => setCity(e.target.value)} />
			</Row>
			<Row>
				<button onClick={() => submitForm()}>Check Weather!</button>
			</Row>
		</Container>
	);
};

CityInput.propTypes = {
	city: Proptypes.string,
	setCity: Proptypes.func,
	error: Proptypes.string,
	setError: Proptypes.func,
	submitForm: Proptypes.func,
};

export default CityInput;
