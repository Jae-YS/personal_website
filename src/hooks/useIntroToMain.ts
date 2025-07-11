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
      gsap.set(introRef.current, {
        position: "absolute",
        inset: 0,
        autoAlpha: 1,
      });

      gsap.set(mainContentRef.current, {
        position: "absolute",
        inset: 0,
        autoAlpha: 0,
      });

      mm.add("(min-width: 0px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
          .to(introRef.current, {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power1.out",
          })
          .to(mainContentRef.current, {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power1.out",
          });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [sectionRef, introRef, mainContentRef]);
};
