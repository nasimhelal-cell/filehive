import { doLogout } from "@/lib/actions";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutBtn = () => {
  return (
    <form action={doLogout}>
      <Button
        variant="contained"
        color="error"
        type="submit"
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </form>
  );
};

export default LogoutBtn;
