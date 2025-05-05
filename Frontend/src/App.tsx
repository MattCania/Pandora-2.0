import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import { CapturePage, CapturePageRouter } from ".";
import "./App.css";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DashboardRouter from "./pages/Dashboard/DashboardRouter";
import React, { useContext } from "react";
import AlertBox from "./components/AlertBox";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    <Box
      component='div'
      sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%", 
        height: "90vh" 
      }}
    >
      <AlertBox
        type='warning'
        title='User Not Found'
        text='Please Log In first!'
        />
    </Box>
  );
};

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1B2536",
        light: "#889fc3",
        dark: "090c11",
      },
      secondary: {
        main: "#0F1722",
        light: "#090c11",
        dark: "#889fc3",
      },
      background: {
        default: "#1E293B",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#000000",
      },
      common: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: 1,
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/pandora' />}
          />
          <Route
            path='/pandora/*'
            element={<CapturePageRouter />}
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path='/dashboard/*'
              element={<DashboardRouter />}
            />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
