import React from "react";
import GaugeChart from "react-gauge-chart";

function Guage(props) {
  return (
    <div>
      <GaugeChart
        id="gauge-chart1"
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        needleColor="Black"
        nrOfLevels={20}
        percent={props.percent}
        textColor="red"
      />
    </div>
  );
}

export default Guage;
