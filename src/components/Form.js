import React from "react";
  
const onChangeHandler = (text) => {
    if (text.length > 0) {
      console.log(text);
   /* matches = suggestions.filter(suggestion => {
    const regex = new RegExp(`${text}`, "gi");
	console.log(suggestion.LocalizedName.match(regex));
    return suggestion.LocalizedName.match(regex)
    })*/
  } 
	  
  };

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..." onChange={e => onChangeHandler(e.target.value)}/>
		<select name="units" >
			<option value="metric" selected>Metric System</option>
			<option value="imperial">Imperial System</option>			
    	</select>
		<button>Get Weather</button>
	</form>
);

export default Form;