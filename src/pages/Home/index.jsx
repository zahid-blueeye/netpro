import { Container, Grid } from "@mui/material";
import HomeServiceCard from "../../components/HomeServiceCard";
import services from "../../mockData/service";
const Home = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          {services.map(({ id, title, body }) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={4}>
                <HomeServiceCard body={body} title={title} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
