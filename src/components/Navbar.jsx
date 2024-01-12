import React from 'react';
import { Box,AppBar, Toolbar, Button, Typography } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ToolsIcon from '@mui/icons-material/Build'; 


const Navbar = ({ setActiveComponent }) => {

  const handleVMwareClick = () => {
    setActiveComponent('nestedList');
  };

  const handleVendorClick = () => {
    setActiveComponent('vendorPage');
  };
  const handleSSMToolsClick = () => {
    setActiveComponent('ssmTools');
  };

  const handleStorageInfoClick = () => {
    setActiveComponent('storageInfo')
  };

  const handleAzureInfoClick = () => {
    setActiveComponent('azureInfo')
  };


  return (
    <AppBar position="static">
      <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png" alt="Company Logo" style={{ height: '50px', marginRight: '10px' }} />
          <Typography variant="h6">
            CloudBuildRepeat
          </Typography>
        </Box>
        <Button color="inherit" startIcon={<ComputerIcon fontSize="small"/>} onClick={handleVMwareClick}>VMware</Button>
        <Button color="inherit" startIcon={<ContactPhoneIcon fontSize="large"/>} onClick={handleVendorClick}>Vendor Contact</Button>
        
        <Button color="inherit" startIcon={<ToolsIcon fontSize="large"/>} onClick={handleSSMToolsClick}>SSM Tools</Button>
        <Button color="inherit" startIcon={<StorageIcon fontSize="large"/>} onClick={handleStorageInfoClick}>Storage Info</Button>
        <Button color="inherit" startIcon={<CloudIcon fontSize="large"/>} onClick={handleAzureInfoClick}>Azure Info</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
