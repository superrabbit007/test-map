import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';


const style = {  
  width: '100%',
  height: '100%',
  position: 'absolute'
};

class App extends Component {
  render() {
    return (
      <div id="container">
        <nav>
          <div>
            <h2>ShenZhen Locations</h2>
            <div id ="searchBox">
              <input 
                type="text" 
                placeholder="Station location"/>
              <button className="filter">Filter</button>
            </div>
          </div>
        </nav>
        <div className="main">        
          <div id="menu">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="map" className="map">
            <Map google={this.props.google} zoom={14} style={style}></Map>
          </div>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(App);