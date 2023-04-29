import { Typography } from "@mui/material";
import { RegisterForm } from "../../components/Form";
import { StyledBox } from "./style";

const Register = () => {
  return (
    <StyledBox>
      <Typography fontWeight={700} color="secondary" variant="h6">
        Baguette Chat
      </Typography>
      <Typography color="secondary" variant="subtitle2">
        Register
      </Typography>
      <RegisterForm />
    </StyledBox>
  );
};

export default Register;
