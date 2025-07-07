import { useCallback } from "react";
import { Flip } from "@/utils/gsap";

type Props = {
  isDark: boolean;
  setMode: (mode: "light" | "dark") => void;
  containerRef: React.RefObject<HTMLElement>;
};

export const useToggleTheme = ({ isDark, setMode, containerRef }: Props) => {
  const handleClick = useCallback(() => {
    if (!containerRef.current) return;

    const state = Flip.getState(containerRef.current);

    setMode(isDark ? "light" : "dark");

    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [isDark, setMode, containerRef]);

  return { handleClick };
};
