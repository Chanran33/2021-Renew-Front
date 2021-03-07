import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
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

export default function Tags() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div style={{float:"left", textAlign:"initial"}}>
    <h1>Tags</h1>
        <div style={{display:"block"}} className={classes.root}>
        <Chip
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />        
        <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
            label="Deletable secondary"
            onDelete={handleDelete}
            color="secondary"
        />
        </div>
    </div>
  );
}
