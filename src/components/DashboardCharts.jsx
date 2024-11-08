import React from "react";
import Chart from "react-apexcharts";

const DashboardCards = () => {
  // Sample data and options for three different charts
  const lineChartOptions = {
    series: [{ name: "Revenue", data: [30, 40, 35, 50, 49, 60, 70, 91] }],
    options: {
      chart: { type: "line", height: 350 },
      title: { text: "Revenue Over Time", align: "left" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"] },
    },
  };

  const pieChartOptions = {
    series: [44, 55, 13, 43],
    options: {
      chart: { type: "pie" },
      labels: ["Product A", "Product B", "Product C", "Product D"],
      title: { text: "Sales Distribution", align: "center" },
    },
  };

  const barChartOptions = {
    series: [{ name: "Users", data: [20, 40, 60, 80, 100, 120, 140] }],
    options: {
      chart: { type: "bar", height: 350 },
      title: { text: "User Growth", align: "left" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
    },
  };

  return (
    <div className="grid gap-6 md:grid-cols-3 mt-5">
      {/* Line Chart Card */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <Chart
          options={lineChartOptions.options}
          series={lineChartOptions.series}
          type="line"
          height={250}
        />
      </div>

      {/* Pie Chart Card */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Sales Distribution</h2>
        <Chart
          options={pieChartOptions.options}
          series={pieChartOptions.series}
          type="pie"
          height={250}
        />
      </div>

      {/* Bar Chart Card */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">User Growth</h2>
        <Chart
          options={barChartOptions.options}
          series={barChartOptions.series}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
};

export default DashboardCards;
