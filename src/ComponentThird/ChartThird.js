import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

function ChartThird() {
  const data = [
    {
      label: "Label 1",
      value: 15,
      color: "rgb(149, 149, 149)",
    },
    {
      label: "Label 2",
      value: 55,
      color: "rgb(230, 230, 230)",
    },
  ];

  const textCenter = {
    id: "textCenter",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "rgb(230, 230, 230)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("0 Liters", width / 2, height / 2);
      ctx.restore();
    },
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      textCenter,
    },
    responsive: true,
    cutout: "70%",
    barPercentage: 0.2
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: [2, 12], // Rounded ends only for the first data segment
      },
    ],
  };

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <Doughnut data={finalData} options={options} plugins={[textCenter]} />
    </div>
  );
}

export default ChartThird;
