import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export default function CapturePage() {
  const featureButtons = [
    "Transaction Records",
    "Inventory",
    "Expenses Tracking",
    "Annual Analytics",
  ];

  return (
    <Box
      component='section'
      sx={{
        width: "100%",
        height: "600px",
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          backgroundColor: "primary.dark",
          borderRadius: 2,
        }}
      >
        <Typography
          variant='h2'
          align='left'
          color='common.white'
          gutterBottom
          sx={{
            width: "100%",
          }}
        >
          We Got You Covered
        </Typography>
        <Typography
          variant='subtitle1'
          align='left'
          color='common.white'
          sx={{
            width: "100%",
          }}
        >
          Welcome to Pandora - Your All-In-One Financial Bookkeeping Management
          App! Stay on top of your Finances while keeping track of your
          inventory with ease
        </Typography>
      </Container>
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          padding: 4,
          backgroundColor: "common.white",
          borderRadius: 2,
        }}
      >
        <Typography
          variant='h2'
          align='center'
          color='secondary.light'
		  fontWeight="medium"
          gutterBottom
        >
          We Offer
        </Typography>

        {featureButtons.map((label, index) => (
          <Button
            key={index}
            variant='contained'
            sx={{
              backgroundColor: "primary.main",
              color: "text.light",
              my: 1,
              textTransform: "none",
              fontSize: "1rem",
			  height:{
				xs: 'auto',
				sm: '72px'
			  },
              width: {
                xs: "100%",
                sm: "300px",
              },
              "&:hover": {
                backgroundColor: "secondary.light",
                color: "common.white",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Container>
    </Box>
  );
}
