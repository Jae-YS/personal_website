import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useProjectCardsReveal = (
  containerRef: React.RefObject<HTMLElement>,
  sectionRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from(sectionRef.current, {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      const cards = containerRef.current?.querySelectorAll(".project-card");
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, sectionRef]);
};
