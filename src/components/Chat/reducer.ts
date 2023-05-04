import { createSlice } from "@reduxjs/toolkit";
import {
  chatInfoSet,
  chatMessagesSet,
  chatMessagesInProgress,
  chatMessagesSuccess,
} from "./action";

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
  loading: boolean;
}

const initialState: Chat = {
  combinedId: "",
  userInfo: null,
  messages: undefined,
  loading: false,
};

const chatSlice = createSlice({
  name: CHAT_SLICE_NAME,
  initialState,
  reducers: {
    chatInfoSet,
    chatMessagesSet,
    chatMessagesInProgress,
    chatMessagesSuccess,
  },
});

export const {
  chatInfoSet: chatInfoSetAction,
  chatMessagesSet: chatMessagesSetAction,
  chatMessagesInProgress: chatMessagesInProgressAction,
  chatMessagesSuccess: chatMessagesSuccessAction,
} = chatSlice.actions;

export default chatSlice.reducer;
