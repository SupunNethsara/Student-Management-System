import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const items = [
  {
    id: 1,
    primary: 'Item One',
    secondary: 'This is item one description',
    avatar: 'A',
  },
  {
    id: 2,
    primary: 'Item Two',
    secondary: 'This is item two description',
    avatar: 'B',
  },
  {
    id: 3,
    primary: 'Item Three',
    secondary: 'This is item three description',
    avatar: 'C',
  },
];

const MyList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((item) => (
        <ListItem key={item.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>{item.avatar}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.primary}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {item.secondary}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default MyList;