import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const initialValues = {
    unit: props.name,
    height: "",
    height2: "",
    weight: "",
  };
  const [inputDetails, setInputDetails] = useState(initialValues);

  const heightChangeHandler = (e) => {
    setInputDetails({
      ...inputDetails,
      height: e.target.value,
    });
  };
  const height2ChangeHandler = (e) => {
    setInputDetails({
      ...inputDetails,
      height2: e.target.value,
    });
  };
  const weightChangeHandler = (e) => {
    setInputDetails({
      ...inputDetails,
      weight: e.target.value,
    });
  };
  
  const calculateBmi = (values) => {
    // console.log(values.unit);
    let result;
    if (values.unit === "metric") {
      let denominator = Math.pow(values.height / 100, 2);
      result = values.weight / denominator;
      return result.toFixed(2);
    } else {
      let height = values.height * 12 + parseInt(values.height2);
      let denominator = Math.pow(height, 2);
      result = 703 * (values.weight / denominator);
      return result.toFixed(2);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const result = calculateBmi(inputDetails);
    props.onResult(result)
  };
  const resetHandler = () => {
    setInputDetails(initialValues);
    const result = calculateBmi(initialValues);
    props.onResult(result)
  };

  return (
    <div>
      <form >
        <div className="inputs">
          <div className="input-element">
            <label>Height</label>
            <div className="height-inputs">
              <input
                type="number"
                required
                onChange={heightChangeHandler}
                value={inputDetails.height}
                placeholder={props.name === "metric" ? "Centimeter" : "Feet"}
              />
              {props.name === "standard" && (
                <input
                  type="number"
                  required
                  value={inputDetails.height2}
                  onChange={height2ChangeHandler}
                  placeholder="Inches"
                />
              )}
            </div>
          </div>
          <div className="input-element">
            <label>Weight</label>
            <input
              type="number"
              label="weight"
              placeholder={props.name === "metric" ? "Kilogram" : "Pounds"}
              required
              value={inputDetails.weight}
              onChange={weightChangeHandler}
            />
          </div>
        </div>
        <div className="controls">
          <button onClick={submitHandler}>Calculate BMI</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
