import { FC } from "react";
import { ImageData } from "../helpers/imageData";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardItemProps {
  imageData: ImageData;
}

const CardItem: FC<CardItemProps> = ({ imageData: { img, title, desc } }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        loading="lazy"
        sx={{ height: 140 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
