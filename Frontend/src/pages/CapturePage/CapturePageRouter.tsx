import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Container, Typography } from "@mui/material";
import CapturePage from "./CapturePage";
import CaptureHeader from "../../partials/Headers/CaptureHeader";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

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
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
          />
        </Routes>
      </Container>
    </>
  );
}
