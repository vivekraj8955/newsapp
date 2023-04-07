import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import './App.css'
export default class App extends Component {
  c = "john";
  render() {
    return (
      <div className="container App">
       <Navbar></Navbar>
       <News></News>
      </div>
    );
  }
}
