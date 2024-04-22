import {useState} from 'react'
//import form from 'react-bootstrap/form';
//import button from 'react-bootstrap/button'
//mport Spinner from "react-bootstrap/Spinner";
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {buttonAction} from '../../store/slices/ButtonSpinerSlice.jsx'
import { userAction } from '../../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiClient from '../../url/index';
import classNamees from './LoginPage.module.css';
import hibretlogo from '../../assets/hibretlogo.png';
import emoje from '../../assets/emoje.avif';



const LoginPage = () =>{
    const isLoading = useSelector((state) => state.btn.isLoading);
    const [cridentials, setCridentials] = useState({email:'',password:''})
    const [errors,setErrors] = useState({email:'',password:'',errNotify:''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const changeHandler = (e) =>{
           const {name,value} = e.target
           setCridentials(prevValues=>{
               return {...prevValues,[name]:value}
           })
           if(e.target.value){
            setErrors(prevErrors=>{
                return {...prevErrors,[name]:''}
            })
           }
        }
        const validate = (values) =>{
           const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
         const errorValues ={}
         if(!values.email.trim()){
           errorValues.email = 'email is required'
         }
         else if(!regexExp.test(values.email)){
           errorValues.email = 'invalid email address'
         }
         if(!values.password){
           errorValues.password ='password is required'
         }
         else if(values.length > 15){
           errorValues.password = 'password must not be greater than 15 characters'
         }
         return errorValues
        } 
        const fetchUserData = async(data) =>{
          try{
           const response = await axios.get('https://coldroomapinew.rensysengineering.com/localadmin/auth/my-account',{
            headers: {
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization:`Bearer ${data.token}`,    
      
          }
           })
           if(response.status === 200){
            dispatch(userAction.setUser(response.data))
            navigate('/')
         }
          }
          catch(err){
            console.log('error')
          }
         }
        const saveUserData = (data) =>{
            apiClient.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
              localStorage.setItem("token", data.token);
              dispatch(userAction.setToken(data.token))
              dispatch(userAction.setIsAuthenticated(true))
        }
        const loginHandler = async() =>{
            setErrors(validate(cridentials))
            if(!errors.email && !errors.password){
                dispatch(buttonAction.setBtnSpiner(true))
                try{
                    var response = await apiClient.post('admin/auth/local-login',cridentials)
                    if(response.status === 200 || 201){
                        saveUserData(response.data)
                        fetchUserData(response.data)
                    }
                }
                catch(err){
                    setErrors(prevErrors=>{
                        return {...prevErrors,errNotify:err.response.data}
                    })
                }
                finally{
                    dispatch(buttonAction.setBtnSpiner(false))
                }
            }
        }
     return<div className="flex items-center w-full h-screen p-4 lg:justify-center">
     <div
       className="flex flex-col overflow-hidden  bg-violet  rounded-md shadow-lg max md:flex-row md:flex-1 lg:flex-1"
     >
       
       <div className=" pt-3 text-white h-screen bg-gradient-to-b from-ad to-ab md:w-100 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
         
         
         <img className="px-10" src={hibretlogo} alt="hibret logo" height={20}/>
         
         <p className=" text-sm text-center font-bold text-gray-300 absolute bottom-0 pb-4">
          powered by lersha
         </p>
       </div>
       <div className="p-4 lg:w-1/3 mx-auto my-20 md:w-1/4 bg-white flex flex-col justify-center">
  <div className="flex flex-row w-full items-baseline h-18 ">
    <h3 className="text-2xl font-semibold text-gray-700 flex items-start h-full">Welcome</h3>
    <img className="w-6 md:w-18 lg:w-20 h-19 pt-4" src={emoje} alt="hello" />
  </div>
         <form action="#" className="flex flex-col space-y-5">
           <div className="flex flex-col space-y-1">
             <label  className="text-sm  text-gray-500 flex items-start">Sign in to your account</label>
             <label  className="text-sm pt-3 text-gray-500 flex items-start">Email</label>
             <input
               type="email"
               id="email"
               autoFocus
               className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
             />
           </div>
           <div className="flex flex-col space-y-1">
             <div className="flex items-center justify-between">
               <label  className="text-sm  text-gray-500">Password</label>
               <a href="#" className="text-sm  hover:underline focus:text-blue-800">Forgot Password?</a>
             </div>
             <input
               type="password"
               id="password"
               className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
             />
           </div>
           <div className="flex items-center space-x-2">
             <input
               type="checkbox"
               id="remember"
               className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
             />
             <label  className="text-sm font-semibold text-gray-500">Remember me</label>
           </div>
           <div>
             <button
               type="submit"
               className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gradient-to-b from-ad to-ab md:w-90 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
             >
               Sign in
             </button>
           </div>
           
         </form>
       </div>
     </div>
   </div>
}
export default LoginPage