import logo_pandora from "../../assets/logo_pandora.png";
import { Avatar, Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
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
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            backgroundColor: 'secondary.light',
            color: 'text.primary',
            borderRadius: 8,
            padding: 2
          }}
      >
          <Box 
            component="div"
            sx={{
              display: 'flex',
              mr: {
                xs: 2,
                sm: 4,
                md: 6
              },
              borderRadius: "100%",
              overflow: "hidden",
              width: {
                xs: '100px',
                sm: '150px',
              },
              height: {
                xs: '100px',
                sm: '150px'
              }
            }}
          >
            <img
              src={logo_pandora}
              alt=''
            />
          </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: '20px',
              sm: '30px',
              lg: '48px'
            }
          }}
        >
          Welcome Matthew Gabriel Cania
        </Typography>
      </Container>

      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          border: '1px solid black'
        }}
      >
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
