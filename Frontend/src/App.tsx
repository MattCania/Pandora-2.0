import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import { CapturePage, CapturePageRouter } from ".";
import "./App.css";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
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
  // const token = localStorage.getItem("token");
  const token = "test"
  const countdownTimer = 3500;
  const [countdown, setCountDown] = React.useState(false);
  const [time, setTime] = React.useState(countdownTimer);

  React.useEffect(() => {
    if (!token) {
      setCountDown(true);
      const timeout = setTimeout(() => {
        navigate("/");
      }, countdownTimer);

      return () => clearTimeout(timeout);
    }
  }, [token]);

  React.useEffect(() => {
    if (!countdown) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return token ? (
    <Outlet />
  ) : (
    <Box
      component='div'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "100%",
          sm: "50%",
        },
        height: "90vh",
      }}
    >
      <AlertBox
        type='error'
        title='User Not Found'
        text='Please Log In first!'
      />
      <Typography
        variant='subtitle1'
        color='text.primary'
      >
        Redirecting in {Math.floor(time/1000)}
      </Typography>
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
