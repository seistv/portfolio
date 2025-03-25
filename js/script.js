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
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeIcon.classList.replace("bi-moon", "bi-sun");
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeIcon.classList.replace("bi-sun", "bi-moon");
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
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