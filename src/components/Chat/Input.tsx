import { Button, IconButton, Stack } from "@mui/material";
import { StyledInputWrapper, StyledTextField } from "./style";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useSelector } from "react-redux";
import { authStateSelector } from "../../store/auth/selector";
import { User } from "firebase/auth";
import { uid as randomID } from "uid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { chatInfoSelector } from "./selector";

export const Input = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File>();

  const { userInfo } = useSelector(chatInfoSelector);

  const { user } = useSelector(authStateSelector);
  const { uid } = user as User;
  const { combinedId } = useSelector(chatInfoSelector);

  const handleSend = async () => {
    setFile(undefined);
    setText("");
    if (file) {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", combinedId), {
            messages: arrayUnion({
              id: randomID(),
              text,
              senderId: uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      });
    } else {
      await updateDoc(doc(db, "chats", combinedId), {
        messages: arrayUnion({
          id: randomID(),
          text,
          senderId: uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", uid), {
      [`${combinedId}.date`]: serverTimestamp(),
      [`${combinedId}.lastMessage`]: text,
    });
    await updateDoc(doc(db, "userChats", userInfo?.id!), {
      [`${combinedId}.date`]: serverTimestamp(),
      [`${combinedId}.lastMessage`]: text,
    });
  };
  return (
    <StyledInputWrapper direction="row" alignItems="center">
      <StyledTextField
        size="small"
        placeholder="Write a message..."
        onChange={(event) => setText(event.target.value)}
        value={text}
        onKeyDown={(event) => event.code === "Enter" && handleSend()}
      />
      <Stack direction="row" gap={1}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(event) => {
              event.target.files && setFile(event.target.files[0]);
            }}
          />
          <AddPhotoAlternateIcon fontSize="small" />
        </IconButton>
        <Button
          onClick={handleSend}
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
    </StyledInputWrapper>
  );
};
