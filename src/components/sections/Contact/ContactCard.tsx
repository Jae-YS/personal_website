import { Box, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import type { ContactCardProps } from "@/types/index";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const ContactCard = ({ label, value, href }: ContactCardProps) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  useScrollFadeIn(cardRef);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        maxWidth: 280,
        px: 2.5,
        py: 2,
        bgcolor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        boxShadow: "none",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0.5,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadows[3],
        },
      }}
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ fontSize: "0.75rem" }}
      >
        {label}
      </Typography>

      {href ? (
        <Typography
          variant="body2"
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 500,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {value}
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {value}
        </Typography>
      )}
    </Box>
  );
};

export default ContactCard;
