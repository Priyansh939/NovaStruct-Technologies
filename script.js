// LOADER (safer than window.onload)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }
});


// DARK MODE (safe binding)
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}


// COUNTER (only trigger when visible)
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      let count = 0;

      const update = setInterval(() => {
        count += Math.ceil(target / 80);

        if (count >= target) {
          count = target;
          clearInterval(update);
        }

        counter.innerText = count;
      }, 30);

      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.6 });

counters.forEach(c => counterObserver.observe(c));


// SCROLL REVEAL (more reliable)
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));


// VIDEO AUTOPLAY FIX (important for GitHub Pages)
const video = document.getElementById("bgVideo");

if (video) {
  video.muted = true;
  video.play().catch(() => {
    // fallback if autoplay blocked
    console.log("Autoplay blocked, user interaction needed");
  });
}


// CURSOR HALO (optimized)
const cursor = document.getElementById("cursor");

if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}


// PARALLAX (throttled for performance)
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const y = window.scrollY;

      document.querySelectorAll(".parallax").forEach(el => {
        el.style.backgroundPositionY = `${y * 0.3}px`;
      });

      ticking = false;
    });

    ticking = true;
  }
});


// CARD TILT (safe)
document.querySelectorAll("[data-tilt]").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const cx = r.width / 2;
    const cy = r.height / 2;

    const rx = (y - cy) / 20;
    const ry = (cx - x) / 20;

    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});
