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

function Login() {
  // const router = useRouter();

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // console.log({ username, password });
  const handleApi = (e) => {
    e.preventDefault();
    // console.log({ username, password });
    axios
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.data.accessToken);
        localStorage.setItem("refreshToken", result.data.data.refreshToken);
        setErrors({
          username: "",
          password: "",
          message: "",
        });
        console.log(result.data.data);
        // router.push("/main");
      })
      .catch((error) => {
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
    let fields = Object.keys(errors);
    let err = errors;
    for (let field of fields) {
      const error = errors[field];
      err = {
        [field]: error[0] ?? "",
      };
    }
    setErrors(err);
  }, []);
  return (
    <div className="d-flex justify-content-between   ">
      <div >
        {!isEmpty(errors.message) && (
          <Alert severity="error">{errors.message}</Alert>
        )}
        <Box
          sx={{
            backgroundColor: "  ",
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
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <NavLink to="/auth/register">Register</NavLink>
              </Typography>
            </Stack>

            <TextField
              fullWidth
              label="Username"
              name="username"
              value={username}
              error={!isEmpty(errors.username)}
              helperText={errors.username}
              onChange={(e) => setName(e.target.value.trim())}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id={password}
              value={password}
              error={!isEmpty(errors.password)}
              helperText={errors.password}
            />

            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={handleApi}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </Box>
      </div>
      <div style={{ width: "50%" }}>
        <Bookimg />
      </div>
    </div>
  );
}

export default Login;
