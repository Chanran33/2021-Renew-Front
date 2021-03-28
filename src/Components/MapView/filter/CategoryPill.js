import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function CategoryPill() {
  const classes = useStyles();

  // const handleDelete = () => {
  //   console.info("You clicked the delete icon.");
  // };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar alt="Class" src="../MapImag/map_class.png" />}
        label="Class"
        onClick={handleClick}
      />
      <Chip
        avatar={
          <Avatar alt="Fleamarket" src="../MapImages/map_fleamarket.png" />
        }
        label="Fleamarket"
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar alt="Share" src="../MapImages/map_share.png" />}
        label="Share"
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar alt="Store" src="../MapImages/map_store.png" />}
        label="Store"
        onClick={handleClick}
      />

      {/* <Chip
        avatar={<Avatar alt="Class" src="../MapImages/map_class.png" />}
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      /> */}

      {/* <Chip
        avatar={<Avatar alt="Class" src="../MapImages/map_class.png" />}
        label="Class"
        onDelete={handleDelete}
      />
      <Chip
        avatar={<Avatar alt="Class" src="../MapImages/map_class.png" />}
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      /> */}
    </div>
  );
}
