import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NestedList from './components/NestedList';
import VendorPage from './components/VendorsPage';
import SSMTools from './components/SSMTools';
import StorageInfo from './components/StorageInfo';
import AzureInfo from './components/AzureInfo';
import { Box } from '@mui/material';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/brushed-alum.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.9, // Adjust transparency here
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional: white background with transparency
    }}>
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'nestedList' && <NestedList />}
      {activeComponent === 'vendorPage' && <VendorPage />}
      {activeComponent === 'ssmTools' && <SSMTools />}
      {activeComponent === 'storageInfo' && <StorageInfo />}
      {activeComponent === 'azureInfo' && <AzureInfo/>}
      {/* Add other components controlled by the Navbar here */}
    </Box>
  );
}

export default App;
