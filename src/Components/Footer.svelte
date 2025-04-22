<script>
    import Icon from '@iconify/svelte';
</script>
  
<footer class="footer">
    <p class="footer-text">© 2025 Fin Dash. All rights reserved.</p>
  
    <div class="social-links">
        <!-- Use a button or span for links with no href -->
        <button aria-label="Facebook" class="social-button" on:click={() => {}}>
            <Icon icon="mdi:facebook" width="24" height="24" />
        </button>
        <button aria-label="X (Twitter)" class="social-button" on:click={() => {}}>
            <Icon icon="simple-icons:x" width="24" height="24" />
        </button>
        <button aria-label="Instagram" class="social-button" on:click={() => {}}>
            <Icon icon="mdi:instagram" width="24" height="24" />
        </button>
        <button aria-label="LinkedIn" class="social-button" on:click={() => {}}>
            <Icon icon="mdi:linkedin" width="24" height="24" />
        </button>
    </div>
</footer>
  
<style>
    .footer {
        width: 100vw;
        background-color: #1a1a1d;
        padding: 30px 0 20px;
        color: #ccc;
        text-align: center;
        flex-shrink: 0;
    }
  
    .footer-text {
        font-size: 0.95rem;
        margin-bottom: 15px;
    }
  
    .social-links {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
  
    .social-button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0;
        transition: color 0.3s ease;
    }
  
    .social-button:hover {
        color: #3aaf85;
    }
</style>
