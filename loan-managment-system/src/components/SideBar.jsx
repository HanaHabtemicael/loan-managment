import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';
import hibretlogo from '../assets/hibretlogo.png';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  

  return (
    <div className={`bg-gradient-to-b from-ad to-ab h-screen w-1/5 flex flex-shrink flex-col ${isOpen ? '' : 'hidden'}`}>
      <div>
        <img className="px-10 py-7" src={hibretlogo} alt="hibret logo" />
      </div>
      <div className='mb-3 ml-3'>
        <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? classes.active + " border rounded px-1 px-xl-3 py-2" : classes.inactive + ' px-1 px-xl-3 py-2'}>
          <span className="fs-5 me-3 p-0"><i className="fas fa-th-large"></i></span>
          <span className='text-bg-white'>Dashboard</span>
        </NavLink>
      </div>

      <div className='mb-3 ml-3'>
        <NavLink to={'/farmer'} className={({ isActive }) => isActive ? classes.active + " border rounded px-1 px-xl-3 py-2" : classes.inactive + ' px-1 px-xl-3 py-2'}>
          <span className="fs-5 me-3 p-0"><i className="fas fa-th-large"></i></span>
          <span className='text-bg-white'>farmer</span>
        </NavLink>
      </div>

     
    </div>
  );
};

export default SideBar;
