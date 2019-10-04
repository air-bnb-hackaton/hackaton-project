import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import ListingPage from './components/ListingPage'
import DetailsPage from './components/DetailsPage';


function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/" component={HomePage} />
      <h1>  complete and utter sabotage</h1>
        <Route path="/listing" component={ListingPage} />
        <h1>Elba is the most amazing person evaaaaa</h1>
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
