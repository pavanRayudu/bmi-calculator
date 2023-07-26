import "./ResultCard.css";

const ResultCard = ({ result }) => {
  let value = result;
  let properties = {
    text: "",
    textColor: "",
  };
  if (value >= 30) {
    properties = {
      text: "Obesity",
      textColor: "brown",
    };
  } else if (value >= 25 && value < 30) {
    properties = {
      text: "Overweight",
      textColor: "red",
    };
  } else if (value >= 18.5 && value < 25) {
    properties = {
      text: "Healthy weight",
      textColor: "green",
    };
  } else if (value < 18.5 && value > 0) {
    properties = {
      text: "Underweight",
      textColor: "rgb(188, 188, 71)",
    };
  } else {
    properties = {};
  }

  return (
    <div className="result-card">
      <div className="result">
        <div className="result-value">
          <span>Your BMI </span>
          <span style={{ color: properties.textColor }}>{value}</span>
        </div>
        <span id="classify">{properties.text}</span>
      </div>

      <div className="scale">
        <div className="scale-slider">
          <div
            className="scale-ele"
            style={{
              width: value <= 50 ? `${value * 2.5}%` : "5%",
              backgroundColor: properties.textColor,
            }}
          ></div>
        </div>

        <div className="numbers">
          <span>0</span>
          <span
            style={{
              left: `${18.5 * 2.2}%`,
              background: value<18.5?'rgb(188, 188, 71)':'green'
            }}
          >
            18
          </span>
          <span
            style={{
              left: `${25 * 2.4}%`,
              background: value<25?'green':'red'
            }}
          >
            25
          </span>
          <span
            style={{
              left: `${30 * 2.4}%`,
              background: value<30?'red':'brown'
            }}
          >
            30
          </span>
          <span
            style={{
              right: 0,
              background: 'brown'


            }}
          >
            40
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
