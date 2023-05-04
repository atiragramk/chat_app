import { createSlice } from "@reduxjs/toolkit";
import {
  sidebarChatListCheck,
  searchError,
  searchInProgress,
  searchSuccess,
} from "./action";
import { DocumentData } from "firebase/firestore";

const SIDEBAR_CHAT_LIST_SLICE_NAME = "SIDEBAR_CHAT_LIST_SLICE_NAME";

export interface SidebarChatListState {
  chatsData: DocumentData | undefined;
  loading: boolean;
  error: boolean | null;
}

const initialState: SidebarChatListState = {
  chatsData: undefined,
  loading: false,
  error: null,
};

const sibebarChatListSlice = createSlice({
  name: SIDEBAR_CHAT_LIST_SLICE_NAME,
  initialState,
  reducers: {
    sidebarChatListCheck,
    searchInProgress,
    searchSuccess,
    searchError,
  },
});

export const {
  sidebarChatListCheck: sidebarChatListCheckAction,
  searchInProgress: searchInProgressAction,
  searchSuccess: searchSuccessAction,
  searchError: searchErrorAction,
} = sibebarChatListSlice.actions;

export default sibebarChatListSlice.reducer;
