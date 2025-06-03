import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import { CapturePageRouter } from ".";
import "./App.css";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import DashboardRouter from "./pages/Dashboard/DashboardRouter";
import React, { createContext, useEffect, useState } from "react";
import AlertBox from "./components/AlertBox";
import { GetSession } from "./utils/Fetch/GetSession";
import ProfilePage from "./pages/Profile/Profile"; 

// Interface, Sets Shared Session Context
export interface SessionData {
  userId: number;
  email: string;
  username: string;
}

export type SessionContextType = {
  user: SessionData | null;
  setUser: React.Dispatch<React.SetStateAction<SessionData | null>>;
};

export const SessionContext = createContext<SessionContextType>({
  user: null,
  setUser: () => {},
});

// Session Handling
const ProtectedRoute = () => {
  const navigate = useNavigate();

  // Countdown Manager
  const countdownTimer = 3500;
  const [countdown, setCountDown] = useState(false);
  const [time, setTime] = useState(countdownTimer);

  // Session Placeholder
  const { user, setUser } = React.useContext(SessionContext);
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Gets Session, Sets loading and user
  useEffect(() => {
      const refetch = async () => {
        const sessionData = await GetSession();
        setUser(sessionData);
        setLoading(false)
      };
      refetch();
  }, [user, setUser]);

  useEffect(() => {
    // Checks if loading (loading means the session has not been fetched)
    if (loading) return;

    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
      setCountDown(true);
    }
  }, [user, loading]);

  // If User does not exist, sets the countdown and proceeds to redirect
  useEffect(() => {
    // Only triggers when countdown is triggered
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

  // Redirects if time is 0
  useEffect(() => {
    if (time <= 0) {
      navigate("/pandora");
    }
  }, [time, navigate]);

  // Return the Outlet or 404 Prompt
  return isAuth ? (
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
        title='404 User Not Found'
        text='Please Log In first!'
      />
      <Typography
        variant='subtitle1'
        color='text.primary'
      >
        Redirecting in {Math.floor(time / 1000)}
      </Typography>
    </Box>
  );
};

function App() {
  const [user, setUser] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await GetSession();
      setUser(sessionData);
      setLoading(false);
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <SessionContext.Provider value={{ user, setUser }}>
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
            <Route element={<ProtectedRoute />}>
              <Route
                path='/account/profile'
                element={<ProfilePage />}
              />
            </Route>
          </Routes>
        </Box>
      </SessionContext.Provider>
    </ThemeProvider>
  );
}

export default App;
