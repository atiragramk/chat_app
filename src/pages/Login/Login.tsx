import { Typography } from "@mui/material";
import { LoginForm } from "../../components/Form";
import { StyledBox } from "../Register/style";

const Login = () => {
  return (
    <StyledBox>
      <Typography fontWeight={700} color="secondary" variant="h6">
        Baguette Chat
      </Typography>
      <Typography color="secondary" variant="subtitle2">
        Login
      </Typography>
      <LoginForm />
    </StyledBox>
  );
};

export default Login;
