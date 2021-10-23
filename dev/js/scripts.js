import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();



 mainTL.to("#bone",{duration:2, alpha:0, scale:2})  

function verticalBone(){
    const tl = gsap.timeline();
    tl.from("#fill",{duration: 2, scaleX:0});
    return tl;

}

function boneoutline(){
    const tl = gsap.timeline();
    tl.from("#fill",{duration: 2, scaleX:0});
    return tl;

}


//this tl is calling the tl above
mainTL.add(verticalBone())
       .add(boneoutline());
  



       

       GSDevTools.create();



















// const mainTL = gsap.timeline();

// const heroheight = document.querySelector("#hero")

// name of TL, end or beginning, what to animate, 
//how long, what you want to do
// mainTL.to("hero",{duration: 2, alpha:0});

// mainTL.from("#hero",{duration:1.5, alpha:0})
// .from("#hero h1",{duration:1, alpha:0, x:"-200"})
// .from("#hero h2",{duration:1.5, alpha:0, x:"-200"});