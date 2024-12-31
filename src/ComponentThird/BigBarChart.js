import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
    scales: {
        x: {
          grid: {
            display: false ,
            drawBorder: false       
          }
        },
        y: { 
            ticks: {
                display: false,
              }
            ,grid: {
            display: false ,
            drawBorder: false     
            },
        }
      },
  responsive: true,
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,20,15,20,30,20,10],
      backgroundColor: ['rgba(142, 184, 37, 0.5)',
      'rgba(142, 184, 37, 0.5)',
      'rgba(142, 184, 37, 0.5)',
      'rgba(142, 184, 37, 0.5)',
      'rgb(170, 198, 27)',
      'rgba(142, 184, 37, 0.5)',
      'rgba(142, 184, 37, 0.5)',
    ],
    borderRadius:3,

    },
  ],
};

function BigBarChart() {
  return <div style={{width:250,height:300}}><Bar options={options} data={data} /></div>;
}
export default BigBarChart;
