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
        {items.map(({ id, ...rest }) => (
          <CarouselCardMobile
            key={id}
            id={id}
            {...rest}
            isExpanded={expandedId === id}
            onToggle={() => setExpandedId((prev) => (prev === id ? null : id))}
          />
        ))}
      </Box>
    );
  }

  return (
    <>
      {items.map(({ id, ...rest }) => (
        <CarouselCardDesktop key={id} id={id} {...rest} />
      ))}
    </>
  );
};

export default CarouselCardWrapper;
