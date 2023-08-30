import {
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import HeaderSecond from "./HeaderSecond";

const Login = () => {
  return (
    <Box sx={{ background: "#5A5959", pb: 10 }}>
      <HeaderSecond />
      <Paper
        elevation={10}
        sx={{
          width: "400px",
          padding: 4,
          mx: "40%",
          mt: "3%",
        }}
      >
        <Box align="center">
          <Avatar sx={{ background: "#3aa4de" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ fontSize: 23 }}>Log In</Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <TextField label="Username" variant="standard" fullWidth required />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            fullWidth
            required
          />
          <Box sx={{ pt: 2 }}>
            <Checkbox />
            Remember me
          </Box>
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          LogIn
        </Button>
        <Typography sx={{ pt: 7 }}>
          <Link to="#">Forgor Password</Link>
        </Typography>
        <Typography sx={{ pt: 1 }}>
          You have not Account ?<Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
