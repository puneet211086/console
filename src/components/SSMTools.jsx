import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const ssmToolsData = [
    {
      name: "Service Now",
      description: "Service management platform for IT services.",
      servers: ["Server1", "Server2"],
      ipAddresses: ["192.168.1.1", "192.168.1.2"]
    },
    {
      name: "WhatsUp Gold",
      description: "Network monitoring and management tool.",
      servers: ["Server3", "Server4"],
      ipAddresses: ["192.168.1.3", "192.168.1.4"]
    },
  ];
  

const SSMTools = () => {
  const [open, setOpen] = useState({});

  const handleClick = (name) => {
    setOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <List>
      {ssmToolsData.map((tool, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(tool.name)}>
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
                          <Link href={`#server-${server}`} >{server}</Link>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      {tool.ipAddresses.map((ip, idx) => (
                        <div key={idx}>
                          <Link href={`#ip-${ip}`} >{ip}</Link>
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
