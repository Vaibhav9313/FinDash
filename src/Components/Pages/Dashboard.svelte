<script>
	import { fly } from 'svelte/transition';

	const kpis = [
		{ label: 'Total Balance', value: '$25,400', icon: '💰', tooltip: 'Available balance in your account' },
		{ label: 'Monthly Change', value: '+$1,250', icon: '📈', tooltip: 'Change from previous month' },
		{ label: 'Recent Expenses', value: '$620', icon: '💸', tooltip: 'Your spendings in last 7 days' },
		{ label: 'Investments', value: '$12,500', icon: '💼', tooltip: 'Your current investment value' }
	];

	const transactions = [
		{ date: 'Apr 20', category: 'Groceries', amount: -75.3, description: 'Supermarket' },
		{ date: 'Apr 18', category: 'Salary', amount: 3200, description: 'Monthly Pay' },
		{ date: 'Apr 16', category: 'Utilities', amount: -120, description: 'Electricity Bill' },
		{ date: 'Apr 14', category: 'Dining', amount: -45.5, description: 'Dinner Out' }
	];

	const budgets = [
		{ category: 'Groceries', spent: 220, limit: 400 },
		{ category: 'Entertainment', spent: 280, limit: 300 },
		{ category: 'Utilities', spent: 90, limit: 150 }
	];
</script>

<section class="dashboard">
	<h2>Welcome to Your Dashboard</h2>

	<div class="kpi-cards">
		{#each kpis as kpi (kpi.label)}
			<div class="card" in:fly={{ y: 20, duration: 300 }}>
				<div class="icon" title={kpi.tooltip}>{kpi.icon}</div>
				<div class="info">
					<p class="value">{kpi.value}</p>
					<p class="label">{kpi.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Transactions -->
	<div class="section">
		<h3>Recent Transactions</h3>
		<ul class="transaction-list">
			{#each transactions as txn (txn.date + txn.category)}
				<li in:fly={{ x: -20, duration: 300 }}>
					<div class="top-row">
						<span class="date">{txn.date}</span>
						<span class="amount {txn.amount >= 0 ? 'income' : 'expense'}">
							{txn.amount >= 0 ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
						</span>
					</div>
					<small>{txn.category} - {txn.description}</small>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Budgets -->
	<div class="section">
		<h3>Budget Summary</h3>
		{#each budgets as b (b.category)}
			<div class="budget-item" in:fly={{ x: 20, duration: 300 }}>
				<div class="label-row">
					<span>{b.category}</span>
					<span>${b.spent} / ${b.limit}</span>
				</div>
				<div class="progress-bar">
					<div
						class="progress {b.spent / b.limit > 0.9 ? 'warning' : ''}"
						style="width: {(b.spent / b.limit) * 100}%">
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.dashboard {
		margin-top: 60px;
		padding: 20px;
		color: white;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 20px;
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
		box-shadow: 0 2px 8px rgba(0,0,0,0.3);
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
		font-size: 1.5rem;
		font-weight: 600;
	}

	.info .label {
		color: #bbb;
		font-size: 0.9rem;
	}

	.section {
		margin-bottom: 40px;
	}

	.transaction-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.transaction-list li {
		padding: 12px 0;
		border-bottom: 1px solid #333;
	}

	.top-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
	}

	.date {
		color: #aaa;
		font-weight: 500;
	}

	.amount {
		font-weight: bold;
	}

	.amount.income {
		color: #4caf50;
	}

	.amount.expense {
		color: #f44336;
	}

	small {
		color: #888;
		font-size: 0.85rem;
	}

	.budget-item {
		margin-bottom: 20px;
	}

	.label-row {
		display: flex;
		justify-content: space-between;
		font-size: 0.95rem;
		margin-bottom: 6px;
	}

	.progress-bar {
		background: #3a3a3d;
		border-radius: 6px;
		height: 12px;
		width: 100%;
		overflow: hidden;
	}

	.progress {
		background: #4caf50;
		height: 100%;
		border-radius: 6px;
		transition: width 0.3s ease;
	}

	.progress.warning {
		background: #f9a825;
	}
</style>
