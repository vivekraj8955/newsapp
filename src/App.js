import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";

export default class App extends Component {
  c = "john";
  render() {
    return (
      <div>
       <Navbar></Navbar>
       <News></News>
      </div>
    );
  }
}
