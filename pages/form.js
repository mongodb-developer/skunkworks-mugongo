import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
<form action="/api/submit" method="post">

  <label for="first">First name:</label>

  <input type="text" id="first" name="first" />
  <label for="company">Company:</label>

  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
  );
}
