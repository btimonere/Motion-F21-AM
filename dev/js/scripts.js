import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);


const mainTL = gsap.timeline();


function donutspin (){
    const tl = gsap.timeline();
    //tl.to("#plaindoughnut",{rotation: "+=360", repeat: -1, ease: "Linear.easeNone", transformOrigin:"50% 50%"});
    tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function donutleft (){
    const tl = gsap.timeline();
    tl.to("#plaindoughnut",{duration: 2, ease: "none", x: "-1000"});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}








mainTL.add(donutspin(),"same")
.add(donutleft(),"same");



GSDevTools.create();