import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Graph2({
    dataHours = [],
    dataTemperature = [],
    dataHumidity = []
}) {
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Temperatura x Tempo"
    }
  },
  scales: {
    y: {
        suggestedMin: 20,
        suggestedMax: 40,
        ticks: {
          stepSize: 10 // this worked as expected
          }
    }
}
};

const labels = dataHours

const data = {
  labels,
  datasets: [
    {
      label: "Temperatura (ºC)",
      data: dataTemperature,
      borderColor: "#5D6F15",
      borderWidth: 5,
      backgroundColor: "#5D6F15"
    },
  ]
};

{
  return (
  <Line options={options} data={data} />
  )
}
}
