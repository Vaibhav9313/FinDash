<script>
    import Footer from './Components/Footer.svelte';
    import Navbar from './Components/Navbar.svelte';
    import LandingPage from './Components/LandingPage.svelte';
    import Dashboard from './Components/Pages/Dashboard.svelte';
    import Reports from './Components/Pages/Reports.svelte';
    import Analytics from './Components/Pages/Analytics.svelte';
    import Settings from './Components/Pages/Settings.svelte';
  
    let activeItem = 'Landing'; 
  
    function setActive(item) {
        activeItem = item;
    }
</script>

<main>
    <div class="app-wrapper">
        <Navbar {activeItem} {setActive} />

        <div class="content-wrapper">
            {#if activeItem === 'Dashboard'}
                <Dashboard />
            {:else if activeItem === 'Reports'}
                <Reports />
            {:else if activeItem === 'Analytics'}
                <Analytics />
            {:else if activeItem === 'Settings'}
                <Settings />
            {:else}
                <LandingPage />
            {/if}
        </div>

        <Footer />
    </div>
</main>
  
<style>
    .app-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
  
    .content-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>
  