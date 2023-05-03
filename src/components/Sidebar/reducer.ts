import { createSlice } from "@reduxjs/toolkit";
import { sidebarChatListCheck } from "./action";
import { DocumentData } from "firebase/firestore";

const SIDEBAR_CHAT_LIST_SLICE_NAME = "SIDEBAR_CHAT_LIST_SLICE_NAME";

export interface SidebarChatListState {
  chatsData: DocumentData | undefined;
}

const initialState: SidebarChatListState = {
  chatsData: undefined,
};

const sibebarChatListSlice = createSlice({
  name: SIDEBAR_CHAT_LIST_SLICE_NAME,
  initialState,
  reducers: {
    sidebarChatListCheck,
  },
});

export const { sidebarChatListCheck: sidebarChatListCheckAction } =
  sibebarChatListSlice.actions;

export default sibebarChatListSlice.reducer;
