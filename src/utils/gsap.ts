import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);

export { gsap, ScrollTrigger, ScrollToPlugin, Flip };
