import { Avatar, Typography, Stack } from "@mui/material";
import { StyledMessage, StyledUserChat } from "./style";

type UserChatProps = {
  photo: string;
};

export const UserChat: React.FC<UserChatProps> = ({ photo }) => {
  return (
    <StyledUserChat direction="row" gap={2}>
      <Avatar src={photo} sx={{ width: 48, height: 48 }} />
      <Stack>
        <Typography fontWeight={600}>Jane</Typography>
        <StyledMessage variant="subtitle2">Hello</StyledMessage>
      </Stack>
    </StyledUserChat>
  );
};
