import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

import { useEffect, useState } from "react";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
//import { useAuth } from 'src/hooks/use-auth';
import { isEmpty } from "lodash";
import Bookimg from "../component/image/Bookimg";
import { NavLink } from "react-router-dom";

function Register() {
  //const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState([
    {
      email: "",
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  ]);
  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    message: "",
  });

  const Postdata = async () => {
    const api = "/auth/register";
    await axios
      .post(api, user)
      .then((res) => {
        setErrors({
          email: "",
          fullName: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
        //router.push("/auth/otp");
      })
      .catch((error) => {
        // alert(error);
        setErrors({
          ...errors,
          message: error,
        });
        let errorContent = errors;
        if (error.response && error.response.data.error) {
          errorContent = error.response.data.error.content;
        }
        setErrors(errorContent);
      });
  };
  useEffect(() => {
    if (isSubmit) {
      Postdata();
      setIsSubmit(false);
    }
  }, [isSubmit]);

  const setValueForField = (e) => {
    let newUser = {
      ...user,
      [e.target.name]: e.target.value.trim(),
    };
    setUser(newUser);
  };

  useEffect(() => {
    let fields = Object.keys(errors);
    let err = errors;
    for (let field of fields) {
      console.log("field:::", field);
      console.log("error:::", errors[field]);
      const error = errors[field];
      err = {
        [field]: error[0] ?? "",
      };
    }
    setErrors(err);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div style={{width: "550px"}}>
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              px: 3,
              py: "100px",
              width: "100%",
            }}
          >
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <NavLink to="/auth/login" underline="hover" variant="subtitle2">
                  Log in
                </NavLink>
              </Typography>
            </Stack>
            {!isEmpty(errors.message) && (
              <Alert severity="error">{errors.message}</Alert>
            )}
            <Stack>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={(e) => setValueForField(e)}
                style={{ marginBottom: "10px" }}
                error={!isEmpty(errors.email)}
                helperText={errors.email}
              />
              {/* {// console.log(user.email)} */}
              <TextField
                fullWidth
                label="Fullname"
                name="fullName"
                value={user.fullname}
                onChange={(e) => setValueForField(e)}
                style={{ marginBottom: "10px" }}
                error={!isEmpty(errors.fullName)}
                helperText={errors.fullName}
              />
              {/* {// console.log(user.fullname)} */}
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={user.username}
                onChange={(e) => setValueForField(e)}
                style={{ marginBottom: "10px" }}
                error={!isEmpty(errors.username)}
                helperText={errors.username}
              />
              {/* {// console.log(user.username)} */}
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={user.PassWord}
                onChange={(e) => setValueForField(e)}
                style={{ marginBottom: "10px" }}
                error={!isEmpty(errors.password)}
                helperText={errors.password}
              />
              {/* {// console.log(user.PassWord)} */}
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) => setValueForField(e)}
                style={{ marginBottom: "10px" }}
                error={!isEmpty(errors.confirmPassword)}
                helperText={errors.confirmPassword}
              />
            </Stack>
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              onClick={() => setIsSubmit(true)}
            >
              Continue
            </Button>
          </Box>
        </Box>
        </div>
        <div style={{ width: "50%", }}>
        <Bookimg />
      </div>
      </div>
    </>
  );
}

export default Register;
