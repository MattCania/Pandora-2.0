import { Routes, Route, Navigate } from "react-router-dom";
import { CapturePage, CapturePageRouter } from ".";
import "./App.css";
import { Box, Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import DashboardRouter from "./pages/Dashboard/DashboardRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1B2536",
        light: '#889fc3',
        dark: '090c11'
      },
      secondary: {
        main: "#0F1722",
        light: '#090c11',
        dark: '#889fc3'
      },
      background: {
        default: "#1E293B",
      },
      text: {
        primary: "#131C29",
        secondary: "#0F1722",
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          <Route
            path='/dashboard/*'
            element={<DashboardRouter />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
