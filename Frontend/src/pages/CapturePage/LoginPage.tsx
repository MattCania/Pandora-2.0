import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Requests from '../../components/Requests'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";

export default function LoginPage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [formValues, setFormValues] = React.useState({
    email: "", password: ""
  })

  const handleDataChange = (e: any) => {
    const {name, value} = e.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name] : value,
    }))
  }

  const handleSubmission = async (e: any) => {
    e.preventDefault
    const formData = formValues
    console.log(formData)
    try {
      const result = await Requests('post', 'login', formData)

      if (!result) throw new Error("Error Login")


    }
    catch (error){
      console.error("Error: ", error)
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <Container
      maxWidth='sm'
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        my: 4,
        mt: 4,
        py: 10,
        p: {
          xs: 4,
          sm: 10,
        },
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        transition: "ease-in-out",
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
          width: {
            xs: "100%",
            sm: "500px",
          },
          transition: "ease-in-out",
        }}
      >
        Welcome to Pandora!
      </Typography>
      <Typography
        variant='subtitle1'
        color='white'
        alignSelf='center'
        sx={{
          mb: 4,
        }}
      >
        Your personal financial manager
      </Typography>
      <TextField
        id='outlined-basic'
        label='Username'
        variant='outlined'
        type='text'
        name="email"
        onChange={handleDataChange}
        sx={{
          backgroundColor: "primary.main",
          borderRadius: 1,
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
        }}
      >
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type={passwordVisibility ? "text" : "password"}
          name="password"
          onChange={handleDataChange}
          sx={{
            backgroundColor: "primary.main",
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
          onClick={togglePasswordVisibility}
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

      <Button
        variant='contained'
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
          }
        }}
      >
        Sign In
      </Button>

      <Box
        component='section'
        sx={{
          display: "flex",
          width: {
            xs: "100%",
            sm: "300px",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href='reset-password'
          sx={{
            color: "common.white",
          }}
        >
          Forget Password?
        </Link>
        <Link
          href='pandora-register'
          sx={{
            color: "common.white",
          }}
        >
          Create an Account?
        </Link>
      </Box>
    </Container>
  );
}
