import EastIcon from "@mui/icons-material/East";
import { Box, Stack, Typography } from "@mui/material";
import LoginButtons from "./LoginButtons";

const HomeContent = () => {
  return (
    <Box
      sx={{
        width: "650px",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "50px",
      }}
    >
      <Typography variant="body1" color="primary">
        Welcome to file manager
      </Typography>

      <Typography variant="h2" color="initial">
        Easy and secure access to your content
      </Typography>

      <Typography mt={2} variant="h6" color="initial">
        Create, store, edit, remove your files and folders with your computer
      </Typography>

      <Stack spacing={4} direction={"row"} alignItems={"center"} mt={2}>
        <Typography variant="body1" color="primary">
          Use start with
        </Typography>
        <EastIcon />
        <LoginButtons />
      </Stack>
    </Box>
  );
};

export default HomeContent;
