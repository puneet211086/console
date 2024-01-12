import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Link ,Typography} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DataCenterIcon from '@mui/icons-material/ApartmentTwoTone';
import VcenterIcon from '@mui/icons-material/AccountTreeTwoTone';
import IloIcon from '@mui/icons-material/SettingsRemote';
import HostIcon from '@mui/icons-material/SpeakerTwoTone';
import ClusterIcon from '@mui/icons-material/SpeakerGroupTwoTone';

import jsonData from '../dataFiles/vCenterData.json'; 


const NestedList = () => {
  const [openStates, setOpenStates] = useState(jsonData.map(vcenter => ({
    vcenter: false,
    datacenters: vcenter.datacenters.map(datacenter => ({
      datacenter: false,
      clusters: datacenter.clusters.map(cluster => ({
        cluster: false,
        hosts: cluster.hosts.map(() => false)
      }))
    }))
  })));

  const toggleVcenter = (vIdx) => {
    setOpenStates(openStates.map((vcenter, idx) => idx === vIdx ? 
      { ...vcenter, vcenter: !vcenter.vcenter } : vcenter));
  };

  const toggleDatacenter = (vIdx, dIdx) => {
    setOpenStates(openStates.map((vcenter, vi) => vi === vIdx ? 
      { 
        ...vcenter, 
        datacenters: vcenter.datacenters.map((datacenter, di) => di === dIdx ? 
          { ...datacenter, datacenter: !datacenter.datacenter } : datacenter)
      } : vcenter));
  };

  const toggleCluster = (vIdx, dIdx, cIdx) => {
    setOpenStates(openStates.map((vcenter, vi) => vi === vIdx ? 
      { 
        ...vcenter, 
        datacenters: vcenter.datacenters.map((datacenter, di) => di === dIdx ? 
          {
            ...datacenter, 
            clusters: datacenter.clusters.map((cluster, ci) => ci === cIdx ? 
              { ...cluster, cluster: !cluster.cluster } : cluster)
          } : datacenter)
      } : vcenter));
  };

  const toggleHost = (vIdx, dIdx, cIdx, hIdx) => {
    setOpenStates(openStates.map((vcenter, vi) => vi === vIdx ? 
      { 
        ...vcenter, 
        datacenters: vcenter.datacenters.map((datacenter, di) => di === dIdx ? 
          {
            ...datacenter, 
            clusters: datacenter.clusters.map((cluster, ci) => ci === cIdx ? 
              { 
                ...cluster, 
                hosts: cluster.hosts.map((host, hi) => hi === hIdx ? !host : host) 
              } : cluster)
          } : datacenter)
      } : vcenter));
  };

  return (
    <List>
    <Typography variant="h5" sx={{ textAlign: 'left', mt: 2 ,mb:4}}>VMware vCenter Server List</Typography>
      {jsonData.map((vcenter, vIdx) => (
        <React.Fragment key={vIdx}>
          <ListItem button onClick={() => toggleVcenter(vIdx)} sx={{ borderRadius:'10px',mb:1 ,borderTop: 1, borderColor: 'divider', boxShadow:2}}  >
            <VcenterIcon sx={{ mr: 1 }}  />
            <ListItemText primary={<Link href={vcenter.url} target="_blank" rel="noopener">{vcenter.name}</Link>} />
            {openStates[vIdx].vcenter ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openStates[vIdx].vcenter} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {vcenter.datacenters.map((datacenter, dIdx) => (
                <React.Fragment key={dIdx}>
                  <ListItem button onClick={() => toggleDatacenter(vIdx, dIdx)} sx={{ pl: 4 }}>
                    <DataCenterIcon sx={{ mr: 1 }} />
                    <ListItemText inset primary={datacenter.name} />
                    {openStates[vIdx].datacenters[dIdx].datacenter ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openStates[vIdx].datacenters[dIdx].datacenter} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {datacenter.clusters.map((cluster, cIdx) => (
                        <React.Fragment key={cIdx}>
                          <ListItem button onClick={() => toggleCluster(vIdx, dIdx, cIdx)} sx={{ pl: 6 }}>
                            <ClusterIcon sx={{ mr: 1 }} />
                            <ListItemText inset primary={cluster.name} />
                            {openStates[vIdx].datacenters[dIdx].clusters[cIdx].cluster ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>
                          <Collapse in={openStates[vIdx].datacenters[dIdx].clusters[cIdx].cluster} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {cluster.hosts.map((host, hIdx) => (
                                <React.Fragment key={hIdx}>
                                  <ListItem button onClick={() => toggleHost(vIdx, dIdx, cIdx, hIdx)} sx={{ pl: 8 }}>
                                    <HostIcon sx={{ mr: 1 }} />
                                    <ListItemText 
                                      inset 
                                      primary={<Link href={host.url} target="_blank" rel="noopener">{host.name}</Link>} />
                                    {openStates[vIdx].datacenters[dIdx].clusters[cIdx].hosts[hIdx] ? <ExpandLess /> : <ExpandMore />}
                                  </ListItem>
                                  <Collapse in={openStates[vIdx].datacenters[dIdx].clusters[cIdx].hosts[hIdx]} timeout="auto" unmountOnExit>
                                    <ListItem sx={{ pl: 10 }}>
                                      <IloIcon sx={{ mr: 1 }} />
                                      <ListItemText 
                                        inset 
                                        secondary={<Link href={host.iloUrl} target="_blank" rel="noopener"> {host.iloUrl}</Link>} />
                                    </ListItem>
                                  </Collapse>
                                </React.Fragment>
                              ))}
                            </List>
                          </Collapse>
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default NestedList;
