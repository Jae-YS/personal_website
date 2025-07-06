// shared/DividerLine.tsx
import { Box } from "@mui/material";

const DividerLine = ({ sx = {} }) => (
  <Box
    sx={{
      height: "1px",
      bgcolor: "#2C2B26",
      my: 4,
      ...sx,
    }}
  />
);

export default DividerLine;
