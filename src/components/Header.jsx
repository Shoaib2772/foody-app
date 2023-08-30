import { Box, Button, Container, InputBase } from "@mui/material";
import foodyicon from "../assets/foodyicon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <Box sx={{ background: "#5A5959", py: "50px" }}>
      <Box>
        <Container
          sx={{
            display: { md: "flex", sm: "block", xs: "block" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ textAlign: { md: "start", sm: "center", xs: "center" } }}>
            <Box
              component="img"
              src={foodyicon}
              alt="foodyicon"
              sx={{ width: { md: "100%", sm: "40%", xs: "40%" } }}
            />
          </Box>
          <Box
            sx={{
              mt: { md: 0, sm: 4, xs: 4 },
              textAlign: { md: "none", sm: "center", xs: "center" },
            }}
          >
            <Button
              sx={{
                background: "#FF4343",
                color: "white",
                borderRadius: "5px",
                mr: 3,
                fontSize: { md: "16px", sm: "12px", xs: "10px" },
                "&:hover": {
                  background: "red",
                },
              }}
              onClick={() => Navigate("/login")}
            >
              Log Out
            </Button>
            <InputBase
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "white",
                height: 40,
              }}
              placeholder="Search Food...."
            />
          </Box>
        </Container>
      </Box>
      <Box>
        <Container
          sx={{
            textAlign: "center",
            pt: 8,
          }}
        >
          <Button
            sx={{
              background: "#FF4343",
              color: "white",
              borderRadius: "5px",
              mx: "5px",
              fontSize: { md: "16px", sm: "12px", xs: "10px" },
              "&:hover": {
                background: "red",
              },
            }}
          >
            All
          </Button>
          <Button
            sx={{
              background: "#FF4343",
              color: "white",
              borderRadius: "5px",
              fontSize: { md: "16px", sm: "12px", xs: "10px" },
              "&:hover": {
                background: "red",
              },
            }}
          >
            Break Fast
          </Button>
          <Button
            sx={{
              background: "#FF4343",
              color: "white",
              borderRadius: "5px",
              mx: "5px",
              fontSize: { md: "16px", sm: "12px", xs: "10px" },
              "&:hover": {
                background: "red",
              },
            }}
          >
            Lunch
          </Button>
          <Button
            sx={{
              background: "#FF4343",
              color: "white",
              borderRadius: "5px",
              fontSize: { md: "16px", sm: "12px", xs: "10px" },
              mt: { md: 0, sm: 0, xs: 1 },
              "&:hover": {
                background: "red",
              },
            }}
          >
            Dinner
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
