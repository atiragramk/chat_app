import { Button, Typography } from "@mui/material";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";

import { StyledForm, StyledLink, StyledTextField } from "./style";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { toast } from "react-hot-toast";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email")
    .required("Email is required field"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be at least 8 characters."),
});

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const onSubmit = async (
    data: Partial<FormData>,
    helpers: FormikHelpers<FormData>
  ) => {
    try {
      const { email, password } = data;
      const user = await signInWithEmailAndPassword(auth, email!, password!);
      toast("You were login succesfully", { icon: "💅" });
      helpers.resetForm();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
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

      <Button color="primary" variant="contained" type="submit">
        Sign in
      </Button>

      <Typography color="secondary" variant="subtitle2">
        Don't have an account yet?{" "}
        <StyledLink to="/register">Sign up</StyledLink>
      </Typography>
    </StyledForm>
  );
};
