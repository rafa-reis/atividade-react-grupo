import React from "react";
import { Grid } from "@mui/material";
import AccordionContentStyle from "./AccordionContentStyle";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const AccordionContent: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <AccordionContentStyle>
      <Grid container maxWidth={"xl"}>
        <Grid item xs={12} sm={12}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ margin: "0 25px" }}
          >
            <AccordionSummary
              expandIcon={
                <AddCircleOutlinedIcon
                  sx={{ fontSize: "45px", color: "#d4830a" }}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "70%",
                  flexShrink: 0,
                  padding: "10px",
                  fontFamily: "Poppins",
                }}
              >
                General settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ margin: "0 25px" }}
          >
            <AccordionSummary
              expandIcon={
                <AddCircleOutlinedIcon
                  sx={{ fontSize: "45px", color: "#d4830a" }}
                />
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  padding: "10px",
                  fontFamily: "Poppins",
                }}
              >
                Users
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ margin: "0 25px" }}
          >
            <AccordionSummary
              expandIcon={
                <AddCircleOutlinedIcon
                  sx={{ fontSize: "45px", color: "#d4830a" }}
                />
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: "70%",
                  flexShrink: 0,
                  padding: "10px",
                  fontFamily: "Poppins",
                }}
              >
                Advanced settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ margin: "0 25px" }}
          >
            <AccordionSummary
              expandIcon={
                <AddCircleOutlinedIcon
                  sx={{ fontSize: "45px", color: "#d4830a" }}
                />
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  width: "70%",
                  flexShrink: 0,
                  padding: "10px",
                  fontFamily: "Poppins",
                }}
              >
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            sx={{ margin: "0 25px" }}
          >
            <AccordionSummary
              expandIcon={
                <AddCircleOutlinedIcon
                  sx={{ fontSize: "45px", color: "#d4830a" }}
                />
              }
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  padding: "10px",
                  fontFamily: "Poppins",
                }}
              >
                Learn More
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </AccordionContentStyle>
  );
};

export default AccordionContent;
