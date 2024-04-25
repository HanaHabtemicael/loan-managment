import {useEffect} from 'react'
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiClient from './url/index';
import Router from './routes';
import { userAction } from './store/slices/UserSlice';
import './App.css';
import Cookies from 'js-cookie'; 

function App() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const checkCookie = () => {
      console.log("chkin ck");
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token='))
        ?.split('=')[1]; 
      console.log("gf-irr------------",cookieValue)
      if (!cookieValue) {
        navigate('/login'); 
      }
    };

    checkCookie();
  }, []);
  
  return (<Router />);
}

export default App;