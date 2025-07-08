import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export const useIntroToMainTransition = (
  sectionRef: React.RefObject<HTMLElement>,
  introRef: React.RefObject<HTMLElement>,
  mainContentRef: React.RefObject<HTMLElement>
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(mainContentRef.current, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(introRef.current, { autoAlpha: 0, duration: 0.3 })
        .to(mainContentRef.current, { autoAlpha: 1, duration: 0.4 })
        .to({}, { duration: 0.6 });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, introRef, mainContentRef]);
};
