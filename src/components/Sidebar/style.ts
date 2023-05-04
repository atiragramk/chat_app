import { Box, IconButton, TextField, Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.theme.palette.primary.dark};
  gap: 10px;
`;
export const StyledNavBar = styled(Stack)`
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 10px;
  color: ${(props) => props.theme.palette.secondary.light};
`;

export const StyledSearchBar = styled(TextField)`
  padding: 0 5px;
  .css-ittuaa-MuiInputAdornment-root {
    color: ${(props) => props.theme.palette.info.main};
  }
  .css-nz481w-MuiInputBase-input-MuiInput-input {
    color: ${(props) => props.theme.palette.info.main};
  }
  .css-18swyve-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    border-color: ${(props) => props.theme.palette.neutral.main};
  }
  .css-18swyve-MuiInputBase-root-MuiInput-root:after {
    border-color: ${(props) => props.theme.palette.neutral.main};
    border: none;
  }
`;

export const StyledUserChat = styled(Stack)`
  padding: 5px;
  cursor: pointer;
  align-items: center;
  color: ${(props) => props.theme.palette.primary.contrastText};
  :hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledMessage = styled(Typography)`
  color: ${(props) => props.theme.palette.info.main};
`;

export const StyledLogOutButton = styled(IconButton)`
  :hover {
    color: ${(props) => props.theme.palette.primary.light};
  }
`;
