import {
  Box,
  FilledInput,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormControl from "@mui/material/FormControl";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Register.scss"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import validator from 'validator';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const genders = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  },
  {
    value: 'others',
    label: 'others',
  },
];

const marital_statuses = [{ value: "married", label: "Married" }, { value: "single", label: "Single" }]

const Register = () => {

  // const [isValid, setIsValid] = useState(true);

  const [form, setForm] = useState({
    f_name: "",
    surname: "",
    dob: "",
    alive: true,
    place_of_birth: "",
    email: "",
    gender: "",
    marital_status: false,
    password: "123",
  })

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      // postMessage("Thank you");
      console.log("Correct email")
    } else {
      // postMessage("Please, enter valid Email!");
      console.log("Wrong email")
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form)

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <form>
      <div className="loginForm">
        <h1>Register here</h1>
        <Box className="formBox" sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            {/* First name */}
            <TextField
              name="f_name"
              label="first name"
              id="outlined-start-adornment"
              onChange={handleChange}
              sx={{ m: 1, width: "70ch" }}
            />

            {/* Surname */}
            <TextField
              name="surname"
              label="surname"
              onChange={handleChange}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "70ch" }}
            />

            {/* Gender */}
            <FormControl sx={{ m: 1, width: "70ch" }} variant="outlined">
              <TextField
                name="gender"
                id="outlined-select-gender"
                select
                onChange={handleChange}
                label="Select gender"
                defaultValue="others"
              // helperText="Please select the gender"
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>


            {/* Place of BIrth */}
            <TextField
              label="place of birth"
              name="place_of_birth"
              onChange={handleChange}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "70ch" }}
            />

            {/* Date of Birth */}
            {/* <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker label={'"year"'} openTo="year" />
                <DatePicker
                  label={'"month"'}
                  openTo="month"
                  views={['year', 'month', 'day']}
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl> */}


            {/* Date of Birth */}
            <TextField
              label="date of Birth"
              name="dob"
              onChange={handleChange}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "70ch" }}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider> */}

            <FormControl sx={{ m: 1, width: "70ch" }} variant="outlined">
              <TextField
                id="outlined-select-gender"
                name="marital_status"
                select
                onChange={handleChange}
                label="Select Marital status"
                defaultValue="single"
              // helperText="Please select the gender"
              >
                {marital_statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>

            {/* Email input */}
            <TextField
              label="email"
              type="email"
              name="email"
              required
              onChange={validateEmail}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "70ch" }}
            />

            {/* Password */}
            <FormControl sx={{ m: 1, width: "70ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div>
          </div>
        </Box>
      </div>
    </form >
  );
};

export default Register;
