import { Avatar, Stack, Typography } from "@mui/material";
import {
  StyledAttachImg,
  StyledAvatar,
  StyledMessage,
  StyledMessageWrapper,
} from "./style";

type MessageProps = {
  info?: string;
  children: string;
};
export const Message: React.FC<MessageProps> = ({ info, children }) => {
  return (
    <Stack sx={{ backgroundColor: "neutral.main" }}>
      <StyledMessageWrapper about={info}>
        <StyledAvatar />
        <Stack gap={1} paddingY={1} alignItems={info ? "end" : ""}>
          <StyledMessage about={info}>{children}</StyledMessage>
          <StyledAttachImg src="https://images.unsplash.com/photo-1682166811672-361327c6770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        </Stack>
      </StyledMessageWrapper>
      {/* <Typography variant="subtitle2">just now</Typography> */}
    </Stack>
  );
};
