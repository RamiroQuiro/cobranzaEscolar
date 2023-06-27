import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Pago Mensual',
      data: labels.map(() => getRandomInt(20)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#F2913D80',
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
