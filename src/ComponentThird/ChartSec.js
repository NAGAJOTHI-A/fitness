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
    Tooltip,
    
  );

  export const options = {
    responsive: true,
    elements: {
        point:{
            radius: 0
        }
    },
    scales: {
        x: {
            ticks: {
                display: false,
                
              },
          grid: {
            display: false ,
            drawBorder: false       
          }
        },
        y: { 
           
            grid: {
            display: false ,
            drawBorder: false     
            },
            ticks: {
                display: false,
                
              }
        }
      },
    plugins: {
      title: {
        display: true,
        text: '75 Bpm',
        position:'bottom',
        color:'rgb(237, 227, 227)',
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [40,20,42,5,45,0,30],
        borderColor: 'rgb(237, 227, 227)',
        backgroundColor: 'rgb(237, 227, 227)',
      }
    ]
  };
 function ChartSec() {
    return <div style={{width:120,height:150}}>
          <Line options={options} data={data} />
    </div>
    
      
    
  }
  export default ChartSec;