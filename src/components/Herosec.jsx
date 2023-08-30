import { Box, Button, Container, Grid, Typography } from "@mui/material";
import bg from "../assets/bg.png";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import burgur from "../assets/burgur.png";
import grill from "../assets/grill.png";
import pancake from "../assets/pancake.png";
import ramen from "../assets/ramen.png";

const Herosec = () => {
  const cards = [
    {
      img: cake1,
      title: "Boiled Eggs",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "10.00",
    },
    {
      img: ramen,
      title: "RAMEN",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "25.00",
    },
    {
      img: grill,
      title: "GRILLED CHICKEN",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "45.00",
    },
    {
      img: cake2,
      title: "CAKE",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "18.00",
    },
    {
      img: burgur,
      title: "BURGER",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "23.00",
    },
    {
      img: pancake,
      title: "PANCAKE",
      desc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      price: "25.00",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{ pb: 6 }}>
        <Grid container align="center">
          {cards.map((item, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(189, 185, 185, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)",
                  backdropFilter: "blur(13.184196472167969px)",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 12,
                  width: { md: "350px", sm: "350px", xs: "285px" },
                  py: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  height="100%"
                  width="100%"
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { md: "16px", sm: "14px", xs: "12px" },
                      color: "white",
                      ml: 2,
                      mt: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <br />
                  <Typography
                    sx={{
                      fontSize: { md: "12px", sm: "10px", xs: "9px" },
                      mx: 2,
                      color: "white",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Button
                    sx={{
                      background: "#FF4343",
                      color: "white",
                      borderRadius: "5px",
                      height: 20,
                      width: 10,
                      ml: { md: 12, sm: 10, xs: 7 },
                      mt: 4,
                    }}
                  >
                    ${item.price}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Herosec;
