import { useEffect } from "react";
import { SelectedPage } from "@/types";

type UseAutoSelectPageProps = {
  sectionProgress: Record<string, number>;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  threshold?: number; 
};

export const useAutoSelectPage = ({
  sectionProgress,
  selectedPage,
  setSelectedPage,
  threshold = 0.3,
}: UseAutoSelectPageProps) => {
  useEffect(() => {
    let topPage: SelectedPage | null = null;
    let maxProgress = threshold;

    for (const [key, progress] of Object.entries(sectionProgress)) {
      if (progress > maxProgress) {
        maxProgress = progress;
        topPage = key as SelectedPage;
      }
    }

    if (topPage && topPage !== selectedPage) {
      setSelectedPage(topPage);
    }
  }, [sectionProgress, selectedPage, setSelectedPage, threshold]);
};
