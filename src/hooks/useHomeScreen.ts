import { useEffect } from "react";
import { gsap } from "gsap";

export const useHomeScreen = (
  splashRef: React.RefObject<HTMLElement>,
  setShowSplash: React.Dispatch<React.SetStateAction<boolean>>,
  showSplash: boolean
) => {
  useEffect(() => {
    if (!showSplash || !splashRef.current) return;

    const timeout = setTimeout(() => {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => setShowSplash(false),
      });
    }, 3200);

    return () => clearTimeout(timeout);
  }, [showSplash, setShowSplash, splashRef]);
};
