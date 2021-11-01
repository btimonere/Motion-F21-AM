import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";

gsap.registerPlugin(GSDevTools, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo);

const mainTL = gsap.timeline();


function dogrun (){
const tl = gsap.timeline({repeat: 2});

tl.from(".dog", {stagger: 1, duration: 2, autoAlpha: 0, ease:"steps (22)"})
// .to(".dog", {stagger: 2, duration: 4, autoAlpha: 0, ease:"steps (22)"},"-=75");
// .to(".dog", {stagger: 0.2,duration: 0.02, autoAlpha: 0},"-=0.44");


// tl.from("#dog1", {duration: 0.02, autoAlpha: 0});
// tl.from("#dog2", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog1", {duration: 0.02, autoAlpha:0});
// tl.from("#dog3", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog2", {duration: 0.02, autoAlpha:0});
// tl.from("#dog4", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog3", {duration: 0.02, autoAlpha:0});
// tl.from("#dog5", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog4", {duration: 0.02, autoAlpha:0});
// tl.from("#dog6", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog5", {duration: 0.02, autoAlpha:0});
// tl.from("#dog7", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog6", {duration: 0.02, autoAlpha:0});
// tl.from("#dog8", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog7", {duration: 0.02, autoAlpha:0});
// tl.from("#dog9", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog8", {duration: 0.02, autoAlpha:0});
// tl.from("#dog10", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog9", {duration: 0.02, autoAlpha:0});
// tl.from("#dog11", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog10", {duration: 0.02, autoAlpha:0});
// tl.from("#dog12", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog11", {duration: 0.02, autoAlpha:0});
// tl.from("#dog13", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog12", {duration: 0.02, autoAlpha:0});
// tl.from("#dog14", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog13", {duration: 0.02, autoAlpha:0});
// tl.from("#dog15", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog14", {duration: 0.02, autoAlpha:0});
// tl.from("#dog16", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog15", {duration: 0.02, autoAlpha:0});
// tl.from("#dog17", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog16", {duration: 0.02, autoAlpha:0});
// tl.from("#dog18", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog17", {duration: 0.02, autoAlpha:0});
// tl.from("#dog19", {duration: 0.02, autoAlpha: 0});
// tl.to("#do18", {duration: 0.02, autoAlpha:0});
// tl.from("#dog20", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog19", {duration: 0.02, autoAlpha:0});
// tl.from("#dog21", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog20", {duration: 0.02, autoAlpha:0});
// tl.from("#dog22", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog21", {duration: 0.02, autoAlpha:0});
// tl.from("#dog23", {duration: 0.02, autoAlpha: 0});
// tl.to("#dog22", {duration: 0.02, autoAlpha:0});

return tl;
}

//repeat: 2 was not working


function verticalbone (){
const tl = gsap.timeline({repeat: 0.5});
tl.from("#bone", { duration: 1, ease: "none", y: "-100" });
tl.to("#bone", { duration: 1, ease: "none", y: "-100" });


// tl.from("#bone", 1, {y:-100});
// tl.set("#bone", {zIndex:500});
// tl.from("#bone", 1, {y:0});
return tl;
}

// function wind1 (){
//     const tl = gsap.timeline();
//     gsap.to("#line1", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line2", { duration: 1, ease: "none", x: "-900%" });
//     gsap.to("#line3", { duration: 1, ease: "none", x: "-900%" });
//     gsap.to("#line4", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line5", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line6", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line7", { duration: 1, ease: "none", x: "-900%" });
//     gsap.to("#line8", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line9", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line10", { duration: 1, ease: "none", x: "-800%" });
//     gsap.to("#line11", { duration: 1, ease: "none", x: "-800%" });


    
//     return tl;
// }

// function boneshadow (){
//     const tl = gsap.timeline({repeat: 1});
//     tl.staggerfromto("shadow-bone", {duration: 0.5, scale:1, scale:1.1, repeat:-1, yoyo:true}, 0.1);

// return tl;
// }    



function wind1 (){
    const tl = gsap.timeline({repeat: 1});
    gsap.to("#line1", { duration: 1, ease: "none", x: "-1000%" });
    gsap.to("#line2", { duration: 1, ease: "none", x: "-1300%" });
    gsap.to("#line3", { duration: 1, ease: "none", x: "-1000%" });
    gsap.to("#line4", { duration: 1, ease: "none", x: "-1000%" });
    gsap.to("#line5", { duration: 1, ease: "none", x: "-1000%" });
    gsap.to("#line6", { duration: 1, ease: "none", x: "-1500%" });
    gsap.to("#line7", { duration: 1, ease: "none", x: "-1500%" });
    gsap.to("#line8", { duration: 1, ease: "none", x: "-1800%" });
    gsap.to("#line9", { duration: 1, ease: "none", x: "-1700%" });
    gsap.to("#line10", { duration: 1, ease: "none", x: "-1700%" });
    gsap.to("#line11", { duration: 1, ease: "none", x: "-1800%" });


    
    return tl;
}





mainTL.add(dogrun)
.add(verticalbone) 
.add(wind1);

// .add(boneshadow)


// .add(wind2)


 //maintl.from("#bone",{duration:2, alpha:0, scale:2});  



 
 
 
 //gsap.to("#dog1", {duration: 0.02, autoAlpha:0});



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
// maintl.from("hero",{duration: 2, alpha:0});

// mainTL.from("#hero",{duration:1.5, alpha:0})
// .from("#hero h1",{duration:1, alpha:0, x:"-200"})
// .from("#hero h2",{duration:1.5, alpha:0, x:"-200"});