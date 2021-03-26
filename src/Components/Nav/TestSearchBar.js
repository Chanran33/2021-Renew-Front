import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function TestSearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        className={classes.input}
        placeholder="Search for Store"
        inputProps={{ "aria-label": "search for store" }}
      />

      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}
