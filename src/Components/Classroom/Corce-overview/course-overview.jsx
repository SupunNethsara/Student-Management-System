import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';
import './CourseOverview.scss';

const courses = [
  { name: "Fundamentals of Software Engineering", progress: 75 },
  { name: "Data Structures and Algorithms", progress: 50 },
  { name: "Data Management System", progress: 40 },
  { name: "Web Application Development", progress: 90 },
  { name: "Communication Skills", progress: 60 },
];

export default function CourseOverview() {
  return (
    <Card className="course-overview-card" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{fontSize:'16px' , margin:'0' ,fontWeight:'bold' ,padding:'10px 0 10px 0'}} variant="h6" component="div" gutterBottom>
          Course Progress
        </Typography>
        {courses.map((course, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography  sx={{ fontWeight: 'bold' , color:'#808080', fontSize:'13px' ,paddingTop:'10px' }}>
              {course.name}
            </Typography>
            <LinearProgress variant="determinate" value={course.progress} sx={{ height: 5, borderRadius: 5, marginTop: 1 }} />
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 0.5 ,fontSize:'12px'}}>
              {course.progress}% Complete
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

