import { Routes, Route, Navigate } from "react-router-dom";
import { CapturePage, CapturePageRouter } from ".";
import "./App.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1B2536",
      },
      secondary: {
        main: "#0F1722",
      },
      background: {
        default: "#1E293B",
      },
      text: {
        primary: "#131C29",
        secondary: "#0F1722",
      },
      common: {
        white: '#FFFFFF',
        black: '#000000'
      }
    },
    
  });
  return (
    <ThemeProvider theme={theme}>
      <section
        style={{background: theme.palette.primary.main, width: '100vw', height: '100vh'}}
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
        </Routes>
        
      </section>
    </ThemeProvider>
  );
}

export default App;
