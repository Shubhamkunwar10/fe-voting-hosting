import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

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

const CloseButton = styled(Button)({
  marginTop: '10px',
  width: '100%',
});

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

    // Production ready: Implement the logic to save the data to the backend or call an API to handle form submission.

    // Once the data is saved, close the form:
    handleCloseVoterForm();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Dialog open onClose={handleCloseVoterForm} maxWidth="xs" fullWidth>
      <DialogContent dividers>
        <Box
          sx={{
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
                value={formData.Name}
                onChange={handleChange}
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
                value={formData.branch}
                onChange={handleChange}
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
                value={formData.UniversityID}
                onChange={handleChange}
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
      </DialogContent>
    </Dialog>
  );
};

export default VotersForm;
