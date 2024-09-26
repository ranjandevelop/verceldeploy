import axios from "axios";

const API_URL = "http://localhost:3001"; // URL of your Node.js backend

// Signup API
export const signup = async (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

// Login API
export const login = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

// Get all posts
export const getPosts = async () => {
  return axios.get(`${API_URL}/posts`);
};

// Upload post with image
export const uploadPost = async (formData) => {
  return axios.post(`${API_URL}/upload-post`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
