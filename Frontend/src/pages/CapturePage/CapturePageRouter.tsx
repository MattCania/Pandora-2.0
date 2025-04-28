import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Container, Typography } from "@mui/material";
import CapturePage from "./CapturePage";
import CaptureHeader from "../../partials/Headers/CaptureHeader";

export default function CaptureRouter() {
  return (
    <>
      <CaptureHeader />
      <Container
        maxWidth='lg'
        sx={{ padding: 0, borderRadius: 0 }}
      >
        <Routes>
          <Route
            path=''
            element={<CapturePage />}
          />
        </Routes>
      </Container>
    </>
  );
}
