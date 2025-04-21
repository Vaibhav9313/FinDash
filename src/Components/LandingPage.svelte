<script>

</script>

<main>
    <div class="landing-page">
        <!-- Hero Section -->
        <section class="hero">
            <h1 class="headline">Welcome to <span>Fin Dash</span></h1>
            <p class="subheading">Your ultimate financial dashboard for smarter decisions and seamless insights.</p>
        </section>
      
        <!-- Features Section -->
        <section class="features">
            <div class="feature">
                <h2>📊 Real-Time Analytics</h2>
                <p>Monitor your financial data with powerful, up-to-date analytics.</p>
            </div>
            <div class="feature">
                <h2>🔐 Secure by Design</h2>
                <p>Bank-grade encryption ensures your data is always safe and private.</p>
            </div>
            <div class="feature">
                <h2>📈 Smart Insights</h2>
                <p>Gain meaningful insights and trends to boost your financial strategy.</p>
            </div>
            <div class="feature">
                <h2>💡 Personalized Dashboards</h2>
                <p>Customize your dashboard to show the data and KPIs that matter most to you.</p>
            </div>
            <div class="feature">
                <h2>📅 Automated Budgeting</h2>
                <p>Let Fin Dash track and categorize expenses to help you stay on budget automatically.</p>
            </div>
            <div class="feature">
                <h2>📤 Easy Data Export</h2>
                <p>Export your reports and visualizations to PDF, Excel, or CSV in a single click.</p>
            </div>
        </section>
      </div>
</main>
  
<style>
    .landing-page {
        min-height: 100%;
        padding: 90px 20px 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow-y: auto;
    }
  
    /* Hero Section */
    .hero {
        text-align: center;
        margin-bottom: 30px;
        max-width: 800px;
    }
  
    .headline {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 15px;
        color: #fff;
    }
  
    .headline span {
        color: #4caf50;
    }
  
    .subheading {
        font-size: 1.25rem;
        color: #c0c0c0;
        margin-bottom: 30px;
    }
  
    /* Features Section */
    .features {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        max-width: 1100px;
        width: 100%;
        margin-top: 0px;
    }
  
    .feature {
        background-color: #1a1a1d;
        padding: 25px 30px;
        border-radius: 12px;
        text-align: center;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }
  
    .feature:hover {
        background-color: #232327;
        transform: translateY(-4px);
    }
  
    .feature h2 {
        font-size: 1.5rem;
        color: #4caf50;
        margin-bottom: 10px;
    }
  
    .feature p {
        color: #cccccc;
        font-size: 1rem;
        line-height: 1.6;
    }
  
    /* Responsive Layout */
    @media (min-width: 768px) {
        .features {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .headline {
            font-size: 3.5rem;
        }
    }
  
    @media (min-width: 1024px) {
        .features {
            grid-template-columns: repeat(3, 1fr);
        }
    }
  
    @media (max-width: 480px) {
        .headline {
            font-size: 2rem;
        }
    
        .subheading {
            font-size: 1rem;
        }
    
        .cta-button {
            width: 100%;
            min-width: unset;
        }
    }
  </style>
  