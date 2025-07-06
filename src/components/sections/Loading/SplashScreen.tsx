import { Box, useTheme } from "@mui/material";
import BouncyText from "@/components/shared/BouncyText";
import { forwardRef } from "react";

const SplashScreen = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 16px",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        opacity: 1,
      }}
    >
      <BouncyText text="Welcome to my website." />
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          height: "4px",
          backgroundColor: theme.palette.customColors.grey20,
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          mt: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            position: "absolute",
            left: 0,
            top: 0,
            transformOrigin: "left center",
            animation: "growBar 3.3s ease-out forwards",
          }}
        />
      </Box>
    </div>
  );
});

SplashScreen.displayName = "SplashScreen";

export default SplashScreen;
