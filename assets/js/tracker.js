document.addEventListener("DOMContentLoaded", function() {
    // 1. Find the current page key (URL)
    const currentPath = window.location.pathname;
    
    // 2. check if the "Mark Complete" button exists on this page
    const completeBtn = document.getElementById("mark-complete");
    
    if (completeBtn) {
        // If user already finished this, make button green and disabled
        if (localStorage.getItem(currentPath) === "done") {
            markButtonAsDone(completeBtn);
        }

        // When clicked, save "done" to browser memory
        completeBtn.addEventListener("click", function() {
            localStorage.setItem(currentPath, "done");
            markButtonAsDone(completeBtn);
            alert("Great job! Lesson marked as complete.");
        });
    }

    // 3. Update the Homepage checkboxes (if we are on homepage)
    // This finds links on the home page and checks if they are done
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // We clean the href to match the storage key format
        // Note: This is a basic check; might need tweaking based on your exact URL structure
        if(href && localStorage.getItem("/" + href.replace(/^\.\//, '')) === "done") {
             link.parentElement.style.textDecoration = "line-through";
             link.parentElement.innerHTML += " ✅";
        }
    });
});

function markButtonAsDone(btn) {
    btn.innerText = "✅ Completed";
    btn.style.backgroundColor = "#2ea44f"; // GitHub Green
    btn.style.color = "white";
    btn.disabled = true;
}
