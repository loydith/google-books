import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import Jumbotron from "./components/Jumbotron";
import { BookList, BookListItem } from "./components/BookList";
import API from "./utils/API";

// import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img className="App-logo"/> */}
          <h2>(React) Google Books Search</h2>
          <h3>Search for and Save Books of Interest</h3>
        </div>
        
      </div>
    );
  }
}

export default App;
