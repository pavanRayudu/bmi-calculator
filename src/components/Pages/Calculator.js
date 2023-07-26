import React, { useState } from "react";
import Metric from "../CalculatorComponents/Metric";
import Standard from "../CalculatorComponents/Standard";
import "./Calculator.css";

const Content = () => {
  const [unitType, setUnitType] = useState("");
  const [color, setColor] = useState("white");
  const [color2, setColor2] = useState("rgb(95, 23, 154)");
  const clickHandler = () => {
    setUnitType('metric')
    setColor("white");
    setColor2("rgb(95, 23, 154)");
  };
  const clickHandler2 = () => {
    setUnitType('standard')
    setColor("rgb(95, 23, 154)");
    setColor2("white");
  };

  return (
    <div className="content">
      <div className="buttons">
        <button onClick={clickHandler} style={{backgroundColor: color, color:color2}}>Metric</button>
        <button onClick={clickHandler2} style={{backgroundColor:color2, color:color}}>Standard</button>
      </div>

      <div className="card">
        {unitType === "standard" ? <Standard /> :<Metric /> }
      </div>

    </div>

  );
};

export default Content;
