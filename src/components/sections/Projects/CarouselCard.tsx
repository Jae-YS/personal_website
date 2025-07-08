import { JSX, useState } from "react";
import { Box, Typography, Chip, IconButton, Fade } from "@mui/material";
import { ArrowForwardIos, ArrowOutward } from "@mui/icons-material";
import * as SiIcons from "react-icons/si";
import type { CarouselProps } from "@/types/index";

const CarouselCard = ({
  title,
  description,
  image,
  techstack,
  link,
  keyfeatures,
}: CarouselProps) => {
  const [hovered, setHovered] = useState(false);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prev) => (prev === 0 ? 1 : 0));
  };

  const getIcon = (iconName?: string): JSX.Element | undefined => {
    if (!iconName) return undefined;
    const IconComponent = SiIcons[iconName as keyof typeof SiIcons];
    return IconComponent ? (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ml: "4px",
          "& svg": {
            fontSize: "1rem",
          },
        }}
      >
        <IconComponent />
      </Box>
    ) : undefined;
  };

  return (
    <Box
      className="project-card"
      sx={{
        position: "relative",
        width: 280,
        height: 400,
        overflow: "hidden",
        borderRadius: 4,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPage(0);
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: hovered ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.3)",
          zIndex: 2,
          transition: "background-color 0.4s ease",
        }}
      />

      <Fade in={hovered} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            height: "calc(100% - 40px)",
          }}
        >
          {page === 0 ? (
            <>
              <Typography variant="h6" color="white" fontWeight={700}>
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ lineHeight: 1.4, opacity: 0.9 }}
                >
                  {description}
                </Typography>
              )}
              {techstack && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {techstack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={getIcon(tech.icon)}
                      label={tech.name}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "#fff",
                        fontSize: "0.7rem",
                        backdropFilter: "blur(2px)",
                        "& .MuiChip-icon": {
                          color: "#fff",
                          marginLeft: "-4px",
                        },
                      }}
                    />
                  ))}
                </Box>
              )}
            </>
          ) : (
            <>
              {(keyfeatures?.length ?? 0) > 0 && (
                <Box sx={{ mt: 1 }}>
                  {(keyfeatures ?? []).map((feature, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      color="white"
                      sx={{ display: "block", mb: 0.5, fontSize: "0.8rem" }}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              )}
            </>
          )}

          <IconButton
            size="small"
            onClick={handleNext}
            sx={{ mt: "auto", alignSelf: "flex-end", color: "white" }}
          >
            <ArrowForwardIos sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Fade>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", bottom: 12, left: 12, zIndex: 4 }}
        >
          <ArrowOutward sx={{ color: "white", fontSize: 20 }} />
        </a>
      )}
    </Box>
  );
};

export default CarouselCard;
