import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';

interface LoginFormData {
  userId: string;
  password: string;
}

const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Grid container direction="column">
      <form onSubmit={onSubmit}>
        <Controller
          name="userId"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Grid item>
              <TextField
                label="User ID"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="text"
                margin="dense"
              />
            </Grid>
          )}
          rules={{ required: 'User ID required.' }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
                margin="dense"
              />
            </Grid>
          )}
          rules={{ required: 'Password required.' }}
        />
        <Grid container direction="column" alignItems="flex-end" mt={1}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginForm;
