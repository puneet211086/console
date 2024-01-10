import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NestedList from './components/NestedList';
import VendorPage from './components/VendorsPage';
import SSMTools from './components/SSMTools';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'nestedList' && <NestedList />}
      {activeComponent === 'vendorPage' && <VendorPage />}
      {activeComponent === 'ssmTools' && <SSMTools />}
      {/* Add other components controlled by the Navbar here */}
    </div>
  );
}

export default App;
