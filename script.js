// script.js

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
document.body.classList.toggle("dark");
};

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
let target = +counter.getAttribute("data-target");
let count = 0;

let update = setInterval(() => {
count += Math.ceil(target / 80);

if(count >= target){
count = target;
clearInterval(update);
}

counter.innerText = count;
}, 30);
});
