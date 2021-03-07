import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Filter() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <h1>Filter</h1>
        <FormControl component="fieldset">
        <RadioGroup aria-label="Filter" name="time1" value={value} onChange={handleChange}>
            <FormControlLabel value="popular" control={<Radio />} label="Most Popular" />
            <FormControlLabel value="recent" control={<Radio />} label="Most Recent" />
        </RadioGroup>
        </FormControl>
    </div>
  );
}
