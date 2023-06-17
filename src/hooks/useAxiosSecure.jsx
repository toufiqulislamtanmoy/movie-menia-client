import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
  // baseURL: 'https://movie-site-server.vercel.app', 
  baseURL: 'https://movie-site-server.vercel.app', 
});


const useAxiosSecure = () => {
  const { userLogOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await userLogOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;