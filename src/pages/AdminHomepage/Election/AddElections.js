import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CandidateResult from "../../../components/AllUsers/VotersList";
import CandidatesForm from "../../../components/Forms/CandidatesForm";

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
  width: '100%',
});

const CloseButton = styled(Button)({
  marginTop: '10px',
  width: '100%',
});

const designations = [
  'Teaching Assistant',
  'Research Assistant',
  'Student Leader',
  'Other',
];

const AddCandidates = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
  });

  const [selectedDesignation, setSelectedDesignation] = React.useState('');

  const handleChange = (event) => {
    setSelectedDesignation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(formData);
  };

  const handleOpenCandidateForm = () => {
    setShowCandidateForm(true);
  };

  const handleCloseCandidateForm = () => {
    setShowCandidateForm(false);
  };

  const [showCandidateForm, setShowCandidateForm] = useState(false);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box style={{ padding: '8px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={cardStyle}>
              <FormContainer>
                <FormTitle variant="h6">Candidates List</FormTitle>
                <FormButton variant="contained" color="primary" onClick={handleOpenCandidateForm}>
                  Add Candidate
                </FormButton>
              </FormContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ padding: '8px' }}>
              <Paper style={cardStyle}>
                <CandidateResult />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Candidate Form Pop-up */}
      {showCandidateForm && (
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
          <CandidatesForm  formData={formData} handleChange={handleChange} designations={designations} handleCloseCandidateForm={handleCloseCandidateForm} />
        </Box>
      )}
    </Paper>
  );
};

export default AddCandidates;
