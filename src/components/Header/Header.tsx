import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Container from "@mui/material/Container";
import HeaderStyled from "./HeaderStyled";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              margin: "0 50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
              }}
            >
              <LogoDevIcon
                sx={{
                  fontSize: "50px",
                }}
                className="icon-mobile"
              />
            </IconButton>
            <Box className="hamburguer">
              <MenuIcon sx={{ fontSize: "40px" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "80px",
              }}
              className="title-mobile"
            >
              <Typography variant="h6" component="div">
                Sobre
              </Typography>
              <Typography variant="h6" component="div">
                Cursos
              </Typography>
              <Typography variant="h6" component="div">
                Metodologia
              </Typography>
            </Box>
            <Box className="contact-mobile">
              <Button
                color="inherit"
                sx={{
                  backgroundColor: "primary.main",
                }}
              >
                INSCREVA-SE
              </Button>
              <Button color="inherit">
                <Stack direction="row" spacing={2}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="Cristiano Ronaldo" src="../images/cr7.png" />
                  </StyledBadge>
                </Stack>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderStyled>
  );
};

export default Header;
