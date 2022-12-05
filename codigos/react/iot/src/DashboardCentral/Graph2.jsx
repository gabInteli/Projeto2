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
      text: "Umidade x Tempo"
    }
  },
  scales: {
    y: {
        suggestedMin: 50,
        suggestedMax: 100,
        ticks: {
            stepSize: 10 // this worked as expected
            }
          },
    }
}


const labels = dataHours

const data = {
  labels,
  datasets: [
    {
      label: "Umidade (%)",
      data: dataHumidity,
      borderColor: "#2B3B15",
      borderWidth: 5,
      backgroundColor: "#2B3B15",
    }
  ]
};

{
  return (
  <Line options={options} data={data} />
  )
}
}
