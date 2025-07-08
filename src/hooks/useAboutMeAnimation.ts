import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useAboutMeAnimation = (
  triggerRef: React.RefObject<HTMLElement>,
  containerRef: React.RefObject<HTMLElement>,
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (triggerRef.current) {
        gsap.from(triggerRef.current, {
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [triggerRef, containerRef]);
};
