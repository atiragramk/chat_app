import { Stack, Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { StyledChatInfoWrapper, StyledIconButton } from "./style";

export const ChatInfo: React.FC<{ name: string | undefined }> = ({ name }) => {
  return (
    <StyledChatInfoWrapper>
      <Typography fontWeight={600}>{name && name}</Typography>
      <Stack direction="row">
        <StyledIconButton sx={{ color: "secondary.light" }}>
          <VideocamIcon fontSize="small" />
        </StyledIconButton>
        <StyledIconButton>
          <PersonAddIcon fontSize="small" />
        </StyledIconButton>
        <StyledIconButton>
          <MoreHorizIcon fontSize="small" />
        </StyledIconButton>
      </Stack>
    </StyledChatInfoWrapper>
  );
};
