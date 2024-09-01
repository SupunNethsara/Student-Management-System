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
import CourseOverview from "./Corce-overview/course-overview";
import CustomizedMenus from "./button/CustomizedMenus";
import Menuitem from "./button/Menuitem";
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Classroom.scss'



const FlexContainer = styled("div")({

});
const FlexItem = styled("div")({

});

export default function Classroom() {
  const [expanded, setExpanded] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      title: "Semester I",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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
      id: 2,
      title: "Semester II",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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
      id: 3,
      title: "Semester III",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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
      id: 4,
      title: "Semester IV",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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
      id: 5,
      title: "Semester V",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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
      id: 6,
      title: "Semester VI",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/education4.avif",
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



  return (

    <div>
      <div className="classeslist">
        <div className="imgcorces">
          {!selectedClass ? (
            <FlexContainer className="flexcontainer" >
              {classes.map((classItem) => (
                <FlexItem style={{ margin: '15px' }} className="cardflex" key={classItem.id}>
                  <Card sx={{ width: '100%', boxShadow: '0 2px 5px 0 rgba(83, 75, 202, 0.199), 0 4px 15px 0 rgba(71, 73, 196, 0.19)' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ backgroundColor: '#EA4450' }} aria-label="class">
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
                      sx={{ objectFit: "cover" }}
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
   

          <div className="upcomingactive">
            <h6>Timeline</h6>
            <div style={{ display: "flex", width: '100%', justifyContent: 'space-between', padding: '2px' }}>
              <CustomizedMenus />
              <Menuitem />

            </div>
            <hr style={{ border: '1px solid #C4C8CC' }} />


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div>
                <img src="src/assets/activities.svg" alt="" />
              </div>
            </div>
            <p style={{ color: '#C4C8CC', justifyContent: 'center', textAlign: 'center', alignItems: 'center', margin: '10px' }}>No upcoming activities due</p></div>
          <div/>



          <div className="calender">
            <CourseOverview />
          </div>

          
        </div>
      </div>
    </div>

  );
}
