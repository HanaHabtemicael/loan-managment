import {NavLink} from 'react-router-dom'
import classes from './SideBar.module.css'
import hibretlogo from '../assets/hibretlogo.png';

const SideBar = () =>{
   
    return <div className=' from-ad to-ab h-screen w-1/5 flex flex-shrink flex-col'>
    <div className=''> 
            <img className="px-10 py-7" src={hibretlogo} alt="hibret logo" />
    </div>
      <div className='mb-3 ml-3'>     
        <NavLink to={'/'}  className={({ isActive }) =>isActive ? classes.active+" border rounded px-1 px-xl-3 py-2" : classes.inactive+' px-1 px-xl-3 py-2'}>
        <span className="fs-5 me-3 p-0"><i className="fas fa-th-large"></i></span>            
        <span className='text-bg-white'>Dashboard</span>
            </NavLink>
        </div>
        
        
        
        
    </div>
}
export default SideBar