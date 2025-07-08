import { Box, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";

type Props = {
  sx?: SxProps;
};

const DividerLine = ({ sx = {} }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "1px",
        width: "100%",
        bgcolor:
          theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
        border: "none",
        boxShadow: "none",
        my: 4,
        ...sx,
      }}
    />
  );
};

export default DividerLine;
