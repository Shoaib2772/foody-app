import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  Box,
} from "@mui/material";
import HeaderSecond from "./HeaderSecond";

const SignUp = () => {
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
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography sx={{ fontSize: 23 }}>Sign Up</Typography>
          <Typography variant="caption">
            Please fill this form to create an account!
          </Typography>
        </Box>

        <TextField label="Name" variant="standard" fullWidth />
        <TextField label="Email" variant="standard" fullWidth />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <TextField label="Phone" variant="standard" fullWidth />
        <TextField label="Password" variant="standard" fullWidth />
        <TextField label="Confirm Password" variant="standard" fullWidth />
        <Box sx={{ pt: 2 }}>
          <Checkbox />
          accept all terms
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUp;
