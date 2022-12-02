import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph3({
  dataHours = [],
  estufa1Temp = [],
  estufa1Hum = [],
}) {

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Dados do Último Registro',
    },
  },
};

const labels = ['Estufa 1', 'Estufa 2', 'Estufa 3', 'Estufa 4'];

const data = {
  labels,
  datasets: [
    {
      label: 'Temperatura ºC',
      data: estufa1Temp,
      backgroundColor: 'rgba(93, 111, 21, 0.8)',
    },
    {
      label: 'Umidade (%)',
      data: estufa1Hum,
      backgroundColor: 'rgba(43, 59, 21, 0.8)',
    },
  ],
};

{
  return (
  <Bar options={options} data={data} />
  )
}
}
