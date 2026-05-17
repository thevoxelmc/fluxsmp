// script.js

function copyIP(){
    navigator.clipboard.writeText("play.fluxsmp.com");

    const btns = document.querySelectorAll(".primary-btn");

    btns.forEach(btn=>{
        const original = btn.innerHTML;

        btn.innerHTML = "Copied!";
        
        setTimeout(()=>{
            btn.innerHTML = original;
        },1500);
    });
}

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

const reveals = document.querySelectorAll(".reveal");

function revealScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealScroll);

revealScroll();
