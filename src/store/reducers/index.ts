import { combineReducers } from "@reduxjs/toolkit";
import auth from "../auth/reducer";
import sidebarChats from "../../components/Sidebar/reducer";
import chat from "../../components/Chat/reducer";

export default combineReducers({
  auth,
  sidebarChats,
  chat,
});
