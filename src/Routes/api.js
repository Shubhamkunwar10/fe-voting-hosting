import axios from 'axios';

// Default URL to send axios request to backend api
axios.defaults.baseURL = process.env.SERVER_URL;

// Helper function to handle API requests with error handling
const apiRequest = async (method, url, data = null) => {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    // Handle error here (e.g., show a toast message or log the error)
    throw error;
  }
};

// Auth API
export const signIn = async (email, otp) => {
  return apiRequest('post', '/signin', { email, otp });
};

export const signUp = async (userData) => {
  return apiRequest('post', '/signup', userData);
};

// Candidates API
export const addCandidate = async (candidateData) => {
  return apiRequest('post', '/candidates', candidateData);
};

// Voters API
export const addVoter = async (voterData) => {
  return apiRequest('post', '/voters', voterData);
};
