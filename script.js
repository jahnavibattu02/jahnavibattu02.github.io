// Typing Effect
const heroText = "Hi, I'm Jahnavi Battu";
let i = 0;

function type() {
  const el = document.querySelector("#hero h1");
  if (!el) return;

  if (i < heroText.length) {
    el.textContent += heroText.charAt(i++);
    setTimeout(type, 60);
  }
}

// Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById("progress-bar").style.width =
    (scrollTop / height) * 100 + "%";
});

// Reveal Sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// Cursor Glow
document.addEventListener("mousemove", e => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Active Nav
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section &&
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", type);
