document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Fade-in Effect on Scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    let scrollTimeout;
    window.addEventListener("scroll", () => {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(revealSections);
    });
    revealSections(); // Trigger on load

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Hero Section Typing Effect
    const heroText = document.querySelector("#hero h1");
    const textToType = "Hi!, I am Jahnavi";
    let i = 0;

    function typeText() {
        if (i < textToType.length) {
            heroText.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeText, 50); // Delay between each character
        }
    }

    if (heroText) {
        heroText.textContent = ""; // Clear before typing
        typeText();
    }

    // Hover Animations for Skill Cards
    document.querySelectorAll(".skill-card").forEach(card => {
        card.addEventListener("mouseover", () => card.classList.add("hovered"));
        card.addEventListener("mouseout", () => card.classList.remove("hovered"));
    });
});