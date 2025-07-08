import { useEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useScrollFadeIn = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
