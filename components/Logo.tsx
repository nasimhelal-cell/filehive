import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import { Box, IconButton, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <PermMediaRoundedIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        FileHive
      </Typography>
    </Box>
  );
};

export default Logo;
