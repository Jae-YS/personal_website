import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useHeroFadeIn = (
  heroRef: React.RefObject<HTMLElement>,
  headingRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!headingRef.current || !buttonRef.current) return;

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [heroRef, headingRef, buttonRef]);
};
