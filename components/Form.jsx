//MUI:
import { FormControl, FormGroup, Typography, Button, styled, TextField } from '@mui/material';

//Personalización de componentes:
const Container = styled(FormGroup)`
  width: 50%;
  margin: 2% auto 0 auto;
  & > div {
    margin-top: 15px;
  }
`;

export const Form = ({ state, title, handleInputChange, handleSubmit }) => {
  return (
    <Container id="form">
      <Typography align="center" variant="h4">
        {title}
      </Typography>
      <FormControl>
        <TextField
          required
          autoFocus
          id="outlined-required"
          label="Name"
          type="text"
          variant="filled"
          autoComplete="off"
          value={state.name || ''}
          onChange={handleInputChange}
          name="name"
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          variant="filled"
          name="lastName"
          type="text"
          label="Last name"
          value={state.lastName || ''}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          variant="filled"
          name="email"
          type="email"
          label="Email"
          value={state.email || ''}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          variant="filled"
          name="phone"
          type="number"
          label="Phone"
          value={state.phone || ''}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          variant="filled"
          name="salary"
          type="number"
          label="Salary"
          value={state.salary || ''}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
      </FormControl>
    </Container>
  );
};
