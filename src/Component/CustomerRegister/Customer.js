import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomerLogin from './CustomerLogin';
import CustomerSignUp from './CustomerSignUp';
import {makeStyles} from '@material-ui/core';
const useStyles=makeStyles(()=>(
  {
    tabname:{
      fontSize:20
    }
  }
)
)
const Customer=()=>{
const [value,setValue]=useState(0)
const classes=useStyles();
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:400,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" className={classes.tabname}/>
         
          <Tab label="Sign Up" className={classes.tabname}/>
        </Tabs>
        <TabPanel value={value} index={0}>
       <CustomerLogin handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <CustomerSignUp/>
      </TabPanel>
      </Paper>
      
    )
}

export default Customer;