<script>
	import { fly } from 'svelte/transition';

	const reportKPIs = [
		{ label: 'Total Income', value: '$4,800', icon: '💼', tooltip: 'Total income this month' },
		{ label: 'Total Expenses', value: '$2,350', icon: '💸', tooltip: 'Total expenses this month' },
		{ label: 'Net Savings', value: '$2,450', icon: '💰', tooltip: 'Income minus expenses' },
		{ label: 'Top Category', value: 'Groceries', icon: '🛒', tooltip: 'Category with highest spend' }
	];

	const expenseBreakdown = [
		{ category: 'Groceries', amount: 520 },
		{ category: 'Rent', amount: 1200 },
		{ category: 'Utilities', amount: 180 },
		{ category: 'Dining', amount: 450 }
	];

	const chartData = [
		{ month: 'Jan', income: 4500, expense: 3200 },
		{ month: 'Feb', income: 4700, expense: 2900 },
		{ month: 'Mar', income: 4900, expense: 3300 },
		{ month: 'Apr', income: 4800, expense: 2350 }
	];

	const maxValue = Math.max(...chartData.map(item => Math.max(item.income, item.expense)));
</script>

<section class="reports">
	<h2>Reports Overview</h2>

	<div class="kpi-cards">
		{#each reportKPIs as kpi (kpi.label)}
			<div class="card" in:fly={{ y: 20, duration: 300 }}>
				<div class="icon" title={kpi.tooltip}>{kpi.icon}</div>
				<div class="info">
					<p class="value">{kpi.value}</p>
					<p class="label">{kpi.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="section">
		<h3>Expense Breakdown</h3>
		<table class="breakdown-table">
			<thead>
				<tr>
					<th>Category</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{#each expenseBreakdown as row (row.category)}
					<tr in:fly={{ x: -15, duration: 250 }}>
						<td>{row.category}</td>
						<td>${row.amount}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="section">
		<h3>Income vs Expenses (Monthly)</h3>

		<div class="chart-legend">
			<span><span class="legend-box income"></span>Income</span>
			<span><span class="legend-box expense"></span>Expenses</span>
		</div>

		<div class="chart-container">
			{#each chartData as item (item.month)}
				<div class="chart-bar">
					<p class="month">{item.month}</p>
					<div class="bars">
						<div
							class="bar income"
							style="height: {(item.income / maxValue) * 100}%"
							title={`Income: $${item.income}`}>
							<p class="value">{`$${item.income}`}</p>
						</div>
						<div
							class="bar expense"
							style="height: {(item.expense / maxValue) * 100}%"
							title={`Expense: $${item.expense}`}>
							<p class="value">{`$${item.expense}`}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.reports {
		margin-top: 60px;
		padding: 20px;
		color: white;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 24px;
	}

	.kpi-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 20px;
		margin-bottom: 40px;
	}

	.card {
		background: #1a1a1d;
		border-radius: 12px;
		padding: 20px;
		display: flex;
		align-items: center;
		gap: 15px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.card:hover {
		transform: translateY(-6px);
		background: #2a2a2e;
	}

	.icon {
		font-size: 2rem;
	}

	.info .value {
		font-size: 1.6rem;
		font-weight: 600;
	}

	.info .label {
		color: #bbb;
		font-size: 0.9rem;
		margin-top: 4px;
	}

	.section {
		margin-bottom: 40px;
	}

	.section h3 {
		font-size: 1.3rem;
		margin-bottom: 16px;
	}

	.breakdown-table {
		width: 100%;
		border-collapse: collapse;
		background-color: #2a2a2e;
		border-radius: 8px;
		overflow: hidden;
	}

	.breakdown-table th,
	.breakdown-table td {
		text-align: left;
		padding: 14px 18px;
		border-bottom: 1px solid #444;
	}

	.breakdown-table th {
		background-color: #333;
		color: #ddd;
	}

	.breakdown-table td {
		color: #ccc;
	}

	.chart-legend {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 16px;
		color: #ccc;
		font-size: 0.95rem;
	}

	.legend-box {
		display: inline-block;
		width: 14px;
		height: 14px;
		border-radius: 3px;
		margin-right: 6px;
	}

	.legend-box.income {
		background-color: #4caf50;
	}

	.legend-box.expense {
		background-color: #f44336;
	}

	.chart-container {
		background-color: #1e1e22;
		padding: 20px;
		border-radius: 12px;
		width: 100%;
		min-height: 320px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 20px;
	}

	.chart-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 140px;
        gap: 40px;
	}

	.chart-bar p.month {
		margin-bottom: 30px;
		font-size: 0.95rem;
	}

	.bars {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		gap: 20px;
		height: 200px;
	}

	.bar {
		width: 35px;
		border-radius: 4px;
		transition: height 0.3s ease;
		position: relative;
	}

	.bar.income {
		background-color: #4caf50;
	}

	.bar.expense {
		background-color: #f44336;
	}

	.bar .value {
		position: absolute;
		top: -22px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.75rem;
		font-weight: 500;
		color: white;
		white-space: nowrap;
	}

	.bar:hover::after {
		content: attr(title);
		position: absolute;
		top: -35px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.75);
		color: #fff;
		font-size: 0.75rem;
		padding: 4px 8px;
		border-radius: 4px;
		white-space: nowrap;
		pointer-events: none;
		z-index: 10;
	}
</style>
