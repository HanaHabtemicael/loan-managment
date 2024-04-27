import {Fragment,useState,useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

import { userAction } from '../store/slices/UserSlice';
// import apiClient from '../url/index'
import classes from './Header.module.css';
import pp from '../assets/pp.jpeg';


const Header = () =>{
  const [show,setShow] = useState(false)
  const [showChangePassword,setShowChangePassword] = useState(false)
  const [showEditName,setShowEditName] = useState(false)

  const dispatch = useDispatch()
  // const notifications = useSelector(state=>state.notification.notifications)
  const user = useSelector(state=>state.user.data)
  const navigate = useNavigate()
 
  useEffect(()=>{
  //  const fetchNotification = async() =>{
  //   dispatch(isLoadingAction.setIsLoading(true))
  //     try{
  //       const response = await apiClient.get('admin/notification')
  //       if(response.status === 200){
  //         dispatch(notificationAction.setNotifications(response.data))
  //       }
  //     }
  //     catch(err){console.log('err',err)}
  //     finally{
  //       dispatch(isLoadingAction.setIsLoading(false))
  //     }
  //  }
  //  fetchNotification()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const logoutHandler = () =>{
    localStorage.removeItem('token')
    dispatch(userAction.setToken(null))
    dispatch(userAction.setIsAuthenticated(false))
    navigate('/login')
  }
  const accountHandler = () =>{
    // navigate('/account')
    setShowEditName(true)
    
  } 
  const openPasswordChange = () =>{
    setShowChangePassword(true)
  }
  
  const handleClose = ()=>{
    setShow(false)
    setShowChangePassword(false)
    setShowEditName(false)
  }
  const openNotification = () =>{
       setShow(true)
  } 
  return <Fragment>
  <div className={classes.headerNav+' mt-3 bg-white rounded-md d-flex mx-auto flex-row p-2'}>
       <h1>Farmer Information</h1>
      {
         <div className='ms-auto me-3 flex flex-row gap-7'>
       <button className={classes.notificationBtn} >
       <i className="fa-regular fa-bell fs-2" onClick={openNotification}></i>
       </button> 
    

        <img src={pp} alt={'pp'} className={`${classes.profileImg} `} />
        </div>

       
      }
      <div className=''>
      {/* <Dropdown>
        <Dropdown.Toggle className={classes.dropDown+' d-flex align-items-center'} id="profile-dropdown">
        <div className='d-flex overflow-hidden ms-2 align-items-center'>
        <div className='fs-2'><i className="far fa-user"></i></div>
        { 
          //  <img src={profileImage} alt={'profile_photo'} className={classes.profileImg+' img-fluid rounded-circle'} />
          }
             <div className="text-white me-2">
               <div className="ms-2 mt-2 d-flex">
               <span className="text-white fw-bold me-2">{user.fName?? ""}</span>
               <span className="text-white fw-bold">{user.lName?? ""}</span>
               </div>
               <div className='small text-start ms-3'>{user.role}</div>
             </div>
         </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>
            <button className={classes.profileBtn+' text-dark'} onClick={accountHandler}>Edit Your Name</button>            
            </Dropdown.Item>
          <Dropdown.Item>
            <button className={classes.profileBtn+' text-dark'} onClick={openPasswordChange}>Change Password</button>            
            </Dropdown.Item>
          <Dropdown.Item>
          <button className={classes.profileBtn+' text-dark'} onClick={logoutHandler}>Logout</button>            
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      </div>        
       </div>
       <div>
       {/* <Offcanvas show={show} placement='end' backdrop={false} onHide={handleClose}>
       <Offcanvas.Header closeButton>
         <Offcanvas.Title>Notifications</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
         Some text as placeholder. In real life you can have the elements you
         have chosen. Like, text, images, lists, etc.
       </Offcanvas.Body>
     </Offcanvas> */}
       </div>
       {/* <ChangePassword show={showChangePassword} onClose={handleClose} />
       <EditName show={showEditName} onClose={handleClose} /> */}
       </Fragment>
}
export default Header