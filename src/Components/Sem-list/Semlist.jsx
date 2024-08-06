import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Semlist() {
  return (
    <div>
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
          <li>IT2406 Web Application Development</li> 
           <li>IT2306 Database Systems</li>
           <li>IT2206 Software Engineering</li>
           <li>IT2106 Mathematics for Computing</li>
           <li>EN2106 Communication Skills</li>
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
           <li>IT2406 Web Application Development</li> 
           <li>IT2306 Database Systems</li>
           <li>IT2206 Software Engineering</li>
           <li>IT2106 Mathematics for Computing</li>
           <li>EN2106 Communication Skills</li>
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
           <li>IT2406 Web Application Development</li> 
           <li>IT2306 Database Systems</li>
           <li>IT2206 Software Engineering</li>
           <li>IT2106 Mathematics for Computing</li>
           <li>EN2106 Communication Skills</li>
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
           <li>IT2406 Web Application Development</li> 
           <li>IT2306 Database Systems</li>
           <li>IT2206 Software Engineering</li>
           <li>IT2106 Mathematics for Computing</li>
           <li>EN2106 Communication Skills</li>
         </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}