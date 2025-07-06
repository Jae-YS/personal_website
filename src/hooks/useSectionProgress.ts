import { useEffect, useState } from "react";

export const useSectionProgress = (sectionIds: string[]) => {
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const updateProgress = () => {
      const viewportHeight = window.innerHeight;
      const newProgress: Record<string, number> = {};

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const height = rect.height;

        const visible =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        const clamped = Math.max(0, Math.min(visible, height));
        newProgress[id] = parseFloat((clamped / height).toFixed(2));
      });

      setSectionProgress(newProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [sectionIds]);

  return sectionProgress;
};
