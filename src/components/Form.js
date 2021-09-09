import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<select name="units" >
			<option value="metric" selected>Metric System</option>
			<option value="imperial">Imperial System</option>			
    	</select>
		<button>Get Weather</button>
	</form>
);

export default Form;