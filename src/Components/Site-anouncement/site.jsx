import React from 'react'
import Topics from './Topics'
import './style.scss';
import { colors } from '@mui/material';
function site() {
  return (
    <div className='site'>
            <h3 style={{color:"black"}}>Site announcements</h3>
            <Topics/>
    </div>
  )
}

export default site;
