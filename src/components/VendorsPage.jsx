import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const VendorPage = () => {
  const [open, setOpen] = useState({});

  const vendorsData = [
    {
      "name": "Commvault",
      "details": {
        "contactPerson": "John Doe",
        "phoneNumber": "123-456-7890",
        "supportUrl": "https://www.commvault.com/support",
        "accountNumber": "CV12345"
      }
    },
    {
      "name": "Brocade",
      "details": {
        "contactPerson": "Jane Smith",
        "phoneNumber": "987-654-3210",
        "supportUrl": "https://www.brocade.com/support",
        "accountNumber": "BR67890"
      }
    },
  ]

  const handleClick = (name) => {
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <List>
      {vendorsData.map((vendor, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(vendor.name)}>
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
