// @flow
import * as React from "react";
import { Grid } from "@mui/material";
import CardSection from "../Card/CardContent";
import img2 from "../../assets/codigo2.jpg";
import img3 from "../../assets/storage.jpg";
import img4 from "../../assets/powerbi.jpg";
import img5 from "../../assets/reflexo.jpg";
import { styled } from "@mui/material/styles";
import Headline from "../Headline/Headline";

interface SectionContentProps {
  bgColor: boolean;
}

const SectionContentStyled = styled(Grid)<SectionContentProps>(
  ({ bgColor }) => ({
    backgroundColor: `${bgColor ? "white" : "#ebebf0"}`,
  })
);

const SectionContent: React.FC = () => {
  return (
    <SectionContentStyled bgColor>
      <Grid container sx={{ padding: 5 }}>
        <Grid
          item
          xs={12}
          md={6}
          xl={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            mb: 3,
          }}
        >
          <CardSection
            image={img2}
            title="Curso Phyton"
            type="CURSO PRESENCIAL"
            duration="3 MESES"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          xl={3}
          sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
        >
          <CardSection
            image={img3}
            title="Curso  Software"
            type="CURSO HÍBRIDO"
            duration="6 MESES"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          xl={3}
          sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
        >
          <CardSection
            image={img4}
            title="Curso PowerBI"
            type="EAD"
            duration="4 SEMANAS"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          xl={3}
          sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
        >
          <CardSection
            image={img5}
            title="Curso Data Science"
            type="EAD"
            duration="8 MESES"
          />
        </Grid>
      </Grid>
    </SectionContentStyled>
  );
};

export default SectionContent;
