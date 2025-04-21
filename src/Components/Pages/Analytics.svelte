<script>
	import { onMount } from 'svelte';
	import {
		Chart,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		BarElement,
		ArcElement,
		LineController,
		BarController,
		PieController,
		DoughnutController,
		Tooltip,
		Legend
	} from 'chart.js';

	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		BarElement,
		ArcElement,
		LineController,
		BarController,
		PieController,
		DoughnutController,
		Tooltip,
		Legend
	);

	let lineChart, barChart, pieChart, doughnutChart;

	onMount(() => {
		const lineCanvas = document.getElementById('lineChart');
		const barCanvas = document.getElementById('barChart');
		const pieCanvas = document.getElementById('pieChart');
		const doughnutCanvas = document.getElementById('doughnutChart');

		lineChart = new Chart(lineCanvas, {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
				datasets: [{
					label: 'Spending',
					data: [500, 750, 600, 800, 900],
					borderColor: '#42a5f5',
					backgroundColor: 'rgba(66,165,245,0.2)',
					tension: 0.3,
					fill: true
				}]
			},
			options: {
				scales: {
					x: { ticks: { color: 'white' } },
					y: { ticks: { color: 'white' } }
				},
				plugins: {
					legend: { labels: { color: 'white' } }
				}
			}
		});

		barChart = new Chart(barCanvas, {
			type: 'bar',
			data: {
				labels: ['Groceries', 'Bills', 'Entertainment', 'Dining'],
				datasets: [{
					label: 'Spending by Category',
					data: [300, 200, 150, 100],
					backgroundColor: ['#66bb6a', '#ef5350', '#ffa726', '#ab47bc']
				}]
			},
			options: {
				scales: {
					x: { ticks: { color: 'white' } },
					y: { ticks: { color: 'white' } }
				},
				plugins: {
					legend: { labels: { color: 'white' } }
				}
			}
		});

		pieChart = new Chart(pieCanvas, {
			type: 'pie',
			data: {
				labels: ['Needs', 'Wants', 'Savings'],
				datasets: [{
					label: 'Budget Allocation',
					data: [50, 30, 20],
					backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726']
				}]
			},
			options: {
				plugins: {
					legend: { labels: { color: 'white' } },
					tooltip: { enabled: true }
				}
			}
		});

		doughnutChart = new Chart(doughnutCanvas, {
			type: 'doughnut',
			data: {
				labels: ['Stocks', 'Bonds', 'Real Estate', 'Crypto'],
				datasets: [{
					data: [40, 25, 20, 15],
					backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ab47bc']
				}]
			},
			options: {
				plugins: {
					legend: { labels: { color: 'white' } },
					tooltip: { enabled: true }
				}
			}
		});
	});
</script>

<section class="analytics">
	<h2>Analytics Overview</h2>

	<div class="charts-grid">
		<div class="chart-card">
			<h3>Spending Trends</h3>
			<canvas id="lineChart"></canvas>
		</div>

		<div class="chart-card">
			<h3>Category Comparison</h3>
			<canvas id="barChart"></canvas>
		</div>

		<div class="chart-card">
			<h3>Spending Breakdown</h3>
			<canvas id="pieChart"></canvas>
		</div>

		<div class="chart-card">
			<h3>Investment Allocation</h3>
			<canvas id="doughnutChart"></canvas>
		</div>
	</div>
</section>

<style>
	.analytics {
		margin-top: 60px;
		padding: 20px;
		color: white;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.charts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}

	.chart-card {
		background: #1a1a1d;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.chart-card h3 {
		margin-bottom: 12px;
		font-size: 1.2rem;
		color: #ddd;
	}

	canvas {
		max-width: 100%;
	}
</style>
