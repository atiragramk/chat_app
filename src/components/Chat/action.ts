import { PayloadAction } from "@reduxjs/toolkit";
import { Chat, MessageData, UserInfo } from "./reducer";
import { DocumentData } from "firebase/firestore";

export const chatInfoSet = (
  state: Chat,
  action: PayloadAction<{ combinedId: string; userInfo: UserInfo | null }>
) => {
  state.combinedId = action.payload.combinedId;
  state.userInfo = action.payload.userInfo;
};

export const chatMessagesSet = (
  state: Chat,
  action: PayloadAction<MessageData[]>
) => {
  state.messages = action.payload;
};
