import { gsap } from "gsap";

const mainTL = gsap.timeline();

// const heroheight = document.querySelector("#hero")

// name of TL, end or beginning, what to animate, 
//how long, what you want to do
// mainTL.to("hero",{duration: 2, alpha:0});

mainTL.from("#hero",{duration:1.5, alpha:0})
.from("#hero h1",{duration:1, alpha:0, x:"-200"})
.from("#hero h2",{duration:1.5, alpha:0, x:"-200"});