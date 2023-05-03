import { Avatar, InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {
  StyledBox,
  StyledLogOutButton,
  StyledNavBar,
  StyledSearchBar,
} from "./style";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { UserChat } from "./UserChat";
import { User, signOut } from "firebase/auth";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

import { useDispatch, useSelector } from "react-redux";
import { authStateCheckAction } from "../../store/auth/reducer";
import { authStateSelector } from "../../store/auth/selector";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { sidebarChatListCheckAction } from "./reducer";
import { chatsStateSelector } from "./selector";
import { chatInfoSetAction } from "../Chat/reducer";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(authStateSelector);
  const { chatsData } = useSelector(chatsStateSelector);

  const [searchUser, setSearchUser] = useState<DocumentData>();
  const [userName, setUserName] = useState("");

  const { displayName, photoURL, uid } = user as User;

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userChats", uid), (doc) => {
      dispatch(sidebarChatListCheckAction(doc.data()));
      console.log(doc.data());
    });
    return () => {
      unSub();
    };
  }, [uid]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(authStateCheckAction({}));
      dispatch(chatInfoSetAction({ combinedId: "", userInfo: null }));
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleSearchUser = async (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    try {
      setSearchUser(undefined);
      setUserName(event.target.value);
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("name", "==", event.target.value));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data());
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = async () => {
    const combinedId =
      uid > searchUser?.uid ? uid + searchUser?.uid : searchUser?.uid + uid;

    try {
      const docRef = doc(db, "chats", combinedId);
      const res = await getDoc(docRef);
      if (!res.exists()) {
        await setDoc(docRef, { messages: [] });

        await updateDoc(doc(db, "userChats", uid), {
          [`${combinedId}.userInfo`]: {
            uid: searchUser?.uid,
            name: searchUser?.name,
            photoURL: searchUser?.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", searchUser?.uid), {
          [`${combinedId}.userInfo`]: {
            uid,
            name: displayName,
            photoURL: photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUserName("");
    setSearchUser(undefined);
  };
  return (
    <StyledBox>
      <StyledNavBar
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontWeight={600}>Baguette Chat</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar src={photoURL ? photoURL : ""} alt={displayName!} />
          <Typography>{displayName}</Typography>
          <StyledLogOutButton color="primary" onClick={handleSignOut}>
            <LogoutIcon />
          </StyledLogOutButton>
        </Stack>
      </StyledNavBar>
      <Stack>
        <StyledSearchBar
          placeholder="Find user"
          size="small"
          variant="standard"
          fullWidth
          onChange={handleSearchUser}
          value={userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {searchUser && (
          <>
            <UserChat
              onSelect={handleSelect}
              photo={searchUser.photoURL}
              name={searchUser.name}
              id={searchUser?.uid}
            />
          </>
        )}
        {chatsData &&
          Object.entries(chatsData).map((chat) => {
            const { photoURL, name, uid } = chat[1].userInfo;
            return (
              <UserChat
                key={chat[0]}
                text={chat[1].lastMessage}
                photo={photoURL}
                name={name}
                id={uid}
                onSelect={handleSelect}
              />
            );
          })}
      </Stack>
    </StyledBox>
  );
};
