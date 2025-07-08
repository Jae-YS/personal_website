import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useIntroToMainTransition = (
  sectionRef: React.RefObject<HTMLElement>,
  introRef: React.RefObject<HTMLElement>,
  mainContentRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.set(mainContentRef.current, { autoAlpha: 0 });

      mm.add(
        {
          isMobileOrTablet: "(max-width: 1024px)",
          isDesktop: "(min-width: 1025px)",
        },
        (context) => {
          const conditions = context.conditions ?? {}; 
          const isMobileOrTablet = conditions.isMobileOrTablet;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: isMobileOrTablet ? "+=250%" : "+=150%",
              scrub: true,
              pin: true,
            },
          });

          tl.to(introRef.current, {
            autoAlpha: 0,
            duration: isMobileOrTablet ? 0.8 : 0.3,
          })
            .to(mainContentRef.current, {
              autoAlpha: 1,
              duration: isMobileOrTablet ? 1 : 0.4,
            })
            .to({}, { duration: isMobileOrTablet ? 1.5 : 0.6 });
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [sectionRef, introRef, mainContentRef]);
};
