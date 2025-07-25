import {
  Box,
  Typography,
  Chip,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { ExpandMore, ArrowOutward, ArrowForwardIos } from "@mui/icons-material";
import type { CarouselCardProps } from "@/types/index";
import { getIcon } from "@/utils/iconMap";
import { useState } from "react";

type CarouselCardMobileProps = CarouselCardProps & {
  isExpanded: boolean;
  onToggle: () => void;
};

const CarouselCardMobile = ({
  title,
  description,
  image,
  techstack,
  link,
  keyfeatures,
  isExpanded,
  onToggle,
}: CarouselCardMobileProps) => {
  const [page, setPage] = useState(0);
  const handleNext = () => setPage((prev) => (prev === 0 ? 1 : 0));

  return (
    <Box sx={{ mb: 2, px: 1 }}>
      <List disablePadding>
        <ListItemButton onClick={onToggle}>
          <ListItemIcon>
            <Box
              component="img"
              src={image}
              alt={`${title}-thumb`}
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1,
                objectFit: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight={600}>{title}</Typography>}
          />
          <ExpandMore
            sx={{
              transform: isExpanded
                ? "rotate(180deg) scale(1.1)"
                : "rotate(0deg) scale(1)",
              transition: "transform 0.3s ease, scale 0.3s ease",
              "&:hover": {
                transform: isExpanded
                  ? "rotate(180deg) scale(1.2)"
                  : "rotate(0deg) scale(1.1)",
              },
            }}
          />
        </ListItemButton>
      </List>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ width: "100%", height: 200, objectFit: "cover" }}
          />
          <Box sx={{ p: 2, backgroundColor: "#121212" }}>
            {page === 0 ? (
              <>
                <Typography variant="h6" color="white" gutterBottom>
                  {title}
                </Typography>
                {description && (
                  <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                    {description}
                  </Typography>
                )}
                {techstack && (
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                  >
                    {techstack.map((tech, idx) => (
                      <Chip
                        key={idx}
                        icon={getIcon(tech.icon)}
                        label={tech.name}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          color: "#fff",
                          fontSize: "0.75rem",
                          px: 1,
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
              <Box sx={{ mt: 1 }}>
                {(keyfeatures ?? []).map((feature, i) => (
                  <Typography
                    key={i}
                    variant="caption"
                    color="white"
                    display="block"
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>
            )}
            <IconButton
              size="small"
              onClick={handleNext}
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                color: "white",
              }}
            >
              <ArrowForwardIos sx={{ fontSize: 18 }} />
            </IconButton>

            {link && (
              <Box sx={{ mt: 1 }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ArrowOutward sx={{ color: "white", fontSize: 20 }} />
                </a>
              </Box>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CarouselCardMobile;
