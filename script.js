// HERO TYPING EFFECT
const text = "Hi, I'm Jahnavi Battu";
let i = 0;

function typeEffect() {
    const el = document.querySelector("#hero h1");
    if (!el) return;

    if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

// PROGRESS BAR
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

// SECTION REVEAL (FAST + CLEAN)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// CURSOR GLOW
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".cursor-glow");
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// ACTIVE NAV LINK
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));

        if (
            section &&
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// INIT
document.addEventListener("DOMContentLoaded", typeEffect);
