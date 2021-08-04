import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortingVisualizer from "./sorting/SortingVisualizer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortingVisualizer></SortingVisualizer>
      </div>
    );
  }
}

export default App;
