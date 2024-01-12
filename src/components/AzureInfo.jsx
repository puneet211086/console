import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link, Table, TableBody, TableCell, TableHead, TableRow, Box, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import azureData from '../dataFiles/azureData.json'; 
import CloudCircleTwoToneIcon from '@mui/icons-material/CloudCircleTwoTone';

const AzureInfo = () => {
  const [open, setOpen] = useState({});

  const handleClick = (projectName) => {
    setOpen(prev => ({ ...prev, [projectName]: !prev[projectName] }));
  };

  return (
    <List>
    <Typography variant="h5" sx={{ textAlign: 'left', mt: 2 ,mb:4}}>Azure Info</Typography>
      {azureData.map((project, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(project.projectName)} sx={{ borderRadius:'10px',mb:1 ,borderTop: 1, borderColor: 'divider', boxShadow:2}}>
            <CloudCircleTwoToneIcon/>
            <ListItemText primary={project.projectName} />
            {open[project.projectName] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[project.projectName]} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Purpose</TableCell>
                    <TableCell>URL</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{project.projectName}</TableCell>
                    <TableCell>{project.details.purpose}</TableCell>
                    <TableCell>
                      <Link href={project.details.url} target="_blank" rel="noopener noreferrer">
                        {project.details.url}
                      </Link>
                    </TableCell>
                    <TableCell>{project.details.location}</TableCell>
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

export default AzureInfo;
