import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useIntroToMainTransition = (
  sectionRef: React.RefObject<HTMLElement>,
  introRef: React.RefObject<HTMLElement>,
  mainContentRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    if (!sectionRef.current || !introRef.current || !mainContentRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.set(introRef.current, { autoAlpha: 1 });
      gsap.set(mainContentRef.current, { autoAlpha: 0 });

      mm.add("(min-width: 0px)", () => {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=150%",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          })
          .to(introRef.current, {
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
          }, 0)
          .to(mainContentRef.current, {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          }, 0);
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [sectionRef, introRef, mainContentRef]);
};
