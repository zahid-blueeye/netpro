import { Box, Container, Grid, Typography } from "@mui/material";
import HomeServiceCard from "../../components/HomeServiceCard";
import services from "../../mockData/service";
const Home = () => {
  return (
    <div>
      <Container>
        <Typography color="secondary.main" variant="h6" my={2} fontWeight={600}>
          <Box
            sx={{
              mr: 1,
              display: "inline-block",
              width: 14,
              height: 26,
              bgcolor: "secondary.main",
              position: "relative",
              transform: "scale(1.2)",
              top: 4,
              zIndex: -1,
              "&::after": {
                content: '""',
                height: 20,
                width: 30,
                top: 4,
                backgroundColor: "white",
                position: "absolute",
                transform: "rotate(45deg)",
                zIndex: 3,
              },
            }}
          ></Box>
          BİZ NƏ EDİRİK?
        </Typography>
        <Typography variant="h4" my={4} color="primary" fontWeight={600}>
          Xidmetler
        </Typography>
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
