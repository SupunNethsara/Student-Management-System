import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import Diversity2Icon from '@mui/icons-material/Diversity2';

export default function Semlist() {
  return (
    <div className='sem'>
        <div>
            <h6 style={{padding:"10px" , fontSize:'15px' ,color:'#5d5f61',fontWeight:'600'}}> <span style={{padding:'10px'}}><SchoolIcon/></span>  Bechalor Of Information Technology </h6>
        </div>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Semester I</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <li> <Diversity2Icon sx={{color:'#C0C0C0'}}/> IT2406 Web Application Development</li> 
           <li> <Diversity2Icon sx={{color:'#C0C0C0'}}/> IT2306 Database Systems</li>
           <li> <Diversity2Icon sx={{color:'#C0C0C0'}}/> IT2206 Software Engineering</li>
           <li> <Diversity2Icon sx={{color:'#C0C0C0'}}/> IT2106 Mathematics for Computing</li>
           <li> <Diversity2Icon sx={{color:'#C0C0C0'}}/> EN2106 Communication Skills</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Semester II</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <li><Diversity2Icon sx={{color:'#C0C0C0'}}/>IT2406 Web Application Development</li> 
           <li><Diversity2Icon sx={{color:'#C0C0C0'}}/>IT2306 Database Systems</li>
           <li><Diversity2Icon sx={{color:'#C0C0C0'}}/>IT2206 Software Engineering</li>
           <li><Diversity2Icon sx={{color:'#C0C0C0'}}/>IT2106 Mathematics for Computing</li>
           <li><Diversity2Icon sx={{color:'#C0C0C0'}}/>EN2106 Communication Skills</li>
         </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Semester III</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
         </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Semester IV</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
         </Typography>
        </AccordionDetails>
      </Accordion>

   </div>
  );
}