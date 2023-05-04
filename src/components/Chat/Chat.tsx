import {
  StyledBox,
  StyledChatAbsenceText,
  StyledMessagesWrapper,
} from "./style";
import { ChatInfo } from "./ChatInfo";
import { Message } from "./Message";
import { Input } from "./Input";
import { chatInfoSelector } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import {
  chatMessagesInProgressAction,
  chatMessagesSetAction,
  chatMessagesSuccessAction,
} from "./reducer";

export const Chat = () => {
  const { userInfo, combinedId, messages, loading } =
    useSelector(chatInfoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (combinedId) {
      const unSub = onSnapshot(doc(db, "chats", combinedId), (doc) => {
        dispatch(chatMessagesInProgressAction());
        doc.exists() && dispatch(chatMessagesSetAction(doc.data().messages));
        dispatch(chatMessagesSuccessAction());
      });

      return () => {
        unSub();
      };
    }
  }, [combinedId]);
  return (
    <StyledBox>
      <ChatInfo name={userInfo?.name} />
      <StyledMessagesWrapper about={userInfo ? "user" : ""}>
        {loading && <LinearProgress />}
        {userInfo ? (
          <>
            {!loading &&
              messages?.map((message) => {
                return <Message key={message.id} data={message} />;
              })}
          </>
        ) : (
          <StyledChatAbsenceText>
            There is no messages. Select chat to start messaging
          </StyledChatAbsenceText>
        )}
      </StyledMessagesWrapper>
      {userInfo && <Input />}
    </StyledBox>
  );
};
