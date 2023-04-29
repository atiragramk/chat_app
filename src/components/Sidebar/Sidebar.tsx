import { Avatar, IconButton, InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { StyledBox, StyledNavBar, StyledSearchBar } from "./style";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { UserChat } from "./UserChat";

export const Sidebar = () => {
  return (
    <StyledBox>
      <StyledNavBar
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontWeight={600}>Baguette Chat</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <Typography>john</Typography>
          <IconButton color="primary">
            <LogoutIcon />
          </IconButton>
        </Stack>
      </StyledNavBar>
      <Stack>
        <StyledSearchBar
          placeholder="Find user"
          size="small"
          variant="standard"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <UserChat photo="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" />
        <UserChat photo="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" />
        <UserChat photo="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" />
      </Stack>
    </StyledBox>
  );
};
