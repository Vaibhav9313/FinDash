<script>
    import  Icon  from '@iconify/svelte';
</script>
  
<footer class="footer">
    <p class="footer-text">© 2025 Fin Dash. All rights reserved.</p>
  
    <div class="social-links">
        <a href="#" aria-label="Facebook">
            <Icon icon="mdi:facebook" width="24" height="24" />
        </a>
        <a href="#" aria-label="X (Twitter)">
            <Icon icon="simple-icons:x" width="24" height="24" />
        </a>
        <a href="#" aria-label="Instagram">
            <Icon icon="mdi:instagram" width="24" height="24" />
        </a>
        <a href="#" aria-label="LinkedIn">
            <Icon icon="mdi:linkedin" width="24" height="24" />
        </a>
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
  
    .social-links a {
        color: #4caf50;
        transition: color 0.3s ease;
    }
  
    .social-links a:hover {
        color: #3aaf85;
    }
</style>
  