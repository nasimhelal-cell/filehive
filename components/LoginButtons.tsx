import { doSocialLogin } from "@/lib/actions";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Stack } from "@mui/material";

const LoginButtons = () => {
  return (
    <form action={doSocialLogin}>
      <Stack spacing={2} direction={"row"}>
        <Button
          variant="outlined"
          color="inherit"
          type="submit"
          name="provider"
          value="github"
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          type="submit"
          name="provider"
          value="google"
          startIcon={<GoogleIcon />}
        >
          Google
        </Button>
      </Stack>
    </form>
  );
};

export default LoginButtons;
