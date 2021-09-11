import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const PieChart: React.FC = () => {
  const data = useSelector(selectData);
  const motality =
    data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

  const pieChart = data && (
    <Doughnut
      data={{
        labels: ["感染者数", "死者数"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [
              data.confirmed.value,
              data.deaths.value,
            ],
            hoverBackgroundColor: ["#36A2EB", "#FF6384"],
            borderColor: ["transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: { position: "bottom", labels: { boxWidth: 15 } },
      }}
    />
  );
  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          致死率 {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  );
};

export default PieChart;
