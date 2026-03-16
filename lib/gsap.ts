import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)
gsap.registerPlugin(Draggable);

export default gsap;