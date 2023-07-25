import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const categories = [
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
];

const VotersForm = ({ formData, handleChange, categories, handleCloseVoterForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(formData);

    // Compare password and confirm password
    if (formData.password !== formData.confirmPassword) {
      console.log("Password and Confirm Password do not match.");
      return;
    }

    // If password and confirm password match, continue with the form submission
    // Your further logic for form submission here
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 6000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        minWidth: 300,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ paddingBottom: 2 }}>
        Add Voter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="branch"
            name="branch"
            label="Branch"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small">
            <InputLabel id="category-label">Batch</InputLabel>
            <Select
              sx={{
                zIndex: 9999,
              }}
              labelId="category-label"
              id="category"
              value={formData.category}
              label="Category"
              onChange={handleChange}
            >
              {categories.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="UniversityID"
            name="UniversityID"
            label="University ID"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button>
            <UploadFileIcon /> Upload ID Card
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              name="password"
              onChange={handleChange}
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
        </Grid>

        {/* Add Confirm Password field */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
            type={'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="studentInfo"
            name="studentInfo"
            label="Student Information"
            fullWidth
            multiline
            rows={4}
            size="small"
            autoComplete="off"
            variant="outlined"
            value={formData.studentInfo}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant="contained" sx={{ backgroundColor: '#ff781f' }} onClick={handleSubmit}>
            Save
          </Button>
          <Button color="secondary" onClick={handleCloseVoterForm}>
            Close
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VotersForm;
