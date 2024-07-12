import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";

const HomeNavbar = () => {
  return (
    <AppBar position="static" elevation={4}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavbar;
