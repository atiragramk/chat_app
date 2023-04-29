import { Button, IconButton, Stack } from "@mui/material";
import { StyledInputWrapper, StyledTextField } from "./style";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";

export const Input = () => {
  return (
    <StyledInputWrapper direction="row" alignItems="center">
      <StyledTextField placeholder="Write a message..." />
      <Stack direction="row" gap={1}>
        <IconButton color="primary" aria-label="upload file" component="label">
          <input hidden accept=".pdf,.doc,.docx,image/*,audio/*" type="file" />
          <AttachFileIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <AddPhotoAlternateIcon fontSize="small" />
        </IconButton>
        <Button variant="contained" size="small" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </StyledInputWrapper>
  );
};
