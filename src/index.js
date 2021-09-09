//import the necessary files
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter,Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home  from './components/home';





import './css/index.css';

//create the main class for displaying the recipes
class PwcWeatherApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',      
    }  
  
  }
 
  
  
  render() {
    return(
    <div>
        <Header />
        <HashRouter basename="/#">
            <Switch>
                <Route exact path="/"  component={Home} />  
            </Switch>
        </HashRouter>       
      </div> 

    );
  }
};

ReactDOM.render(<PwcWeatherApi />, document.getElementById('app'));