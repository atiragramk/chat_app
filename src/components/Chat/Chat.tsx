import { StyledBox, StyledMessagesWrapper } from "./style";
import { ChatInfo } from "./ChatInfo";
import { Message } from "./Message";
import { Input } from "./Input";

export const Chat = () => {
  return (
    <StyledBox>
      <ChatInfo />
      <StyledMessagesWrapper>
        <Message info="owner">hello</Message>
        <Message>how are youuuuu</Message>
        <Message>hello</Message>
        <Message info="owner">sosissskaa</Message>
        <Message>hello</Message>
      </StyledMessagesWrapper>
      <Input />
    </StyledBox>
  );
};
