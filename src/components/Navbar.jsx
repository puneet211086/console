import React from 'react';
import { Box,AppBar, Toolbar, Button, Typography } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ToolsIcon from '@mui/icons-material/Build'; 
import GuideIcon from '@mui/icons-material/MenuBook'; 


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

  const handleHowToGuidesClick = () => {
    console.log("How to Guides Clicked");
    // Add logic for handling click here
  };

  // Add similar handlers for other buttons if needed

  return (
    <AppBar position="static">
      <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png" alt="Company Logo" style={{ height: '50px', marginRight: '10px' }} />
          <Typography variant="h6">
            CloudBuildRepeat
          </Typography>
        </Box>
        <Button color="inherit" startIcon={<ComputerIcon />} onClick={handleVMwareClick}>VMware</Button>
        <Button color="inherit" startIcon={<ContactPhoneIcon />} onClick={handleVendorClick}>Vendor Contact</Button>
        {/* Add other buttons with similar functionality */}
        <Button color="inherit" startIcon={<ToolsIcon />} onClick={handleSSMToolsClick}>SSM Tools</Button>
        <Button color="inherit" startIcon={<GuideIcon />} onClick={handleHowToGuidesClick}>How to Guides</Button>
        <Button color="inherit" startIcon={<StorageIcon />}>Storage</Button>
        <Button color="inherit" startIcon={<CloudIcon />}>Azure</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
