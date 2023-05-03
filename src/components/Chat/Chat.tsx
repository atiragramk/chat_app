import { StyledBox, StyledMessagesWrapper } from "./style";
import { ChatInfo } from "./ChatInfo";
import { Message } from "./Message";
import { Input } from "./Input";
import { chatInfoSelector } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { chatMessagesSetAction } from "./reducer";

export const Chat = () => {
  const { userInfo, combinedId, messages } = useSelector(chatInfoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (combinedId) {
      const unSub = onSnapshot(doc(db, "chats", combinedId), (doc) => {
        doc.exists() && dispatch(chatMessagesSetAction(doc.data().messages));
      });

      return () => {
        unSub();
      };
    }
  }, [combinedId]);
  return (
    <StyledBox>
      <ChatInfo name={userInfo?.name} />
      <StyledMessagesWrapper>
        {userInfo ? (
          <>
            {messages?.map((message) => {
              return <Message data={message} />;
            })}
            {/* <Message info="owner">hello</Message>
            <Message>how are youuuuu</Message>
            <Message>hello</Message>
            <Message info="owner">sosissskaa</Message>
            <Message>hello</Message> */}
          </>
        ) : (
          <Typography padding={2}>
            There is no messages. Select chat to start messaging
          </Typography>
        )}
      </StyledMessagesWrapper>
      <Input />
    </StyledBox>
  );
};
