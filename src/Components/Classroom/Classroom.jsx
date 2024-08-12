import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import './Classroom.scss'
const FlexContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const FlexItem = styled("div")({
  flexBasis: "30%",
  marginBottom: "30px",
});

export default function Classroom() {
  const [expanded, setExpanded] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      title: "Semester II",
      description: "IT2206 Fundamentals of Software Engineer",
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
      imageUrl: "src/assets/pexels-emily-ranquist-1205651.jpg",
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
    // Add other class items as needed...
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
            <FlexContainer>
              {classes.map((classItem) => (
                <FlexItem key={classItem.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="class">
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

        </div>
      </div>

    </div>
  );
}