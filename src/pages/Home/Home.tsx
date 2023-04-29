import { Box } from "@mui/material";
import { Chat } from "../../components/Chat";

import { Sidebar } from "../../components/Sidebar";
import { StyledBox } from "./style";

const Home = () => {
  return (
    <StyledBox>
      <Sidebar />
      <Chat />
    </StyledBox>
  );
};

export default Home;
