import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Navbar from "../Navbar";

function RentalOrder() {
  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <>
    <Navbar/>
    <div style={{marginTop: "90px"}}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  </>
  );
}

export default RentalOrder;
