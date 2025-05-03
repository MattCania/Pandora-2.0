import { Box, Container, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Dashboard() {
  return (
    <Box
      component='section'
      sx={{
        width: "100%",
        height: "600px",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        m: 2,
      }}
    >
      <Container 
      maxWidth='xl'
      sx={{
        width: '100%',
        
      }}
      >
        <Typography
          variant="h2"
          sx={{
            border: '1px solid black'
          }}
        >
          Welcome
        </Typography>
      </Container>

      <Box>
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
  );
}
