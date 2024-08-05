import React from 'react';
import './style.scss';
import { green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DateTime from './DateTime';
const TopicItems = ({ topic }) => {
  return (
    <div className='topsection'>
      <div style={{ display: 'flex', padding: '10px' }}>
        <Avatar sx={{ bgcolor: green[500] }}><AssignmentIcon /></Avatar><h4 style={{ fontSize: '16px', margin: '10px' }}>{topic.title}<br></br><span className='date'><DateTime /></span></h4>
      </div>
      <div style={{padding:"16px" , fontSize:"15px",color:"black"}}>
        <p>{topic.description}</p>
        <a href={topic.link} target='_blank' rel='noopener noreferrer'>{topic.link}</a>
      </div>
     <div className='perma'>
      <a href='#'>permalink</a><br></br>
      <a href='#'>Discuss this topic<span style={{color:"Black" , opacity:"0.7"}}> (0 replies so far) </span></a>
     </div>
    </div>
  );
};

export default TopicItems;

