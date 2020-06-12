import axios from "axios";

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	function (error) {
		//allow error to be caught
		return Promise.reject(error.response);
	},
);

export default axios;
