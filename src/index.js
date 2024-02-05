import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from"./Component/Navbar"
import Carousel from "./Component/Carousel";
import Card from "./Component/Card";
import Card1 from "./Component/Card1";
ReactDOM.render(
  <>
  <Navbar/>
  <Carousel/>
  <br />
  <Card/>
  <br />
  <Card1/>
  </>,
  document.getElementById('root')
)