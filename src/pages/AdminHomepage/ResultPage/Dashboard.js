import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardUsers from '../../../components/Cards/CardCandidates';
import CardVoters from '../../../components/Cards/CardVoters';
import CardElection from '../../../components/Cards/CardElections';

// Custom CSS styles
const cardContainerStyle = {
  padding: '16px',
};

const cardStyle = {
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Grid container spacing={2} style={cardContainerStyle}>
        <Grid item xs={12} sm={6} md={4}>
          {/* CardElection */}
          <Paper style={cardStyle}>
            <CardElection />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* CardUsers */}
          <Paper style={cardStyle}>
            <CardUsers />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* CardVoters */}
          <Paper style={cardStyle}>
            <CardVoters />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* CardElection */}
          <Paper style={cardStyle}>
            <CardElection />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
