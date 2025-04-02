document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        themeIcon.classList.replace("bi-moon", "bi-sun");
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("click", function () {
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        themeIcon.classList.replace(isDarkMode ? "bi-moon" : "bi-sun", isDarkMode ? "bi-sun" : "bi-moon");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    console.log("Portfolio script loaded successfully!");
});