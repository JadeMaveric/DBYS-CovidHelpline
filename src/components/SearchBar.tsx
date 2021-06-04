import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface SearchBarProps {
  queryHandler: (arg0: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const classes = useStyles();
  const { queryHandler } = props;

  return (
    <div className={classes.root}>
      <OutlinedInput
        fullWidth
        placeholder={"Search"}
        onChange={(e) => queryHandler(e.target.value)}
        inputProps={{ "aria-label": "search" }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;
