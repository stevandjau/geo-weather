//import react
import React from "react";

//import dependencies
import { Container, Row } from "reactstrap";
import Proptypes from "prop-types";

//import css file
import "./styles.scss";

//import components

//import utils
import cn from "../../utils/bem-cn";

//define classname and bem func
const className = "city-input";
const el = (element, mod) => cn(className, element, mod);

const CityInput = ({ city, setCity, error, submitForm }) => {
	return (
		<Container className={className}>
			<Row>
				<div className={el("label")}>Where do you live</div>
			</Row>
			<Row>
				<input
					className={el("input")}
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
			</Row>
			<Row className={el("error-row", error ? "" : "hide")}>
				<div className={el("error")}>{error}</div>
			</Row>
			<Row>
				<button
					className={el("submit")}
					onClick={() => submitForm()}
					disabled={city.length < 3}
				>
					Check Weather!
				</button>
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
