import { Box } from "@mui/material";

type SocialIconProps = {
  href: string;
  icon: React.ReactElement;
  backgroundColor?: string;
};

const SocialIcon = ({ href, icon, backgroundColor }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: backgroundColor || "transparent",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: backgroundColor
            ? "0px 2px 6px rgba(0, 0, 0, 0.2)"
            : "none",
          "&:hover": {
            transform: "scale(1.2)",
            boxShadow: backgroundColor
              ? "0px 4px 12px rgba(0, 0, 0, 0.25)"
              : "none",
          },
        }}
      >
        {icon}
      </Box>
    </a>
  );
};

export default SocialIcon;
