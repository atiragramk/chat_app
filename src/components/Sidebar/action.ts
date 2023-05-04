import { PayloadAction } from "@reduxjs/toolkit";
import { SidebarChatListState } from "./reducer";
import { DocumentData } from "firebase/firestore";

export const sidebarChatListCheck = (
  state: SidebarChatListState,
  action: PayloadAction<DocumentData | undefined>
) => {
  state.chatsData = action.payload;
};

export const searchInProgress = (state: SidebarChatListState) => {
  state.loading = true;
};

export const searchSuccess = (state: SidebarChatListState) => {
  state.loading = false;
};

export const searchError = (state: SidebarChatListState) => {
  state.error = true;
};
