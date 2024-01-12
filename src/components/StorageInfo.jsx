import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box,Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import storageData from '../dataFiles/storageData.json';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';

const StorageInfo = () => {
  const [open, setOpen] = useState({});

  const handleClick = (name) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <List>
    <Typography variant="h5" sx={{ textAlign: 'left', mt: 2 ,mb:4}}>Storage Info</Typography>
      {storageData.map((storage, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(storage.name)} sx={{ borderRadius:'10px',mb:1 ,borderTop: 1, borderColor: 'divider', boxShadow:2}}>
          <StorageTwoToneIcon/>
            <ListItemText primary={storage.name} />
            {open[storage.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[storage.name]} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>IP</TableCell>
                    <TableCell>Purpose</TableCell>
                    <TableCell>URL</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{storage.name}</TableCell>
                    <TableCell>{storage.details.ip}</TableCell>
                    <TableCell>{storage.details.purpose}</TableCell>
                    <TableCell>
                      <Link href={storage.details.url} target="_blank" rel="noopener noreferrer">
                        {storage.details.url}
                      </Link>
                    </TableCell>
                    <TableCell>{storage.details.location}</TableCell>
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

export default StorageInfo;
