import {
  Avatar,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const StyledBox = styled(Box)`
  flex: 2;
`;

export const StyledChatInfoWrapper = styled(Stack)`
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.secondary.light};
`;

export const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.palette.secondary.light};
  :hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
`;

export const StyledMessageWrapper = styled(Stack)`
  flex-direction: ${(props) =>
    props.about === "owner" ? "row-reverse" : "row"};
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  .css-43cs0v-MuiStack-root {
    align-items: ${(props) =>
      props.about === "owner" ? "flex-end" : "flex-start"};
  }
`;

export const StyledAttachImg = styled("img")`
  width: 50%;
`;

export const StyledMessagesWrapper = styled(Stack)`
  background-color: ${(props) => props.theme.palette.neutral.main};
  height: ${(props) =>
    props.about === "user" ? `calc(100% - 120px)` : "100%"};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.primary.dark};
    border-radius: 5px;
  }
`;

export const StyledMessage = styled(Typography)`
  background-color: ${(props) =>
    props.about === "owner"
      ? props.theme.palette.primary.light
      : props.theme.palette.primary.dark};
  min-width: fit-content;
  max-width: 90%;
  padding: 8px 16px;
  border-radius: ${(props) =>
    props.about === "owner" ? "5px 0px 5px 5px" : "0px 5px 5px 5px"};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

export const StyledTextField = styled(TextField)`
  flex: 2;
  .css-1m8wpkr-MuiInputBase-root-MuiOutlinedInput-root {
    height: 40px;
  }
`;

export const StyledInputWrapper = styled(Stack)`
  background-color: ${(props) => props.theme.palette.info.main};
  padding: 12px;
`;

export const StyledChatAbsenceText = styled(Typography)`
  text-align: center;
  font-style: italic;
  padding: 16px;
`;
