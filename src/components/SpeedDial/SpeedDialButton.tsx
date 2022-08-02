import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SpeedDialStyled from "./SpeedDialStyled";

const actions = [{ icon: <WhatsAppIcon />, name: "Whats" }];

const ButtonContact: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDialStyled>
      <SpeedDial
        className="btn-celular"
        ariaLabel="SpeedDial controlled open example"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 100,
          fontSize: "100px",
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            sx={{
              backgroundColor: "green",
              color: "white",
              fontSize: "200px",
            }}
          />
        ))}
      </SpeedDial>
    </SpeedDialStyled>
  );
};

export default ButtonContact;
