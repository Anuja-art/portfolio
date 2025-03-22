document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check if dark mode was previously enabled
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "sun.png"; // Switch to sun icon
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "sun.png";  // Switch to sun icon
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "moon.png";  // Switch to moon icon
            localStorage.setItem("theme", "light");
        }
    });
});
