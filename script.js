// LOADER FADE
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
    if(count>=target){
      count=target;
      clearInterval(update);
    }
    counter.innerText=count;
  },30);
});

// SCROLL REVEAL (smooth + stagger feel)
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

// VIDEO AUTOPLAY SAFETY
const video = document.getElementById("bgVideo");
if(video){
  video.play().catch(()=>{});
}
