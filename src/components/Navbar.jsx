import React, {useState} from 'react';
import { Box,AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery,ListItemIcon,ListItemText } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ToolsIcon from '@mui/icons-material/Build'; 
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = ({ setActiveComponent }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    if (isMobile) setDrawerOpen(false);
  };

  const drawerList = (
    <List>
      <ListItem button onClick={() => handleButtonClick('nestedList')}>
      <ListItemIcon><ComputerIcon /></ListItemIcon>
      <ListItemText primary="VMware" sx={{ marginLeft: 1 }} />
      </ListItem>

      <ListItem button onClick={() => handleButtonClick('vendorPage')}>
      <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
      <ListItemText primary="Vendor Contact" sx={{ marginLeft: 1 }} />
        
      </ListItem>
      <ListItem button onClick={() => handleButtonClick('ssmTools')}>
      <ListItemIcon><ToolsIcon /></ListItemIcon>
      <ListItemText primary="SSM Tools" sx={{ marginLeft: 1 }} />
      
      </ListItem>
      <ListItem button onClick={() => handleButtonClick('storageInfo')}>
      <ListItemIcon><StorageIcon /></ListItemIcon>
      <ListItemText primary="Storage Info" sx={{ marginLeft: 1 }} />
        
      </ListItem>
      <ListItem button onClick={() => handleButtonClick('azureInfo')}>
      <ListItemIcon><CloudIcon /></ListItemIcon>
      <ListItemText primary="Azure Info" sx={{ marginLeft: 1 }} />
      </ListItem>
    </List>
  );


return (
  <>
    <AppBar position="static">
      <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png" alt="Company Logo" style={{ height: '50px', marginRight: '10px' }} />
          <Typography variant="h6">
            CloudBuildRepeat
          </Typography>
        </Box>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
       
        {!isMobile && (
          <>
            <Button color="inherit" startIcon={<ComputerIcon fontSize="small"/>} onClick={() => handleButtonClick('nestedList')} >VMware</Button>
            <Button color="inherit" startIcon={<ContactPhoneIcon fontSize="large"/>} onClick={() => handleButtonClick('vendorPage')}>Vendor Contact</Button>
            <Button color="inherit" startIcon={<ToolsIcon fontSize="large"/>} onClick={() => handleButtonClick('ssmTools')}>SSM Tools</Button>
            <Button color="inherit" startIcon={<StorageIcon fontSize="large"/>} onClick={() => handleButtonClick('storageInfo')}>Storage Info</Button>
            <Button color="inherit" startIcon={<CloudIcon fontSize="large"/>} onClick={() => handleButtonClick('azureInfo')}>Azure Info</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      {drawerList}
    </Drawer>
  </>
);
};

export default Navbar;


