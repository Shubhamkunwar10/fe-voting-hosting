import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VoterResult from "../../../components/AllUsers/VotersList";
import VotersForm from "../../../components/Forms/VotersForm";

const FormContainer = styled(Paper)({
  padding: '20px',
  margin: '0 auto',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});

const cardStyle = {
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const FormTitle = styled(Typography)({
  textAlign: 'center',
  marginBottom: '20px',
});


const FormButton = styled(Button)({
  width: '40%',
});

const CloseButton = styled(Button)({
  marginTop: '10px',
  width: '100%',
});

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

const AddVoters = () => {
  const [formData, setFormData] = useState({
    Name: '',
    branch: '',
    category: '',
    UniversityID: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(formData);
  };

  const handleOpenVoterForm = () => {
    setShowVoterForm(true);
  };

  const handleCloseVoterForm = () => {
    setShowVoterForm(false);
  };

  const [showVoterForm, setShowVoterForm] = useState(false);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box style={{ padding: '8px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={cardStyle}>
              <FormContainer>
                <FormTitle variant="h6">Voters List</FormTitle>
                <FormButton variant="contained" color="primary" onClick={handleOpenVoterForm}>
                  Add Voter
                </FormButton>
              </FormContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Box style={{ padding: '16px' }}>
              <Paper style={cardStyle}>
                <VoterResult />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Voter Form Pop-up */}
      {showVoterForm && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1200,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <VotersForm formData={formData} handleChange={handleChange} categories={categories} handleCloseVoterForm={handleCloseVoterForm} />
        </Box>
      )}
    </Paper>
  );
};

export default AddVoters;
