// @flow
import { Grid } from "@mui/material";
import * as React from "react";
import PaperDefault from "../Paper/PaperDefault";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import styled from "styled-components";
interface SectionTextProps {
  bgColor: boolean;
}

const SectionTextStyled = styled(Grid)<SectionTextProps>(({ bgColor }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  /*  width: "100vw",
  height: "550px",
  overflowY: "auto", */
  backgroundColor: `${bgColor ? "white" : "#ebebf0"}`,
}));

const SectionText: React.FC<SectionTextProps> = ({ bgColor }) => {
  return (
    <SectionTextStyled bgColor={bgColor}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 5,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <PaperDefault
            icon={
              <OndemandVideoIcon sx={{ fontSize: "70px", color: "#3f93f3" }} />
            }
            title="assista aulas online"
            text="сom qualidade 4K de qualquer dispositivo, em qualquer hora e lugar."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <PaperDefault
            icon={
              <DeveloperBoardOutlinedIcon
                sx={{ fontSize: "70px", color: "#3f93f3" }}
              />
            }
            title="aprenda na prática"
            text="aperfeiçoe seu conhecimento com tarefas práticas para empresas reais."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <PaperDefault
            icon={
              <ChatOutlinedIcon sx={{ fontSize: "70px", color: "#3f93f3" }} />
            }
            title="obtenha feedback"
            text="receba feedback e acompanhamento personalizado do mentor ao longo do curso."
          />
        </Grid>
      </Grid>
    </SectionTextStyled>
  );
};

export default SectionText;
