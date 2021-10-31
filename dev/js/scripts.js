import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";

gsap.registerPlugin(GSDevTools, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo);





const mainTL = gsap.timeline();


function dogrun (){
const tl = gsap.timeline();
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

//repeat: 2 was not working


function verticalbone (){
const tl = gsap.timeline();
tl.to("#bone", { duration: 2.5, ease: "Elastic.easeOut", yoyo: true, y: "-100" });


// tl.to("#bone", 1, {y:-100});
// tl.set("#bone", {zIndex:500});
// tl.to("#bone", 1, {y:0});
return tl;
}

function wind (){
    const tl = gsap.timeline();
    gsap.to("#line1", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line2", { duration: 2, ease: "power3.out", x: "-900%" });
    gsap.to("#line4", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line5", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line6", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line7", { duration: 2, ease: "power3.out", x: "-900%" });
    gsap.to("#line8", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line9", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line10", { duration: 2, ease: "power3.out", x: "-800%" });
    gsap.to("#line11", { duration: 2, ease: "power3.out", x: "-800%" });
    return tl;
}

mainTL.add(dogrun)
.add(verticalbone)
.add(wind);


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
  



       

GSDevTools.create();



















// const mainTL = gsap.timeline();

// const heroheight = document.querySelector("#hero")

// name of TL, end or beginning, what to animate, 
//how long, what you want to do
// mainTL.to("hero",{duration: 2, alpha:0});

// mainTL.from("#hero",{duration:1.5, alpha:0})
// .from("#hero h1",{duration:1, alpha:0, x:"-200"})
// .from("#hero h2",{duration:1.5, alpha:0, x:"-200"});