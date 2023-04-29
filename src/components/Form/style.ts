import { styled, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  padding: 24px;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  & ::placeholder {
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: none;
  &:visited {
    color: ${(props) => props.theme.palette.primary.light};
  }
  &:hover {
    text-decoration: underline;
  }
`;
