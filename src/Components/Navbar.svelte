<script>
	import { onMount, onDestroy } from 'svelte';

	export let activeItem;
	export let setActive;

	let isMenuOpen = false;
	let navbarElement;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function goHome() {
		setActive('Landing');
		isMenuOpen = false;
	}

	function handleMenuClick(item) {
		setActive(item);
		isMenuOpen = false;
	}

	function handleOutsideClick(event) {
		if (isMenuOpen && navbarElement && !navbarElement.contains(event.target)) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleOutsideClick);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleOutsideClick);
	});
</script>

<nav class="navbar" bind:this={navbarElement}>
	<div class="logo-container" on:click={goHome}>
		<img src="/src/assets/logo.png" alt="Logo" class="logo-img" />
		<span class="company-name">Fin Dash</span>
	</div>

	<div class="hamburger" on:click={toggleMenu}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</div>

	<div class="nav-links">
		<ul>
			<li><button class:active={activeItem === 'Dashboard'} on:click={() => handleMenuClick('Dashboard')}>Dashboard</button></li>
			<li><button class:active={activeItem === 'Reports'} on:click={() => handleMenuClick('Reports')}>Reports</button></li>
			<li><button class:active={activeItem === 'Analytics'} on:click={() => handleMenuClick('Analytics')}>Analytics</button></li>
			<li><button class:active={activeItem === 'Settings'} on:click={() => handleMenuClick('Settings')}>Settings</button></li>
		</ul>
	</div>
	
	{#if isMenuOpen}
		<div class="mobile-menu">
			<ul>
				<li><button class:active={activeItem === 'Dashboard'} on:click={() => handleMenuClick('Dashboard')}>Dashboard</button></li>
				<li><button class:active={activeItem === 'Reports'} on:click={() => handleMenuClick('Reports')}>Reports</button></li>
				<li><button class:active={activeItem === 'Analytics'} on:click={() => handleMenuClick('Analytics')}>Analytics</button></li>
				<li><button class:active={activeItem === 'Settings'} on:click={() => handleMenuClick('Settings')}>Settings</button></li>
			</ul>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		background-color: #333;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		align-items: center;
	}

	.logo-container {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		white-space: nowrap;
	}

	.logo-img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
	}

	.company-name {
		color: white;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.hamburger {
		display: none;
		cursor: pointer;
		flex-direction: column;
		justify-content: space-between;
		height: 20px;
		width: 25px;
	}

	.bar {
		height: 3px;
		width: 100%;
		background-color: #fff;
	}

	.nav-links ul {
		list-style-type: none;
		display: flex;
		margin: 0;
		padding: 0;
		justify-content: flex-end;
	}

	.nav-links li {
		margin: 0 15px;
	}

	.nav-links a {
		text-decoration: none;
		color: #fff;
		font-size: 1rem;
		padding: 8px 15px;
		transition: background-color 0.3s;
	}

	.nav-links a:hover {
		background-color: #555;
		border-radius: 5px;
	}

	.nav-links a.active {
		background-color: #444;
		border-radius: 5px;
	}

	.mobile-menu {
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		background-color: #575757;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0;
		z-index: 999;
	}

	.mobile-menu ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.mobile-menu li {
		margin: 0;
		width: 100%;
	}

	.mobile-menu a {
		text-decoration: none;
		color: #fff;
		font-size: 1.2rem;
		padding: 12px 18px;
		width: 100%;
		display: block;
		text-align: left;
	}

	.mobile-menu a:hover {
		background-color: #555;
	}

	.mobile-menu a.active {
		background-color: #444;
	}

	@media (max-width: 640px) {
		.hamburger {
			display: flex;
		}

		.nav-links {
			display: none;
		}
	}

	@media (min-width: 641px) {
		.hamburger {
			display: none;
		}

		.mobile-menu {
			display: none;
		}

		.nav-links {
			display: flex;
			justify-content: flex-end;
			width: 100%;
		}
	}
	button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		color: inherit;
		text-decoration: underline; /* Optional: to mimic link styles */
		cursor: pointer;
	}

	button:focus {
		outline: none; /* Customize if you want a specific focus style */
	}
</style>
