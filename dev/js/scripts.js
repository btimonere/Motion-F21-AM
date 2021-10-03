import { gsap } from "gsap";

const mainTL = gsap.timeline();

// name of TL, end or beginning, what to animate, 
//how long, what you want to do
// mainTL.to("hero",{duration: 2, alpha:0});

mainTL.from("#hero",{duration:3, alpha:0});