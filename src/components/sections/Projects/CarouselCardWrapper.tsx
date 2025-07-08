import { useMediaQuery, Box } from "@mui/material";
import CarouselCardDesktop from "./CarouselCardDesktop";
import CarouselCardMobile from "./CarouselCardMobile";
import type { CarouselCardProps } from "@/types/index";
import { useState } from "react";

const CarouselCardWrapper = ({ items }: { items: CarouselCardProps[] }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  if (isMobile) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item) => (
          <CarouselCardMobile
            key={item.id}
            {...item}
            isExpanded={expandedId === item.id}
            onToggle={() =>
              setExpandedId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </Box>
    );
  }

  return (
    <>
      {items.map((item) => (
        <CarouselCardDesktop key={item.id} {...item} />
      ))}
    </>
  );
};

export default CarouselCardWrapper;
