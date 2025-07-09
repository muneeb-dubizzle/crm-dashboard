import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RevenueChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, 'rgba(230,52,98,0.4)');
    gradient.addColorStop(1, 'rgba(230,52,98,0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 15000, 14000, 17000, 16000, 18000, 20000],
          fill: true,
          backgroundColor: gradient,
          borderColor: '#E63462',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: '#E63462',
          pointRadius: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#eee' }, ticks: { beginAtZero: true } }
        }
      }
    });
  }, []);

  return (
    <div className="card chart-widget">
      <h4>Revenue Trend</h4>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RevenueChart;
