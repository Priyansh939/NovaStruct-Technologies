/* =====================
   CUSTOM CURSOR
   ===================== */
const cur = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = (mx - 6) + 'px';
  cur.style.top  = (my - 6) + 'px';
});

setInterval(() => {
  cx += (mx - cx) * 0.15;
  cy += (my - cy) * 0.15;
  cur2.style.left = (cx - 18) + 'px';
  cur2.style.top  = (cy - 18) + 'px';
}, 16);

// Scale cursor on hoverable elements
document.querySelectorAll('a, button, .service-card, .story-img-wrap').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform = 'scale(2)';
    cur2.style.transform = 'scale(1.5)';
    cur2.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.transform = 'scale(1)';
    cur2.style.transform = 'scale(1)';
    cur2.style.opacity = '0.5';
  });
});

/* =====================
   LOADER
   ===================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 800);
  }, 1800);
});

/* =====================
   NAVBAR SCROLL STATE
   ===================== */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* =====================
   THEME TOGGLE
   ===================== */
document.getElementById('themeToggle').addEventListener('click', function () {
  document.body.classList.toggle('light');
  this.textContent = document.body.classList.contains('light') ? 'Dark' : 'Light';
});

/* =====================
   QUOTE MODAL
   ===================== */
document.getElementById('quoteBtn').addEventListener('click', () => {
  document.getElementById('quoteModal').classList.add('open');
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('quoteModal').classList.remove('open');
});

document.getElementById('quoteModal').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('open');
});

/* =====================
   SCROLL REVEAL
   ===================== */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =====================
   STAT COUNTERS
   ===================== */
let countersStarted = false;

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;

      document.querySelectorAll('.stat-num').forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;

        const update = setInterval(() => {
          count += Math.ceil(target / 60);
          if (count >= target) {
            count = target;
            clearInterval(update);
          }
          counter.innerText = count;
        }, 30);
      });
    }
  });
}, { threshold: 0.3 });

const statsEl = document.querySelector('.stats');
if (statsEl) statsObserver.observe(statsEl);
