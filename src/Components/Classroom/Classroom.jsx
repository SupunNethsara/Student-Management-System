import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ResponsiveDateCalendar from "../calender/ResponsiveDateCalendar";
import CustomizedMenus from "./button/CustomizedMenus";
import Menuitem from "./button/Menuitem";
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Classroom.scss'

const FlexContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",
  padding: "10px",
});

const FlexItem = styled("div")({
  flexBasis: "100%",
  '@media (min-width: 700px)': {
    flexBasis: "100%",
  },
  '@media (min-width: 600px)': {
    flexBasis: "100%",

  },
  '@media (min-width: 900px)': {
    flexBasis: "30%",
  },
  marginBottom: "20px",

});

export default function Classroom() {
  const [expanded, setExpanded] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      title: "Semester I",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },

    {
      id: 1,
      title: "Semester II",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Semester III",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Semester IV",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Semester V",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Semester VI",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education2.avif",
      subjects: [
        {
          name: "Subject 1",
          pdfs: [
            { name: "Lecture 1", link: "pdf_link_1" },
            { name: "Lecture 2", link: "pdf_link_2" },
          ],
        },
        {
          name: "Subject 2",
          pdfs: [
            { name: "Lecture 3", link: "pdf_link_3" },
            { name: "Lecture 4", link: "pdf_link_4" },
          ],
        },
      ],
    },

  ];


  const handleExpandClick = (classId) => {
    setSelectedClass(classId);
    setExpanded(!expanded);
  };

  const handleBackClick = () => {
    setSelectedClass(null);
    setExpanded(false);
  };

  ///Upcoming activities/////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <div className="classeslist">
        <div className="imgcorces">
          {!selectedClass ? (
            <FlexContainer>
              {classes.map((classItem) => (
                <FlexItem className="cardflex" key={classItem.id}>
                  <Card sx={{ maxWidth: 500, width: '100%' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ backgroundColor:'#0A549E' }} aria-label="class">
                          {classItem.title.charAt(0)}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={classItem.title}
                      subheader={classItem.description}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={classItem.imageUrl}
                      alt={classItem.title}
                    />
                    <CardActions disableSpacing>
                      <IconButton onClick={() => handleExpandClick(classItem.id)}>
                        <FolderIcon />
                      </IconButton>
                      <IconButton>
                        <AssignmentIndIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </FlexItem>
              ))}
            </FlexContainer>
          ) : (
            <div>
              <IconButton onClick={handleBackClick}>Back</IconButton>
              {classes
                .find((classItem) => classItem.id === selectedClass)
                .subjects.map((subject, index) => (
                  <div key={index} className="subject-item">
                    <Typography variant="h6">{subject.name}</Typography>
                    {subject.pdfs.map((pdf, pdfIndex) => (
                      <div key={pdfIndex}>
                        <a
                          href={pdf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pdf.name}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="corcesfind">
          <div className="calender">
            <ResponsiveDateCalendar />
          </div>

          <div className="upcomingactive">
            <h6>Timeline</h6>
            <div style={{ display: "flex", width: '100%', justifyContent: 'space-between', padding: '2px' }}>
              <CustomizedMenus />
              <Menuitem/>

            </div>
            <hr style={{ border: '1px solid #C4C8CC' }} />
            
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div>
                <img src="src/assets/activities.svg" alt="" srcset="" />
                </div>
             </div>
             <p style={{ color: '#C4C8CC' ,justifyContent:'center' ,textAlign:'center',alignItems:'center' ,margin:'10px' }}>No upcoming activities due</p></div>

          
        </div>
      </div>
    </div>
  );
}
