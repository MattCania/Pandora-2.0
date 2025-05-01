import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import MainHeader from "../../partials/Headers/MainHeader";

const pages = ["Home", "Analytics", "Inventory", "Expenses", "Purchases"]

export default function DashboardRouter() {
  return (
    <>
	  <MainHeader pages={pages}/>
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
            element={<Dashboard />}
          />
        </Routes>
      </Container>
    </>
  );
}
