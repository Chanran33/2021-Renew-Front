import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BookIcon from '@material-ui/icons/Book';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Platform() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div style={{float:"left", textAlign:"left"}}>
    <h1>Platform</h1>
        <div className={classes.root}>
        <Chip
            icon={<YouTubeIcon />}
            label="Youtube"
            clickable
            color="primary"
        />
         <Chip
            icon={<InstagramIcon />}
            label="Instagram"
            clickable
            color="primary"
        />
         <Chip
            icon={<BookIcon />}
            label="Blog"
            clickable
            color="primary"
        />
        </div>
    </div>
  );
}
