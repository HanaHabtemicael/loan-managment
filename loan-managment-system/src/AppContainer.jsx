import { Fragment } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom"
import Spiner from './Spiner';

const AppContainer = () =>{
  const isLoading = useSelector((state=>state.loading.isLoading))
  
    return <Fragment>
        <Header />
        <div className='d-flex'>
         <div className='sideBar'>
         <SideBar />
         </div>
        <div className='flex-fill px-3 px-lg-5 py-4 mb-4 position-relative'>  
        {
          isLoading && (<Spiner /> )
        }    
        <Outlet />
        </div>
         </div>
       </Fragment>
}
export default AppContainer