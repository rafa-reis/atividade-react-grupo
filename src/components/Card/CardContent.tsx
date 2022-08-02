// @flow
import * as React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface CardSectionProps {
  image: string;
  title: string;
  type: string;
  duration: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  image,
  title,
  type,
  duration,
}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          similique nostrum harum explicabo autem, architecto inventore, dolore,
          mollitia nemo aliquid eveniet accusantium.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          {" "}
          <LocationOnOutlinedIcon /> {type}{" "}
        </Button>
        <Button size="small">
          {" "}
          <ScheduleIcon /> {duration}{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardSection;
