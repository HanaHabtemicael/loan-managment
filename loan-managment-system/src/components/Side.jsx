// import { Sidebar, Menu, MenuItem, useProSidebar,SubMenu } from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import hibretlogo from '../assets/hibretlogo.png';
// import { NavLink} from 'react-router-dom';

// function Side() {
//     //const { collapseSidebar } = useProSidebar();
//     const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
//     useProSidebar();
//   const toggle = () => {
//     toggleSidebar();
//     if (toggled) {
//       console.log(true);
//       collapseSidebar();
//     } else {
//       console.log(false);
//       collapseSidebar();
//     }
//   };
//     return (
//         <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
//         <Sidebar   backgroundColor="" className="h-screen pt-4" style={{ background: 'linear-gradient(to top, #4A176D, #00B0AD)', color:"white" }}>
//           <Menu>
//             <MenuItem
//               icon={<MenuOutlinedIcon />}
//               onClick={() => {
//                 collapseSidebar();
//               }}
//               style={{ textAlign: "center" }}
//             >
//               {" "}
//               <div>
//         <img className="px-10 py-7" src={hibretlogo} alt="hibret logo" />
//       </div>
//             </MenuItem>
  
//             <MenuItem icon={<HomeOutlinedIcon />}>
//                 <NavLink to="/dashboard">Dashboard</NavLink>
//             </MenuItem>
            
//             <MenuItem icon={<ContactsOutlinedIcon />}>
//             <NavLink to="/farmer">Farmer</NavLink>
//            </MenuItem>
//             <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//             <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//             <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//           </Menu>
//         </Sidebar>
        
        
//       </div>
  
//       );
    
    
//     }
//     export default Side;
    