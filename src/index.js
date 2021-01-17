import React from "react";
import ReactDOM from "react-dom";
import * as Calculate from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <div>
    <ul>
      <li>Addition : {Calculate.Add(2, 3)}</li>
      <li>Substraction : {Calculate.Substract(2, 3)}</li>
      <li>Multiplication : {Calculate.Multiply(2, 3)}</li>
      <li>Division : {Calculate.Divide(2, 3)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
