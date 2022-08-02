import { Typography, Box } from "@mui/material";
import * as React from "react";
import HeadlineStyled from "../Headline/HeadlineStyled";
import TelegramIcon from "@mui/icons-material/Telegram";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface HeadlineProps {
  title: string;
}
const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <HeadlineStyled>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          className="title-newsletter"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          Receba Nossa Newsletter
        </Typography>
      </Box>
      <Box
        className="newsletter"
        component="form"
        sx={{
          "& > :not(style)": { m: 0, width: "10ch" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          placeholder="Digite seu email"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px 0px 0px 10px",
            display: "flex",
            justifyContent: "center",
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "0px 10px 10px 0px",
            padding: "5.5px 50px",
          }}
        >
          <TelegramIcon
            className="icon-pulsate"
            sx={{
              fontSize: "45px",
            }}
          />{" "}
        </Button>
      </Box>
    </HeadlineStyled>
  );
};

export default Headline;
