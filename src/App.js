//import react
import React from "react";

//import css file
import "./App.css";

//import containers
import Weather from "./containers/Weather";

//define classname and bem func
const className = "geo-weather";

const App = () => (
	<div className={className}>
		<Weather />
	</div>
);

export default App;
