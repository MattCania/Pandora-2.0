import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import MainHeader from "../../partials/Headers/MainHeader";

const pages: { label: string; path: string }[] = [
	{ label: "Home", path: "/dashboard" },
	{ label: "Analytics", path: "/dashboard/analytics" },
	{ label: "Inventory", path: "/dashboard/inventory" },
	{ label: "Expenses", path: "/dashboard/expenses" },
	{ label: "Purchases", path: "/dashboard/purchases" },
  ];

export default function DashboardRouter() {
  return (
    <>
	  <MainHeader pages={pages}/>
      <Container
        maxWidth='xl'
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
