import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
};

const ContactCard = ({ label, value, href }: ContactCardProps) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    const el = cardRef.current;
    if (!el) return;

    const state = Flip.getState(el);

    setExpanded((prev) => !prev); // this triggers layout changes

    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <Box
      ref={cardRef}
      onClick={handleClick}
      sx={{
        width: expanded ? "100%" : 280,
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: theme.shadows[expanded ? 6 : 2],
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      {href ? (
        <Typography
          variant="body1"
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.primary.main, textDecoration: "none" }}
        >
          {value}
        </Typography>
      ) : (
        <Typography variant="body1">{value}</Typography>
      )}
    </Box>
  );
};

export default ContactCard;
