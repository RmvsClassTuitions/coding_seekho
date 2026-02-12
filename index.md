---
layout: default
---

<style>
  /* 1. Global "Cyberpunk" Settings */
  body {
    background-color: #1e1e1e !important; /* VS Code Dark Grey */
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  }
  
  /* 2. The Main Layout Grid (Content + Sidebar) */
  .main-container {
    display: grid;
    grid-template-columns: 3fr 1fr; /* 75% Content, 25% Ads */
    gap: 20px;
  }

  /* Mobile: Stack them vertically */
  @media (max-width: 768px) {
    .main-container { grid-template-columns: 1fr; }
  }

  /* 3. High Tech Card Design */
  .tech-card {
    background: #252526;
    border: 1px solid #3e3e42;
    border-left: 4px solid #00ff41; /* Hacker Green Accent */
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
  }
  .tech-card:hover {
    transform: translateX(5px);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2); /* Green Glow */
    border-color: #00ff41;
  }
  
  .card-title {
    color: #fff;
    font-size: 1.4em;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .card-desc { color: #cccccc; font-size: 0.9em; }

  .btn-glitch {
    background: transparent;
    border: 1px solid #00ff41;
    color: #00ff41;
    padding: 5px 15px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
  .btn-glitch:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 10px #00ff41;
  }

  /* 4. Ad Space Styling */
  .ad-space {
    background: #000;
    border: 1px dashed #444;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    font-weight: bold;
    text-align: center;
  }
  .ad-sidebar { height: 600px; } /* Tall skyscraper ad */
  .ad-banner { height: 100px; width: 100%; margin-bottom: 20px; }
</style>

<div style="text-align: center; margin-bottom: 40px;">
  <h1 style="color: #fff; text-shadow: 0 0 10px #00ff41;">&lt;FUTURE_CODERS_ACADEMY /&gt;</h1>
  <p style="color: #00ff41;">System Status: ONLINE | User: Guest</p>
</div>

<div class="ad-space ad-banner">
  [AD SPACE: 728x90 LEADERBOARD]
</div>

<div class="main-container">

  <div class="content-area">
    
    <div class="tech-card">
      <div class="card-title">00 :: SYSTEM_BASICS</div>
      <div class="card-desc">Initialize understanding of hardware, files, and logic.</div>
      <a href="./module-0/lesson-1.html" class="btn-glitch">EXECUTE_MODULE_0</a>
    </div>

    <div class="tech-card">
      <div class="card-title">01 :: PYTHON_CORE</div>
      <div class="card-desc">Primary language for logic. Syntax: English-based.</div>
      <a href="./python/lesson-1.html" class="btn-glitch">EXECUTE_MODULE_1</a>
    </div>

    <div class="tech-card" style="border-left-color: #ff0055;">
      <div class="card-title" style="color:#ffcc00;">02 :: WEB_DEV_HTML5</div>
      <div class="card-desc">Front-end architecture and DOM manipulation.</div>
      <button class="btn-glitch" style="border-color:#555; color:#555; cursor:not-allowed;">LOCKED</button>
    </div>

  </div>

  <div class="sidebar-area">
    <div class="tech-card">
      <h3 style="color:white; margin-top:0;">Updates</h3>
      <ul style="color:#ccc; padding-left:20px;">
        <li>v1.2: Python Compiler Added</li>
        <li>v1.1: Dark Mode Enabled</li>
      </ul>
    </div>

    <div class="ad-space ad-sidebar">
      [AD SPACE: 160x600 SKYSCRAPER]
    </div>
  </div>

</div>
