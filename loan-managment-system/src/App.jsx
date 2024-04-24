import {useEffect} from 'react'
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiClient from './url/index';
import Router from './routes';
import { userAction } from './store/slices/UserSlice';
import './App.css';

function App() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      dispatch(userAction.setToken(accessToken));
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      navigate('/home');
    }
  }, []);
  
  return (<Router />);
}

export default App;