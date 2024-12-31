import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0, // No data points shown
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: '0% of your goals',
      position:'bottom',
      color:'rgb(230, 230, 230)',
    },
  },
}

const labels = ['January', 'February','March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [15, 15, 15, 15],
      borderWidth: 10, // Increased for visibility
      borderColor: (ctx) => {
        const colors = ['rgb(230, 230, 230)', 'rgb(149, 149, 149)','rgb(149, 149, 149)'];
        return colors[ctx.p0DataIndex] || 'black';
      },
      segment: {
        borderColor: (ctx) => {
          const colors = ['rgb(230, 230, 230)', 'rgb(149, 149, 149)', 'rgb(149, 149, 149)'];
          return colors[ctx.p0DataIndex] || 'black';
        },
        borderCapStyle: () => 'round', // Apply rounded ends to each segment
      },
      borderCapStyle: 'round', // Apply rounded ends for all edges
    },
  ],
};

function ChartLine() {
  return (
    <div style={{ width: 120, height: 70 }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default ChartLine;
