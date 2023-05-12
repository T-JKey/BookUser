import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { AutoTabProvider } from "react-auto-tab";
import { useEffect, useState } from "react";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
//import { useAuth } from 'src/hooks/use-auth';
import { isEmpty } from "lodash";
import Bookimg from "../component/image/Bookimg";
import { NavLink } from "react-router-dom";

export default function Otp() {
  // const router = useRouter();
  // xử lý focus
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  // xử lý đồng hồ
  const [countdown, setCountdown] = useState(10); // initial countdown time
  const [isCountdownDone, setIsCountdownDone] = useState(false); // flag to indicate if countdown is done
  const [but, setBut] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      setIsCountdownDone(true);
      setBut(true);
      return; // stop countdown if it reaches 0
    }

    const countdownInterval = setInterval(() => {
      setCountdown((countdown) => countdown - 1); // decrement countdown time
    }, 1000);

    return () => clearInterval(countdownInterval); // clear interval when component unmounts
  }, [countdown]);
  // xử lý onclick
  const handeleContine = () => {
    alert("Đăng kí thành công chuyển qua trang login");
  };
  const handeleResend = () => {
    alert("Gửi lại mã");
    setIsCountdownDone(false);
    setCountdown(10);
    setBut(false);
  };
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
          marginTop: -"16px",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
            marginTop: "-30px",
          }}
        >
          <Stack spacing={1} sx={{ mb: 2 }}>
            <Typography variant="h4">OTP</Typography>
            <Typography color="text.secondary" variant="body2">
              Already have an account? &nbsp;
              <NavLink to ="/auth/login" underline="hover" variant="subtitle2">
                Log in
              </NavLink>
            </Typography>
          </Stack>
          <h1>OTP code verification</h1>
          <Typography color="text.secondary" variant="body2" style={{ marginBottom: "40px" }}>
            Please enter OTP{" "}
            {isCountdownDone ? (
              <span style={{ color: "red" }}>time up</span>
            ) : (
              <span style={{ color: "#6366f1" }}> times: {countdown}s</span>
            )}
          </Typography>
          <AutoTabProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <input
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "18",
                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />

              <input
                style={{
                  width: "50px",
                  height: "50px",

                  fontSize: "18",

                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />
              <input
                style={{
                  width: "50px",
                  height: "50px",

                  fontSize: "18",

                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />
              <input
                style={{
                  width: "50px",
                  height: "50px",

                  fontSize: "18",

                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />
              <input
                style={{
                  width: "50px",
                  height: "50px",

                  fontSize: "18",

                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />
              <input
                style={{
                  width: "50px",
                  height: "50px",

                  fontSize: "18",

                  textAlign: "center",
                  outlineColor: isFocused ? "#6366f1" : "solid solid black",
                }}
                type="text"
                maxLength={1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabbable
              />
            </div>
          </AutoTabProvider>
          {but ? (
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              onClick={handeleResend}
            >
              resend code
            </Button>
          ) : (
            <Button
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              onClick={handeleContine}
            >
              Continue
            </Button>
          )}
        </Box>
      </Box>
      </div>
      <div style={{ width: "50%", }}>
        <Bookimg />
      </div>
    </div>
    </>
  );
};
