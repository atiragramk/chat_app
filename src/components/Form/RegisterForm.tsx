import { Button, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { StyledForm, StyledLink, StyledTextField } from "./style";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { toast } from "react-hot-toast";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name should contain at least 2 character")
    .max(20, "Max length for name is 20 character")
    .required("Name is required field"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("Email is required field"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be at least 8 characters."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
  attachment: yup.mixed(),
});

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  attachment?: File;
};

export const RegisterForm = () => {
  const onSubmit = async (
    data: Partial<FormData>,
    helpers: FormikHelpers<FormData>
  ) => {
    try {
      const { email, password, name, attachment } = data;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email!,
        password!
      );
      toast("You were registered succesfully", { icon: "💅" });
      helpers.resetForm();
      const storageRef = ref(
        storage,
        `avatars/${user.uid}/${attachment?.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, attachment!);

      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(user, {
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            email,
            photoURL: downloadURL,
          });
        });
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextField
        size="small"
        label="Name"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        placeholder="Enter your name"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <StyledTextField
        size="small"
        label="Email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        placeholder="Enter your email"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <StyledTextField
        size="small"
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        placeholder="Enter password"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <StyledTextField
        size="small"
        type="password"
        label="Confirm password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        value={formik.values.passwordConfirmation}
        onChange={formik.handleChange}
        error={
          formik.touched.passwordConfirmation &&
          Boolean(formik.errors.passwordConfirmation)
        }
        helperText={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
        placeholder="Confirm password"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        startIcon={<PhotoCamera />}
        aria-label="upload picture"
        component="label"
        variant="outlined"
        size="small"
      >
        <input
          id="file"
          name="attachment"
          hidden
          accept="image/*"
          type="file"
          onChange={(event) => {
            if (event.currentTarget.files) {
              formik.setFieldValue("attachment", event.currentTarget.files[0]);
            }
          }}
        />
        Add an avatar
      </Button>
      <Button color="primary" variant="contained" type="submit">
        Sign up
      </Button>
      <Typography color="secondary" variant="subtitle2">
        Already have an account? <StyledLink to="/login">Log in</StyledLink>
      </Typography>
    </StyledForm>
  );
};
