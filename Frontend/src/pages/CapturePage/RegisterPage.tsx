import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from 'axios'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from "react";
import Requests from "../../components/Requests";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(dayjs(Date.now()));
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = React.useState(false);

  const [formValues, setFormValues] = React.useState({
    firstname: "", middlename: "", lastname: "", gender: "",
    birthday: "", age: 0, address: "", email: "", 
    password: "", confirmPassword: ""
  });

  const [errors, setErrors] = React.useState({
    firstname: false, middlename: false, lastname: false, gender: false,
    birthday: false, address: false, email: false, 
    password: false, confirmPassword: false
  })

  const handleDataChange = (e: any) => {
    const {name, value} = e.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleDateChange = (date: Dayjs | null) => {
  if (date) {
    setValue(date);
    setFormValues(prevValues => ({
      ...prevValues,
      birthday: date.format('MM-DD-YYYY')
    }));
  }
};

  const validate = () => {

    if (formValues.firstname === "" || formValues.lastname === "" || formValues.birthday === "" || formValues.gender === "" || formValues.address === "" || formValues.email === "" || formValues.password === "" || formValues.confirmPassword === "") {

    }
    if (formValues.password !== formValues.confirmPassword) {

    }

  }

  const handleSubmission = async (e: any) => {
    e.preventDefault()

    const currentYear = new Date()
    const birthYear = new Date(formValues.birthday)    
    formValues.age = Number(currentYear.getFullYear()) - Number(birthYear.getFullYear())

    const formData = formValues

    try {
      const result = await Requests("post", 'register', formData)

      if (!result) throw new Error("Registration Error")
      // navigate('/pandora/login')
    }
    catch (error){
      console.error("Error: ", error)
    }

  }

  const togglePasswordVisibility = (index: number) => {
    index == 1
      ? setPasswordVisibility(!passwordVisibility)
      : setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  return (
    <Container
      maxWidth='lg'
      disableGutters
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        my: 4,
        mt: 2,
        p: 0,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        transition: "ease-in-out",
      }}
    >
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "100%",
          height: "100%",
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
            pt: 4,
            pb: 4,
            px: {
              xs: 8,
              sm: 0,
            },
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
            name="firstname" 
            label='First Name'
            variant='outlined'
            type='text'
            onChange={handleDataChange}
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
            name="middlename" 
            label='Middle Name (Optional)'
            variant='outlined'
            type='text'
            onChange={handleDataChange}
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
            name="lastname" 
            label='Last Name'
            variant='outlined'
            type='text'
            onChange={handleDataChange}
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
            name="gender" 
            row
            aria-labelledby='gender-radio'
            onChange={handleDataChange}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="birthday" 
              label='Birthday'
              value={value}
              onChange={handleDateChange}
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
                    "& .MuiSvgIcon-root": {
                      color: "common.white",
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
                popper: {
                  sx: {
                    ".MuiPickersCalendarHeader-label": {
                      color: "common.black",
                    },
                    ".MuiPickersCalendarHeader-switchViewButton": {
                      color: "common.black",
                    },
                    ".MuiPickersArrowSwitcher-root button": {
                      color: "common.black",
                    },
                    ".MuiDayCalendar-weekDayLabel": {
                      color: "common.black",
                    },
                    ".MuiPickersDay-root": {
                      color: "common.black",
                    },
                    ".MuiPickersDay-root.Mui-selected": {
                      color: "common.white",
                    },
                    ".Mui-selected": {
                      backgroundColor: "secondary.main !important",
                      color: "common.white !important",
                    },
                    ".MuiPickersYear-yearButton": {
                      color: "common.black",
                    },
                    ".MuiPickersMonth-monthButton": {
                      color: "common.black",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
          <TextField
            id='outlined-basic'
            name="address" 
            label='Address'
            variant='outlined'
            type='text'
            onChange={handleDataChange}
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
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            flex: 1,
            pt: 4,
            pb: 4,
            px: {
              xs: 8,
              sm: 0,
            },
            width: {
              xs: "100%",
            },
          }}
        >
          <Typography
            variant='h4'
            color='common.white'
            textAlign='center'
            sx={{
              p: {
                xs: 2,
                sm: 4,
              },
            }}
          >
            We will send you a verification!
          </Typography>
          <TextField
            id='outlined-basic'
            name="email" 
            label='Email'
            variant='outlined'
            type='text'
            onChange={handleDataChange}
            sx={{
              backgroundColor: "secondary.light",
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
          <Box
            component='div'
            sx={{
              display: "inline-flex",
              position: "relative",
              mt: 2,
              width: {
                xs: "100%",
                sm: "300px",
              },
            }}
          >
            <TextField
              id='outlined-basic'
              name="password" 
              label='Password'
              variant='outlined'
              type={passwordVisibility ? "text" : "password"}
              onChange={handleDataChange}
              sx={{
                backgroundColor: "secondary.light",
                borderRadius: 1,
                mx: 0,
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

            <IconButton
              onClick={() => togglePasswordVisibility(1)}
              aria-label='show password'
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {passwordVisibility ? (
                <VisibilityOffIcon
                  sx={{
                    color: "common.white",
                  }}
                />
              ) : (
                <VisibilityIcon
                  sx={{
                    color: "common.white",
                  }}
                />
              )}
            </IconButton>
          </Box>
          <Box
            component='div'
            sx={{
              display: "inline-flex",
              position: "relative",
              mt: 2,
              width: {
                xs: "100%",
                sm: "300px",
              },
            }}
          >
            <TextField
              id='outlined-basic'
              name="confirmPassword" 
              label='Confirm Password'
              variant='outlined'
              type={confirmPasswordVisibility ? "text" : "password"}
              onChange={handleDataChange}
              sx={{
                backgroundColor: "secondary.light",
                borderRadius: 1,
                mx: 0,
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

            <IconButton
              onClick={() => togglePasswordVisibility(2)}
              aria-label='show confirm password'
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {confirmPasswordVisibility ? (
                <VisibilityOffIcon
                  sx={{
                    color: "common.white",
                  }}
                />
              ) : (
                <VisibilityIcon
                  sx={{
                    color: "common.white",
                  }}
                />
              )}
            </IconButton>
          </Box>
          <Button
            variant='contained'
            type="submit"
            onClick={handleSubmission}
            sx={{
              backgroundColor: "primary.light",
              color: "text.secondary",
              my: 2,
              textTransform: "none",
              fontSize: "1rem",
              width: {
                xs: "100%",
                sm: "300px",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
