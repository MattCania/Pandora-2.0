import logo_pandora from "../../assets/logo_pandora.png";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Paper,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Dashboard() {
  return (
    // Head Container
    <Box
      component='section'
      sx={{
        width: "100%",
        height: "600px",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {/* Primary Container */}
      <Box
        component='section'
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Row 1 */}
        <Box
          flexGrow={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Row 1.1 */}
            <Box
              component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              
            </Box>
            {/* Row 1.2 */}
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            >


            </Box>
          </Box>
        </Box>

          {/* Row 2 */}
        <Box flexGrow={1}>

        <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"] }]}
              />
        </Box>
      </Box>

      {/* Secondary Container */}
      <Box
        component='section'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component='div'
          sx={{
            width: "200",
          }}
        >Hello</Box>
      </Box>
    </Box>
  );
}
