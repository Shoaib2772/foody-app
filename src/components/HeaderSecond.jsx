import { Box } from "@mui/material";
import foodyicon from "../assets/foodyicon.svg";

const HeaderSecond = () => {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          px: 2,
        }}
      >
        <Box component="img" src={foodyicon} alt="foodyicon" width="15%" />
      </Box>
    </div>
  );
};

export default HeaderSecond;
