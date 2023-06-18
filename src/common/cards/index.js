import * as React from "react";
import {
  Typography,
  CardMedia,
  CardActionArea,
  Card,
  CardContent
} from "@mui/material";

const CardView = ({
  title,
  image,
  description,
  children
}) => {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" const component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {children}

        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardView;
