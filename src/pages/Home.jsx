import React, { Component } from 'react'
import './CSS/Home.scss'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Site from '../Components/Site-anouncement/site';

//online offline stetus
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const StyledBadged = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export class Home extends Component {
  render() {
    return (
      <div>

        <div className='mainly'>
          <div className="leftside">
            <div className="img">
              <div style={{ padding: '40px' }}>
                <img src="src/assets/ucsc-logo.png" alt="" className="imgpng" />
                <h3 style={{ fontSize: '18px', lineHeight: '40px' }}>University of Colombo School of Computing</h3>
                <h4 style={{ fontSize: '20px', lineHeight: '40px' }}>Welcome to the Virtual Learning Environment for the BIT Students</h4>
                <h4 style={{ fontSize: '15px', lineHeight: '30px' }}>BIT සිසුන් සඳහා වූ අතථ්‍ය ඉගෙනුම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!</h4>
                <h4 style={{ fontSize: '15px', lineHeight: '30px' }}>BIT மாணவர்களை மெய்நிகர் கற்றல் சுற்றுச்சூழல்ற்கு வரவேற்கிறோம்!</h4>
                <h2 style={{ lineHeight: '60px', fontSize: '35px' }}>Academic Year 2023</h2>
                <Button style={{width:'200px',marginTop:'10px'}} variant="contained" size="medium">Visit Announcement</Button>
            
              </div>

            </div>
            <div>
             <Site/>
            </div>
          
          </div>

         
          <div className="rightside">
            <div className='calcontrol'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>

            <div className='stetus' id='demo'>
              <p style={{fontWeight:'bold',paddingBottom:'7px',fontSize:'18px'}}>Online Users</p>
              <div className='ste'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="src/assets/OIP.jpeg" />
                </StyledBadge>
                <span style={{ margin: '25px' }}>Supun Nethsara</span>
              </div>

              <div className='ste'>
                <StyledBadged
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="src/assets/boys-profile-pics-847.jpg" />
                </StyledBadged>
                <span style={{ margin: '25px' }}>Nishan Madhushka</span>
              </div>

              <div className='ste'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="src/assets/boys.webp" />
                </StyledBadge>
                <span style={{ margin: '25px' }}>Dimuth Karunarathne</span>
              </div>

              <div className='ste'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="src/assets/OIP1.jpeg" />
                </StyledBadge>
                <span style={{ margin: '25px' }}>Dinesh Chandimal</span>
              </div>

              <div className='ste'>
                <StyledBadged
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  
                  
                >
                  <Avatar alt="Remy Sharp" src="src/assets/R.jpeg" />
                </StyledBadged>
                <span style={{ margin: '25px' }}>Prasadi Thakshila</span>
              </div>

            </div>

          </div>
        </div>


      </div>
    )
  }
}

export default Home