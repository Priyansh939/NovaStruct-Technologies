// LOADER
window.onload = () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(()=> loader.style.display="none", 500);
};

// DARK MODE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// COUNTER
document.querySelectorAll(".counter").forEach(counter=>{
  let target = +counter.dataset.target;
  let count = 0;
  let update = setInterval(()=>{
    count += Math.ceil(target/80);
    if(count>=target){ count=target; clearInterval(update); }
    counter.innerText=count;
  },30);
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("active"); }
  });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// VIDEO AUTOPLAY SAFETY
const video = document.getElementById("bgVideo");
if(video){ video.play().catch(()=>{}); }

// CURSOR HALO
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// PARALLAX (lightweight)
window.addEventListener("scroll", ()=>{
  const y = window.scrollY;
  document.querySelectorAll(".parallax").forEach(el=>{
    el.style.backgroundPositionY = `${y * 0.4}px`;
  });
});

// CARD TILT (no library)
document.querySelectorAll("[data-tilt]").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width/2;
    const cy = r.height/2;
    const rx = (y - cy) / 18;
    const ry = (cx - x) / 18;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});

