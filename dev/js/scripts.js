import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);





const mainTL = gsap.timeline();


function dogrun (){
const tl = gsap.timeline({loop: 2});
tl.to("#dog1", {duration: 0.1, autoAlpha: 0});
tl.to("#dog2", {duration: 0.1, autoAlpha: 0});
tl.to("#dog3", {duration: 0.1, autoAlpha: 0});
tl.to("#dog4", {duration: 0.1, autoAlpha: 0});
tl.to("#dog5", {duration: 0.1, autoAlpha: 0});
tl.to("#dog6", {duration: 0.1, autoAlpha: 0});
tl.to("#dog7", {duration: 0.1, autoAlpha: 0});
tl.to("#dog8", {duration: 0.1, autoAlpha: 0});
tl.to("#dog9", {duration: 0.1, autoAlpha: 0});
tl.to("#dog10", {duration: 0.1, autoAlpha: 0});
tl.to("#dog11", {duration: 0.1, autoAlpha: 0});
tl.to("#dog12", {duration: 0.1, autoAlpha: 0});
tl.to("#dog13", {duration: 0.1, autoAlpha: 0});
tl.to("#dog14", {duration: 0.1, autoAlpha: 0});
tl.to("#dog15", {duration: 0.1, autoAlpha: 0});
tl.to("#dog16", {duration: 0.1, autoAlpha: 0});
tl.to("#dog17", {duration: 0.1, autoAlpha: 0});
tl.to("#dog18", {duration: 0.1, autoAlpha: 0});
tl.to("#dog19", {duration: 0.1, autoAlpha: 0});
tl.to("#dog20", {duration: 0.1, autoAlpha: 0});
tl.to("#dog21", {duration: 0.1, autoAlpha: 0});
tl.to("#dog22", {duration: 0.1, autoAlpha: 0});
tl.to("#dog23", {duration: 0.1, autoAlpha: 0});
return tl;
}

// function verticalbone (){
//     const tl = gsap.timeline();
    
// }

mainTL.add(dogrun);


 //mainTL.to("#bone",{duration:2, alpha:0, scale:2});  



 
 
 
 //gsap.to("#dog1", {duration: 0.1, autoAlpha:0});



// function verticalBone(){
//     const tl = gsap.timeline();
//     tl.from("#fill",{duration: 2, scaleX:0});
//     return tl;

// }

// function boneoutline(){
//     const tl = gsap.timeline();
//     tl.from("#fill",{duration: 2, scaleX:0});
//     return tl;

// }


// //this tl is calling the tl above
// mainTL.add(verticalBone())
//        .add(boneoutline());
  



       

//        GSDevTools.create();



















// const mainTL = gsap.timeline();

// const heroheight = document.querySelector("#hero")

// name of TL, end or beginning, what to animate, 
//how long, what you want to do
// mainTL.to("hero",{duration: 2, alpha:0});

// mainTL.from("#hero",{duration:1.5, alpha:0})
// .from("#hero h1",{duration:1, alpha:0, x:"-200"})
// .from("#hero h2",{duration:1.5, alpha:0, x:"-200"});