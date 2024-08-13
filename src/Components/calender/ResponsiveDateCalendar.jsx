import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ResponsiveDateCalendar = () => {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
          
            padding: '5px',
            width: isSmallScreen ? '100%' : 'auto',
            '.MuiPickersCalendarHeader-root': {
              flexDirection: isSmallScreen ? 'column' : 'row',
            },
            '.MuiPickersDay-root': {
              margin: isSmallScreen ? '2px' : '4px',
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ResponsiveDateCalendar;

// import React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useMediaQuery } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const ResponsiveDateCalendar = () => {
//   const theme = createTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <ThemeProvider theme={theme}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           sx={{
//             padding: '2px',
//             width: isSmallScreen ? '100%' : '250px', // Set a smaller width for non-small screens
//             '.MuiPickersCalendarHeader-root': {
//               flexDirection: isSmallScreen ? 'column' : 'row',
//             },
//             '.MuiPickersDay-root': {
//               margin: isSmallScreen ? '1px' : '2px', // Reduce margin between days
//               width: '30px', // Set a smaller size for days
//               height: '30px', // Set a smaller size for days
//               fontSize: '0.75rem', // Reduce font size
//             },
//             '.MuiTypography-root': {
//               fontSize: '0.8rem', // Reduce font size of header text
//             },
//             '.MuiPickersCalendarHeader-labelContainer': {
//               padding: '4px', // Reduce padding around the label
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </ThemeProvider>
//   );
// };

// export default ResponsiveDateCalendar;
