import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box ,Typography} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ssmToolsData from '../dataFiles/ssmToolsData.json'
import Tools from '@mui/icons-material/BuildTwoTone';

const SSMTools = () => {
  const [open, setOpen] = useState({});
  

  const handleClick = (name) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <List>
    <Typography variant="h5" sx={{ textAlign: 'left', mt: 2 ,mb:4}}>SSM Tools List</Typography>
      {ssmToolsData.map((tool, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(tool.name)} sx={{ background:'#d3d3d3',borderRadius:'10px',mb:1 ,borderTop: 1, borderColor: 'divider', boxShadow:2}}>
            <Tools/>
            <ListItemText primary={tool.name} />
            {open[tool.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[tool.name]} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Servers</TableCell>
                    <TableCell>IP Addresses</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{tool.description}</TableCell>
                    <TableCell>
                      {tool.servers.map((server, idx) => (
                        <div key={idx}>
                          <Link href={server.url} target="_blank" rel="noopener noreferrer">{server.name}</Link>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      {tool.ipAddresses.map((ip, idx) => (
                        <div key={idx}>
                          <Link href={ip.url} target="_blank" rel="noopener noreferrer">{ip.address}</Link>
                        </div>
                      ))}
                    </TableCell>
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

export default SSMTools;
