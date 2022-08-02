import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";

interface PaperDefaultProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const PaperDefault: React.FC<PaperDefaultProps> = ({ icon, title, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 450,
          height: 300,
        },
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "60px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <IconButton>{icon}</IconButton>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: "35px",
            textAlign: "center",
            color: "#d4830a",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "16px", textAlign: "center" }}>
          {text}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PaperDefault;
