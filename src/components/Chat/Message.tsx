import { Avatar, Stack, Typography } from "@mui/material";
import {
  StyledAttachImg,
  StyledAvatar,
  StyledMessage,
  StyledMessageWrapper,
} from "./style";
import { MessageData } from "./reducer";
import { useSelector } from "react-redux";
import { authStateSelector } from "../../store/auth/selector";
import { User } from "firebase/auth";
import { chatInfoSelector } from "./selector";
import { useEffect, useRef } from "react";

type MessageProps = {
  data: MessageData;
};
export const Message: React.FC<MessageProps> = ({ data }) => {
  const { user } = useSelector(authStateSelector);
  const { userInfo } = useSelector(chatInfoSelector);
  const { uid, photoURL } = user as User;

  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);
  return (
    <Stack ref={ref} sx={{ backgroundColor: "neutral.main" }}>
      <StyledMessageWrapper about={data.senderId === uid ? "owner" : ""}>
        <StyledAvatar
          src={data.senderId === uid ? photoURL! : userInfo?.photoURL}
        />
        <Stack
          gap={1}
          paddingY={1}
          alignItems={data.senderId === uid ? "end" : ""}
        >
          {data.text && (
            <StyledMessage about={data.senderId === uid ? "owner" : ""}>
              {data.text}
            </StyledMessage>
          )}
          {data.img && (
            <>
              <StyledAttachImg src={data.img} />
            </>
          )}
        </Stack>
      </StyledMessageWrapper>
      {/* <Typography variant="subtitle2">just now</Typography> */}
    </Stack>
  );
};
