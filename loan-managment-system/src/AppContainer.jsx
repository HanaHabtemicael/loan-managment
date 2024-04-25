import { Fragment } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom"
import Spiner from './Spiner';

const AppContainer = () =>{
  const isLoading = useSelector((state=>state.loading.isLoading))
  
    return <Fragment>
         <div className='flex flex-row'>
         <SideBar />
         <Header/>
         </div>
        
        <div className=''>  
        {
          isLoading && (<Spiner /> )
        }    
        <Outlet />
        </div>
         
       </Fragment>
}
export default AppContainer