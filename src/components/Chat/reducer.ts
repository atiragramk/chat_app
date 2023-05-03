import { createSlice } from "@reduxjs/toolkit";
import { chatInfoSet, chatMessagesSet } from "./action";

const CHAT_SLICE_NAME = "CHAT_SLICE_NAME";

export type UserInfo = {
  name: string;
  photoURL: string;
  id: string;
};

export type MessageData = {
  id: string;
  text: string;
  senderId: string;
  date: string;
  img?: string;
};

export interface Chat {
  combinedId: string | "";
  userInfo: UserInfo | null;
  messages: MessageData[] | undefined;
}

const initialState: Chat = {
  combinedId: "",
  userInfo: null,
  messages: undefined,
};

const chatSlice = createSlice({
  name: CHAT_SLICE_NAME,
  initialState,
  reducers: {
    chatInfoSet,
    chatMessagesSet,
  },
});

export const {
  chatInfoSet: chatInfoSetAction,
  chatMessagesSet: chatMessagesSetAction,
} = chatSlice.actions;

export default chatSlice.reducer;
