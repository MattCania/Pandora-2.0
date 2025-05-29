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
import dayjs, { Dayjs } from "dayjs";
import { BarChart } from "@mui/x-charts/BarChart";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { useState } from "react";
import { SessionContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = React.useContext(SessionContext);

  if (!user) {
    navigate('/')
  }
  
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
      {/* Welcome Row */}
      <Box
        component='section'
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "secondary.light",
          borderRadius: 2,
          px: 2,
          py: 1,
        }}
      >
        <Box
          component='div'
          flexGrow={1}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography
            variant='h4'
            color='common.white'
            sx={{}}
          >
            Welcome {user?.username}
          </Typography>

          <Typography
            variant='subtitle1'
            color='common.white'
            sx={{}}
          >
            Heres your Financial Overview
          </Typography>
        </Box>
        <Box
          component='div'
          flexGrow={1}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            flexDirection: "row",
          }}
        >
          <Typography
            variant='subtitle1'
            color='text.primary'
          >
            5-9-2025
          </Typography>
        </Box>
      </Box>
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
              component='div'
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
            {/* Row 1.2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
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
        >
          Hello
        </Box>
      </Box>
    </Box>
  );
}
