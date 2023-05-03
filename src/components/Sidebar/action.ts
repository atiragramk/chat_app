import { PayloadAction } from "@reduxjs/toolkit";
import { SidebarChatListState } from "./reducer";
import { DocumentData } from "firebase/firestore";

export const sidebarChatListCheck = (
  state: SidebarChatListState,
  action: PayloadAction<DocumentData | undefined>
) => {
  state.chatsData = action.payload;
};
