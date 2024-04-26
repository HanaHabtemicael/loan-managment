import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import FarmerInformation from "./FarmerInformation";
import Loan from "./Loan";
import Document from "./Document";
import classes from './FarmerDetail.module.css';


const FarmerDetail = ({ farmer }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={classes.farmerDetailNav+'my-16 shadow-md bg-white rounded-md d-flex mx-auto flex-row p-2 flex-wrap mt-11'}>
      <Tabs value={activeTab} onChange={handleTabChange} >
        <Tab label="Farmer Information" />
        <Tab label="Creadit Score" />
        <Tab label="Documents" />
      </Tabs>
      {activeTab === 0 && <Typography><FarmerInformation/></Typography>}
      {activeTab === 1 && <Typography><Loan/></Typography>}
      {activeTab === 2 && <Typography><Document/></Typography>}
    </div>
  );
};

export default FarmerDetail;