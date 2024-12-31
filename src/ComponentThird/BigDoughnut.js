import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

function BigDoughnut() {
  const data = [
    {
      label: "Cardio",
      value: 30,
      color: "rgb(97, 206, 142)",
    },
    {
      label: "Stretching",
      value: 40,
      color: "rgb(207, 134, 74)",
    },
    {
      label: "Treadmill",
      value: 30,
      color: "rgb(231, 82, 82)",
    },
    {
      label: "Strength",
      value: 20,
      color: "rgb(119, 112, 164)",
    },
  ];

  const textCenter = {
    id: "textCenter",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.save();

      // Draw first text
      ctx.font = "bold 12px sans-serif";
      ctx.fillStyle = "rgb(79, 76, 76)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Strengthing", width / 2, height / 2 - 10); // Slightly above center

      // Draw second text
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "rgb(50, 50, 50)";
      ctx.fillText("40hrs", width / 2, height / 2 + 15); // Slightly below center
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
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "200px", height: "150px" }}>
        <Doughnut data={finalData} options={options} plugins={[textCenter]} />
      </div>
      <div style={{ marginLeft: "4px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "8px", // Smaller size for the dot
                height: "8px",
                borderRadius: "50%", // Makes the square into a circle (dot)
                backgroundColor: item.color,
                marginRight: "5px",
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "rgb(50, 50, 50)" }}>
              {item.label} - {item.value}hrs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BigDoughnut;
