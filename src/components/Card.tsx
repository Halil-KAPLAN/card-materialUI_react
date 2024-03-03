import { FC } from "react";
import { ImageData } from "../helpers/imageData";

interface CardProps {
  imageData: ImageData;
}

const Card: FC<CardProps> = ({ imageData: { img, title, desc } }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
