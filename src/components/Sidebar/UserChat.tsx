import { Avatar, Typography, Stack } from "@mui/material";
import { StyledMessage, StyledUserChat } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { authStateSelector } from "../../store/auth/selector";
import { User } from "firebase/auth";
import { chatInfoSetAction } from "../Chat/reducer";

type UserChatProps = {
  photo: string;
  name: string;
  onSelect: () => void;
  text?: string;
  id: string;
};

export const UserChat: React.FC<UserChatProps> = ({
  photo,
  name,
  text,
  id,
  onSelect,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector(authStateSelector);
  const { uid } = user as User;

  const handleUserInfo = () => {
    const combinedId = uid > id ? uid + id : id + uid;
    dispatch(
      chatInfoSetAction({ combinedId, userInfo: { name, photoURL: photo, id } })
    );
  };

  return (
    <StyledUserChat
      onClick={() => {
        onSelect();
        handleUserInfo();
      }}
      direction="row"
      gap={2}
    >
      <Avatar src={photo} sx={{ width: 48, height: 48 }} />
      <Stack>
        <Typography fontWeight={600}>{name}</Typography>
        <StyledMessage variant="subtitle2">{text}</StyledMessage>
      </Stack>
    </StyledUserChat>
  );
};
