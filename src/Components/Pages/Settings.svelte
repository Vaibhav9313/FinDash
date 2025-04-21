<script>
	const user = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		plan: 'Pro Plan',
		joined: 'Jan 15, 2023',
		avatar: 'https://www.w3schools.com/w3images/avatar2.png', // Example avatar
	};

	const preferences = [
		{ label: 'Dark Mode', description: 'Toggle dark theme for the dashboard.', enabled: true },
		{ label: 'Email Notifications', description: 'Receive summary emails and alerts.', enabled: false },
		{ label: 'Auto-Sync', description: 'Sync data automatically every hour.', enabled: true },
		{ label: 'Data Backup', description: 'Back up your data to the cloud.', enabled: false }
	];
</script>

<section class="settings">
	<h2>Settings</h2>

	<!-- User Details -->
	<div class="section">
		<h3>User Information</h3>
		<div class="user-card">
			<div class="user-header">
				<div class="avatar-container">
					<img src={user.avatar} alt="User Avatar" class="avatar" />
				</div>
				<div class="user-info">
					<p class="name">{user.name}</p>
					<p class="email">{user.email}</p>
					<p class="plan">Plan: <span class="plan-type">{user.plan}</span></p>
					<p class="joined">Joined: <span>{user.joined}</span></p>
				</div>
			</div>
		</div>
	</div>

	<!-- Preferences -->
	<div class="section">
		<h3>User Preferences</h3>
		<div class="prefs">
			{#each preferences as pref (pref.label)}
				<div class="pref-card">
					<div class="pref-info">
						<p class="label">{pref.label}</p>
						<p class="desc">{pref.description}</p>
					</div>
					<label class="switch">
						<input type="checkbox" checked={pref.enabled} />
						<span class="slider"></span>
					</label>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.settings {
		padding: 30px;
		margin-top: 60px;
		color: white;
		font-family: 'Helvetica Neue', sans-serif;
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 20px;
		font-weight: 700;
		color: #fff;
	}

	.section {
		margin-bottom: 50px;
	}

	h3 {
		font-size: 1.5rem;
		margin-bottom: 16px;
		color: #ccc;
	}

	/* User Card */
	.user-card {
		background: #2e2e2e;
		border-radius: 16px;
		padding: 30px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	.user-header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
	}

	.avatar-container {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid #4caf50;
	}

	.avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease-in-out;
	}

	.avatar:hover {
		transform: scale(1.1);
	}

	.user-info {
		color: #ddd;
		flex-grow: 1;
	}

	.name {
		font-size: 1.5rem;
		font-weight: 700;
		color: #fff;
		margin-bottom: 8px;
	}

	.email, .plan, .joined {
		font-size: 1rem;
		color: #bbb;
	}

	.plan-type {
		font-weight: 700;
		color: #4caf50;
	}

	/* Preferences Section */
	.prefs {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.pref-card {
		background: #333;
		padding: 20px 25px;
		border-radius: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}

	.pref-card:hover {
		background: #444;
	}

	.pref-info .label {
		font-size: 1.1rem;
		font-weight: 600;
		color: #fff;
	}

	.pref-info .desc {
		color: #aaa;
		font-size: 0.95rem;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 28px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #4caf50;
		border-radius: 34px;
		transition: 0.3s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		border-radius: 50%;
		transition: 0.3s;
	}

	input:checked + .slider {
		background-color: #8bc34a;
	}

	input:checked + .slider:before {
		transform: translateX(22px);
	}
</style>
