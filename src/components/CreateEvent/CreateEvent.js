import React from 'react';
import TextField from '@mui/material/TextField';
import './CreateEvent.css';
import {Link} from  "react-router-dom";

function CreateEvent(props) {
  return (
     <div className='creteEvent'>
      <div className='p-5' style={{width:'500px', backgroundColor:"white" }}>
      <TextField className='w-100' id="standard-basic" color="secondary" focused  label="Event Name" variant="standard" /><br/><br/>
      <TextField className='w-100' id="standard-basic" color="secondary" focused label="Host Name" variant="standard" /><br/><br/>
      <TextField className='w-100' id="standard-basic" color="secondary" focused  label="Start Time" variant="standard" /><br/><br/>
      <TextField className='w-100' id="standard-basic" color="secondary" focused label="End Time" variant="standard" /><br/><br/>
      <TextField className='w-100' id="standard-basic" color="secondary" focused  label="Location" variant="standard" /><br/><br/>
      

      </div>
      <div>
      <p className='headerText paraText'>
        Create Your<br/>
        <span className='gradientHeaderText'> Desier</span><br/>
        event.
        </p>
        <Link to="/event" className='gradientButton mt-4'>Next</Link>
      
      </div>
           
      </div>
  
  );
}

export default CreateEvent;
