import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

function ChartFour() {
  const data = [
    {
      label: "Label 1",
      value: 75,
      color: "rgb(230, 230, 230)",
    },
    {
      label: "Label 2",
      value: 15,
      color: "rgb(149, 149, 149)",
    },
  ];

  const lineAndDotPlugin = {
    id: "lineAndDot",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      const centerX = width / 2;
      const centerY = height / 1.4; 
      const lineLength = 25; 
      const angle = Math.PI / 4;
  
      ctx.save();
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + lineLength * Math.cos(angle),
        centerY - lineLength * Math.sin(angle)
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3; 
      ctx.lineCap = "round"; 
      ctx.stroke();
  
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI); 
      ctx.fillStyle = "rgb(149, 149, 149)";
      ctx.fill();
  
      ctx.restore();
    },
  };
  

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      lineAndDot: lineAndDotPlugin,
      title: {
        display: true,
        text: 'Today',
        position:'bottom',
        color:'black'
      }
    },
    responsive: true,
    cutout: "70%", 
    rotation: -90, 
    circumference: 180,
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderColor: "rgb(149, 149, 149)",
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <div style={{ width: "100px", height: "100px" }}>
      
      <Doughnut data={finalData} options={options} plugins={[lineAndDotPlugin]} />
    </div>
  );
}

export default ChartFour;
