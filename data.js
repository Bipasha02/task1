import React, { useState, useEffect } from 'react';
import Chart from 'react-chartjs-2';
import axios from 'axios';

const MonthlyCollectionChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get('https://your-data-source/monthly-collection')
      .then(response => {
        const data = response.data;
        const labels = data.map(item => item.month);
        const values = data.map(item => item.amount);

        const chartDataset = {
          label: 'Monthly Collection',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
          hoverBorderColor: 'rgba(255, 99, 132, 1)',
          hoverBorderWidth: 2,
        };

        const chartOptions = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        };

        const chartConfig = {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [chartDataset],
          },
          options: chartOptions,
        };

        setChartData(chartConfig);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="monthly-collection-chart">
      <Chart data={chartData} />
    </div>
  );
};

export default MonthlyCollectionChart;
