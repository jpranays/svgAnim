const navlinks = document.querySelector(".nav-links");
const btn = document.querySelector(".btn");
const svg = document.querySelector(".svg");
const body = document.querySelector("#body");
let counter;
btn.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    if (svg.style.left == `20%`) {
        svg.style.left = `0%`
    } else {
        svg.style.left = `20%`
    }

});
const all = document.querySelectorAll(".anim")
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("transition-fade")
        }
    })
}, { threshold: 0.5 })

all.forEach((entry) => {
    observer.observe(entry);
})

svg.onmouseover=function(){	
svg.style.transform="rotate(-18deg) scale(0.6)"
	counter=setTimeout(()=>{
svg.style.transform="rotate(-360deg) scale(0.6)"
	},3000)
}
svg.onmouseout=function(){
 svg.style.transform="rotate(0deg) scale(0.6)"
}
