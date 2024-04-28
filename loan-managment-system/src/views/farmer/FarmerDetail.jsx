// import React, { useState } from "react";
// //import { Tabs, Tab, Typography } from "@mui/material";
// import FarmerInformation from "./FarmerInformation";
// import Loan from "./Loan";
// import Document from "./Document";
// import classes from './FarmerDetail.module.css';


// const FarmerDetail = ({ farmer }) => {
//   // const [activeTab, setActiveTab] = useState(0);

//   // const handleTabChange = (event, newValue) => {
//   //   setActiveTab(newValue);
//   // };

//   return (
//     <></>
//     {/* <div className={classes.farmerDetailNav+'m-3 bg-white rounded-md d-flex mx-auto flex-row p-2'}>
//       <Tabs value={activeTab} onChange={handleTabChange} >
//         <Tab label="Farmer Information" />
//         <Tab label="Creadit Score" />
//         <Tab label="Documents" />
//       </Tabs>
//       </div>
//       <div className='m-3  bg-white rounded-md flex mx-auto flex-row p-2'>
//       {activeTab === 0 && <Typography><FarmerInformation/></Typography>}
//       {activeTab === 1 && <Typography><Loan/></Typography>}
//       {activeTab === 2 && <Typography><Document/></Typography>}
//       </div>
//     </>
//   );
// }; */}
//   )
// export default FarmerDetail;
import React from 'react';
import { Tabs } from 'antd';
import FarmerInformation from './FarmerInformation';
import { useParams } from 'react-router-dom';
import Loan from './Loan';
import Document from './Document';

const FarmerDetail = () => {
  const { id } = useParams();
  const tabItems = [
    { tab: 'Farmer Information', key: '1', content: <FarmerInformation id={id}/> },
    { tab: 'Loan', key: '2', content: <Loan id={id}/> },
    { tab: 'Document', key: '3', content: <Document id={id}/> },
  ];

  return (
    <div className='bg-white w-95 mx-6 mt-6'>
      <Tabs className=' h-12 '>
        {tabItems.map((item) => (
          <Tabs.TabPane tab={item.tab} key={item.key}>
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default FarmerDetail;