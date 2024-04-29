import { Fragment, useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/slices/UserSlice';
// import apiClient from '../url/index'
import classes from './Header.module.css';
import pp from '../assets/pp.jpeg';


const Header = () => {
  const [show, setShow] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [showEditName, setShowEditName] = useState(false)

  const dispatch = useDispatch()
  // const notifications = useSelector(state=>state.notification.notifications)
  const user = useSelector(state => state.user.data)
  const navigate = useNavigate()

  
  const logoutHandler = () => {
    localStorage.removeItem('token')
    dispatch(userAction.setToken(null))
    dispatch(userAction.setIsAuthenticated(false))
    navigate('/login')
  }
  const accountHandler = () => {
    // navigate('/account')
    setShowEditName(true)

  }
  const openPasswordChange = () => {
    setShowChangePassword(true)
  }

  const handleClose = () => {
    setShow(false)
    setShowChangePassword(false)
    setShowEditName(false)
  }
  const openNotification = () => {
    setShow(true)
  }
  return <Fragment>
    <div className={classes.headerNav + ' m-6 bg-white rounded-md d-flex mx-auto flex-row p-2'}>
      <div className='flex flex-row width-80  '>
        <i className="fa-solid fa-magnifying-glass p-3"></i>
        <input type="text" placeholder="Search for farmer..." className=" focus:outline-none" />
      </div>


      {
        <div className='ms-auto me-3 flex flex-row gap-7'>
          <button className={classes.notificationBtn} >
            <i className="fa-regular fa-bell fs-2" onClick={openNotification}></i>
          </button>

          {/* <img src="assets/img/avatars/default.png" class="img-avatar" alt="admin@bootstrapmaster.com" /> */}

          <img src={pp} alt={'pp'} className={`${classes.profileImg} `} />
        </div>


      }
      
    </div>
    
    
  </Fragment>
}
export default Header