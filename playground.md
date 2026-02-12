---
layout: default
title: IDE
---

<style>
  body {
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: 'Courier New', monospace;
  }

  /* The Control Panel Bar */
  .control-panel {
    background: #161b22;
    border: 1px solid #30363d;
    border-bottom: 2px solid #00ff41; /* Neon Green Line */
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
    border-radius: 8px 8px 0 0;
  }

  /* The Dropdown Menu */
  .lang-select {
    background: #000;
    color: #00ff41;
    border: 1px solid #00ff41;
    padding: 10px;
    font-family: 'Courier New', monospace;
    font-size: 16px;
    outline: none;
    cursor: pointer;
  }

  /* The Execution Frame (Where code runs) */
  .execution-frame {
    width: 100%;
    height: 80vh; /* Takes up 80% of screen height */
    border: 1px solid #30363d;
    border-top: none;
    background: #000;
    border-radius: 0 0 8px 8px;
  }

  /* The Status Light */
  .status-light {
    height: 10px;
    width: 10px;
    background-color: #00ff41;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    box-shadow: 0 0 10px #00ff41;
  }
  
  .system-text {
    color: #8b949e;
    font-size: 12px;
    margin-left: 10px;
  }
</style>

<div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
  
  <h1 style="text-align: center; text-shadow: 0 0 15px #00ff41;">
    &lt; EXECUTION_CHAMBER /&gt;
  </h1>
  <p style="text-align: center; color: #8b949e;">
    SELECT_LANGUAGE // WRITE_CODE // COMPILE_RUN
  </p>

  <div class="control-panel">
    <div>
      <span class="status-light"></span>
      <span style="font-weight: bold; color: #fff;">COMPILER_READY</span>
    </div>
    
    <div>
      <label style="color: #fff; margin-right: 10px;">LANG:</label>
      <select id="languageSelector" class="lang-select" onchange="switchCompiler()">
        <option value="python">PYTHON 3.12 (Snake)</option>
        <option value="html">HTML5 (Web)</option>
        <option value="cpp">C++ (GCC)</option>
        <option value="java">JAVA (JDK)</option>
        <option value="c">C LANGUAGE</option>
      </select>
    </div>
  </div>

  <iframe 
    id="compilerFrame" 
    class="execution-frame" 
    src="https://onecompiler.com/embed/python?theme=dark" 
    frameborder="0">
  </iframe>

  <div class="system-text">
    > SYSTEM: Connected to Cloud Compiler Node via OneCompiler API.<br>
    > MEMORY: allocated.<br>
    > WAITING FOR INPUT...
  </div>

</div>

<script>
  function switchCompiler() {
    // 1. Get the selected language from dropdown
    var selector = document.getElementById("languageSelector");
    var selectedLang = selector.value;
    
    // 2. Get the Iframe
    var frame = document.getElementById("compilerFrame");

    // 3. Define the URLs for different compilers (Dark Mode Enabled)
    var urls = {
      "python": "https://onecompiler.com/embed/python?theme=dark",
      "html": "https://onecompiler.com/embed/html?theme=dark", // HTML has live preview
      "cpp": "https://onecompiler.com/embed/cpp?theme=dark",
      "java": "https://onecompiler.com/embed/java?theme=dark",
      "c": "https://onecompiler.com/embed/c?theme=dark"
    };

    // 4. Change the Source
    // We add a tiny fade effect to make it look "techy"
    frame.style.opacity = 0;
    
    setTimeout(function() {
      frame.src = urls[selectedLang];
      frame.onload = function() {
        frame.style.opacity = 1;
      };
    }, 200);
  }
</script>
