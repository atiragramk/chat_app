import { Box, IconButton, TextField, Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
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
