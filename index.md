---
layout: default
---

<style>
  /* Base Theme Overrides */
  body {
    background-color: #0d1117 !important; /* Deep GitHub Dark */
    color: #c9d1d9;
    font-family: 'Courier New', Courier, monospace;
    overflow-x: hidden;
  }

  /* Matrix Background Canvas */
  #matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Puts it behind everything */
    opacity: 0.15; /* Very subtle so text is readable */
  }

  /* The Main Layout Grid */
  .main-container {
    display: grid;
    grid-template-columns: 3fr 1fr; /* Content vs Sidebar */
    gap: 20px;
    position: relative;
    z-index: 10; /* Keeps content above background */
  }

  @media (max-width: 768px) {
    .main-container { grid-template-columns: 1fr; }
  }

  /* Mobile-Specific Tweaks */
  @media (max-width: 768px) {
    /* Stack everything vertically */
    .main-container { grid-template-columns: 1fr; }
    
    /* Make the terminal smaller on phones so it doesn't take up too much space */
    .terminal-box { height: 100px; font-size: 10px; }
    
    /* Make the title huge so it looks like a movie poster */
    h1 { font-size: 1.8em; }
    
    /* Hide the sidebar ad on mobile if it's too tall */
    .ad-sidebar { display: none; } 
  }
  
  /* High Tech Card Design */
  .tech-card {
    background: rgba(22, 27, 34, 0.9); /* Glass effect */
    border: 1px solid #30363d;
    border-left: 3px solid #2ea44f; /* GitHub Green */
    padding: 20px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s;
  }
  .tech-card:hover {
    transform: translateY(-2px);
    border-color: #58a6ff; /* Blue on hover */
    box-shadow: 0 0 15px rgba(88, 166, 255, 0.2);
  }

  /* The "Fake Terminal" Widget */
  .terminal-box {
    background: #000;
    border: 1px solid #333;
    padding: 10px;
    font-size: 0.8em;
    color: #00ff41;
    height: 150px;
    overflow: hidden;
    margin-bottom: 20px;
    font-family: 'Consolas', monospace;
  }
  .cursor {
    display: inline-block;
    width: 8px;
    height: 15px;
    background: #00ff41;
    animation: blink 1s infinite;
  }
  @keyframes blink { 0% {opacity:0;} 50% {opacity:1;} 100% {opacity:0;} }

  /* Buttons */
  .btn-glitch {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background: #238636;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .btn-glitch:hover {
    background: #2ea44f;
    text-decoration: none;
  }

  /* Ad Spaces */
  .ad-space {
    background: rgba(0,0,0,0.5);
    border: 1px dashed #444;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 0.8em;
  }
  .ad-banner { height: 90px; width: 100%; margin-bottom: 30px; }
  .ad-sidebar { height: 600px; }
</style>

<canvas id="matrix-bg"></canvas>

<div style="text-align: center; margin-bottom: 40px; position: relative; z-index: 10;">
  <h1 style="color: #fff; text-shadow: 0 0 20px #2ea44f;">&lt; CODE_ACADEMY /&gt;</h1>
  <p style="color: #8b949e;">INITIATING SEQUENCE... WELCOME USER.</p>
</div>

<div class="ad-space ad-banner">
  [AD_UNIT::LEADERBOARD_728x90]
</div>

<div class="main-container">

  <div class="content-area">
    
    <div class="tech-card">
      <h2 style="color:#58a6ff; margin-top:0;">00 :: SYSTEM_BASICS</h2>
      <p>Before you hack, you must understand the machine. Learn files, binary, and logic.</p>
      <a href="./module-0/lesson-1.html" class="btn-glitch">INITIALIZE_MODULE_0</a>
    </div>

    <div class="tech-card">
      <h2 style="color:#f1e05a; margin-top:0;">01 :: PYTHON_CORE</h2>
      <p>The primary language of data science and AI. Clean syntax. Pure logic.</p>
      <a href="./python/lesson-1.html" class="btn-glitch">RUN_PYTHON_SCRIPT</a>
    </div>

    <div class="tech-card" style="border-left-color: #ff0055; opacity: 0.7;">
      <h2 style="color:#ff7b72; margin-top:0;">02 :: WEB_ARCHITECT</h2>
      <p>HTML5 & CSS3. Building the visual interface of the internet.</p>
      <button class="btn-glitch" style="background:#333; cursor:not-allowed;">LOCKED // COMING SOON</button>
    </div>

    <div class="tech-card" style="border-left-color: #f1e05a;">
      <div class="card-title" style="color:#f1e05a;">⚡ PLAYGROUND_IDE</div>
      <div class="card-desc">
        Write code in Python, Java, C++, or HTML. Run it instantly in the browser.
      </div>
      <a href="./playground.html" class="btn-glitch" style="border-color:#f1e05a; color:#f1e05a;">LAUNCH_COMPILER</a>
    </div>

  </div>

  <div class="sidebar-area">
    
    <div class="tech-card" style="padding:0; border:none; background:transparent;">
      <div style="background:#333; color:#fff; padding:5px; font-size:12px;">root@academy:~</div>
      <div class="terminal-box" id="terminal-log">
        </div>
    </div>

    <div class="ad-space ad-sidebar">
      [AD_UNIT::SKYSCRAPER_160x600]
    </div>
  </div>

</div>

<script>
// --- EFFECT 1: MATRIX RAIN ---
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>"; // The falling characters
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for(let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(13, 17, 23, 0.05)"; // Fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // Green Text
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// --- EFFECT 2: FAKE TERMINAL TYPING ---
const terminal = document.getElementById('terminal-log');
const logs = [
    "Loading kernel modules...",
    "Mounting file systems...",
    "Checking dependencies...",
    "Connecting to server...",
    "User detected: STUDENT",
    "Access granted.",
    "Updating course libraries...",
    "Compiling Python assets...",
    "System ready."
];

let logIndex = 0;
let charIndex = 0;

function typeLog() {
    if (logIndex >= logs.length) {
        logIndex = 0; // Loop forever
        terminal.innerHTML = ""; 
    }
    
    const currentLog = logs[logIndex];
    
    // Add current text + cursor
    // We use a temporary span so we don't rewrite the whole innerHTML
    if (charIndex < currentLog.length) {
        terminal.innerHTML += currentLog.charAt(charIndex);
        charIndex++;
        setTimeout(typeLog, 50); // Typing speed
    } else {
        terminal.innerHTML += "<br>> "; // New line prompt
        logIndex++;
        charIndex = 0;
        setTimeout(typeLog, 1000); // Wait before next line
    }
    
    // Auto scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
}

// Start the terminal
terminal.innerHTML = "> ";
setTimeout(typeLog, 1000);

// Handle Window Resize for Matrix
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
</script>
