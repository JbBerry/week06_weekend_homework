import React, {Fragment} from 'react';
import MasterBox from './containers/MasterBox'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Help from './Help';

const App = () => {
  return (
      <Router className='App'>
      <Fragment>
        <NavBar/>
        <Route exact path ="/" component = {MasterBox} />
        <Route path = "/help" component = {Help}/>
      </Fragment>
      </Router>
    );
}
export default App;
