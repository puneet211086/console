import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box , Typography} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import vendorsData from '../dataFiles/vendorsData.json';
import Contacts from '@mui/icons-material/CallTwoTone';

const VendorPage = () => {
  const [open, setOpen] = useState({});


  const handleClick = (name) => {
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <List>
    <Typography variant="h5" sx={{ textAlign: 'left', mt: 2 ,mb:4}}>Vendor Contact List</Typography>
      {vendorsData.map((vendor, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(vendor.name)} sx={{ background:'#d3d3d3',borderRadius:'10px',mb:1 ,borderTop: 1, borderColor: 'divider', boxShadow:2}}>
            <Contacts/>
            <ListItemText primary={vendor.name} />
            {open[vendor.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[vendor.name]} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Contact</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Support URL</TableCell>
                    <TableCell>Account Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{vendor.details.contactPerson}</TableCell>
                    <TableCell>{vendor.details.phoneNumber}</TableCell>
                    <TableCell>
                      <Link href={vendor.details.supportUrl} target="_blank">
                        {vendor.details.supportUrl}
                      </Link>
                    </TableCell>
                    <TableCell>{vendor.details.accountNumber}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};
export default VendorPage;
