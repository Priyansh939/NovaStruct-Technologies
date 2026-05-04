// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
 
// DARK MODE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// COUNTER
document.querySelectorAll(".counter").forEach(c=>{
  let t=+c.dataset.target,n=0;
  let i=setInterval(()=>{
    n+=Math.ceil(t/50);
    if(n>=t){n=t;clearInterval(i);}
    c.innerText=n;
  },30);
});

// MODAL
const modal=document.getElementById("quoteModal");
document.getElementById("quoteBtn").onclick=()=>modal.classList.add("active");
document.getElementById("closeModal").onclick=()=>modal.classList.remove("active");
window.onclick=e=>{if(e.target===modal)modal.classList.remove("active");};
