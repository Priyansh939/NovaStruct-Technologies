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
