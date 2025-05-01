import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Container, Typography } from "@mui/material";
import CapturePage from "./CapturePage";
import MainHeader from "../../partials/Headers/MainHeader";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const pages: { label: string; path: string }[] = [
  { label: "Products", path: "/pandora/products" },
  { label: "Pricing", path: "/pandora/pricing" },
  { label: "Blog", path: "/pandora/blog" },
];

export default function CaptureRouter() {
  return (
    <>
      <MainHeader pages={pages} />
      <Container
        maxWidth='lg'
        sx={{ 
          padding: 0, 
          borderRadius: 0,
        }}
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
