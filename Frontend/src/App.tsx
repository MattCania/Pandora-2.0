// App.tsx
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { CapturePageRouter } from ".";
import "./App.css";
import {
  Box,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DashboardRouter from "./pages/Dashboard/DashboardRouter";
import React, { createContext, useEffect, useState } from "react";
import AlertBox from "./components/AlertBox";
import GetSession from "./utils/Fetch/GetSession";

// --- Session Context Setup ---
export interface SessionData {
  userId: number;
  email: string;
  username: string;
}

export const SessionContext = createContext<SessionData | null>(null);

// --- ProtectedRoute Component ---
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const countdownTimer = 3500;
  const [countdown, setCountDown] = useState(false);
  const [time, setTime] = useState(countdownTimer);
  const user = React.useContext(SessionContext) ?? {};
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
      setCountDown(true);
    }
  }, [user]);

  useEffect(() => {
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

  useEffect(() => {
    if (time <= 0) {
      navigate("/pandora");
    }
  }, [time, navigate]);

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
        title='User Not Found'
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

// --- App Component ---
function App() {
  const [user, setUser] = useState<SessionData | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await GetSession(); // Make sure this returns `SessionData` or null
      setUser(session);
    };

    fetchSession();
  }, []);

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
      <SessionContext.Provider value={user}>
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
            <Route path='/' element={<Navigate to='/pandora' />} />
            <Route path='/pandora/*' element={<CapturePageRouter />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard/*' element={<DashboardRouter />} />
            </Route>
          </Routes>
        </Box>
      </SessionContext.Provider>
    </ThemeProvider>
  );
}

export default App;
