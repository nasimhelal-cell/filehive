import Box from "@mui/material/Box";
import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function MainNavbar() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
    >
      <Logo />

      <SearchBar />

      <Avatar />
    </Box>
  );
}
