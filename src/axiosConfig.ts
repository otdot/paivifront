import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASEURL || "http://localhost:3001", // Base URL for all requests
  timeout: 5000, // Default timeout
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

export default axiosInstance;