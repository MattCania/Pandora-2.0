import {
  Box,
  Container,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";

export default function RegisterPage() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <Container
      maxWidth='lg'
      disableGutters
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        my: 4,
        mt: 4,
        p: 0,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        transition: "ease-in-out",
        overflow: "hidden",
      }}
    >
      <Box
        component='div'
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "secondary.light",
          flex: 1,
		  py:2,
          width: {
            xs: "100%",
          },
        }}
      >
        <Typography
          variant='h3'
          color='white'
          alignSelf='center'
          sx={{
            textAlign: "center",
            my: 2,
            fontSize: {
              xs: "2.25rem",
              sm: "2.75rem",
              md: "3.25rem",
            },
            width: "100%",
            transition: "ease-in-out",
          }}
        >
          Sign Up
        </Typography>

        <TextField
          id='outlined-basic'
          label='First Name'
          variant='outlined'
          type='text'
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: 1,
            my: 1,
            width: {
              xs: "100%",
              sm: "300px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "secondary.main",
              },
            },

            "& .MuiInputBase-input": {
              color: "common.white",
            },

            "& label": {
              color: "common.white",
            },
            "& label.Mui-focused": {
              color: "common.white",
            },
          }}
        />
        <TextField
          id='outlined-basic'
          label='Middle Name (Optional)'
          variant='outlined'
          type='text'
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: 1,
            my: 1,
            width: {
              xs: "100%",
              sm: "300px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "secondary.main",
              },
            },

            "& .MuiInputBase-input": {
              color: "common.white",
            },

            "& label": {
              color: "common.white",
            },
            "& label.Mui-focused": {
              color: "common.white",
            },
          }}
        />
        <TextField
          id='outlined-basic'
          label='Last Name'
          variant='outlined'
          type='text'
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: 1,
            my: 1,
            width: {
              xs: "100%",
              sm: "300px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "secondary.main",
              },
            },

            "& .MuiInputBase-input": {
              color: "common.white",
            },

            "& label": {
              color: "common.white",
            },
            "& label.Mui-focused": {
              color: "common.white",
            },
          }}
        />
        <FormLabel
          sx={{
            color: "common.white",
            width: {
              xs: "100%",
              sm: "300px",
            },
            px: 2,
          }}
        >
          Gender
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby='gender-radio'
        >
          <FormControlLabel
            value='male'
            control={<Radio />}
            label='Male'
            sx={{
              color: "common.white",
            }}
          />
          <FormControlLabel
            value='female'
            control={<Radio />}
            label='Female'
            sx={{
              color: "common.white",
            }}
          />
        </RadioGroup>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label='Birthday'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                InputProps: {
                  sx: {
                    color: "white",
                  },
                },
                InputLabelProps: {
                  sx: {
                    color: "white",
                    "&.Mui-focused": {
                      color: "white",
                    },
                  },
                },
                sx: {
                  backgroundColor: "secondary.main",
                  borderRadius: 1,
                  my: 1,
                  width: {
                    xs: "100%",
                    sm: "300px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "secondary.main",
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          id='outlined-basic'
          label='Address'
          variant='outlined'
          type='text'
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: 1,
            my: 1,
            width: {
              xs: "100%",
              sm: "300px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "secondary.main",
              },
            },

            "& .MuiInputBase-input": {
              color: "common.white",
            },

            "& label": {
              color: "common.white",
            },
            "& label.Mui-focused": {
              color: "common.white",
            },
          }}
        />
      </Box>
      <Box
        component='div'
        sx={{
          display: "flex",
          flex: 1,
          width: {
            xs: "100%",
          },
        }}
      >

	  </Box>
    </Container>
  );
}
