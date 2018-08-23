import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>react 
            <b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
        <footer style={{"textAlign": "center", "marginTop": "20px"}}>
          <p>Copyright 2018 -
            <a className="credits" href="https://ryhad.com">Ryhad, Inc</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
