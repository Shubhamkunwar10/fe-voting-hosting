// ResultFinalization.js
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ResultFinalization = () => {
  const [isResultFinalized, setIsResultFinalized] = useState(false);
  const [adminCount, setAdminCount] = useState(0);

  // Function to handle the admin finalizing the result
  const handleFinalizeResult = () => {
    // Assuming you have a backend API endpoint to handle the admin's action
    // Send a request to the backend to mark the result as finalized
    // Here, you can also update the adminCount in the backend to keep track of how many admins have finalized the result
    // For example:
    // axios.post('/api/finalize-result');
    setIsResultFinalized(true);
  };

  // Function to check if all admins have finalized the result
  const checkAllAdminsFinalized = () => {
    // Assuming you have a backend API endpoint to check if all admins have finalized the result
    // Send a request to the backend to get the count of admins who have finalized the result
    // For example:
    // axios.get('/api/admin-finalized-count')
    //   .then((response) => {
    //     setAdminCount(response.data.count);
    //     if (response.data.count >= 3) {
    //       setIsResultFinalized(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error getting admin finalized count:', error);
    //   });

    // For demonstration purposes, we'll simulate the response from the backend
    // In this example, we'll set adminCount to 3 after a short delay to simulate all admins finalizing the result
    setTimeout(() => {
      setAdminCount(3);
      setIsResultFinalized(true);
    }, 3000);
  };

  // Call the function to check if all admins have finalized the result on component mount
  // You may call this function when the user logs in or when the dashboard component mounts
  // For example:
  // useEffect(() => {
  //   checkAllAdminsFinalized();
  // }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Finalize Result
      </Typography>
      {isResultFinalized ? (
        <Typography variant="body1" gutterBottom>
          Result has been finalized by all admins.
        </Typography>
      ) : (
        <>
          <Typography variant="body1" gutterBottom>
            Click the button below to finalize the result.
          </Typography>
          <Button onClick={handleFinalizeResult} variant="contained" color="primary">
            Finalize Result
          </Button>
          {adminCount > 0 && (
            <Typography variant="body1" gutterBottom>
              {adminCount} admin(s) have already finalized the result.
            </Typography>
          )}
        </>
      )}
    </Paper>
  );
};

export default ResultFinalization;
