import { Container, Grid } from "@mui/material";
import imageDataList, { ImageData } from "../helpers/imageData";
import CardItem from "./CardItem";

const Main = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        {imageDataList.map((data: ImageData, index) => (
          <Grid key={index} item xs={12} md={6} lg={3}>
            <CardItem imageData={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
