import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';

interface LoginFormData {
  userId: string;
  password: string;
  otp: string;
}

interface LoginFormState {
  otpPhase: boolean;
  endpoint: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [loginFormState, setLoginForm] = useState<LoginFormState>({
    otpPhase: false,
    endpoint: '/api/v1/login',
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    unregister,
  } = useForm<LoginFormData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // fetch
    if (!loginFormState.otpPhase) {
      setLoginForm({ otpPhase: true, endpoint: '/api/v1/otp' });
    } else {
      // set token
      router.push('/main');
    }
  });

  useEffect(() => {
    if (loginFormState.otpPhase) {
      unregister(['userId', 'password']);
      register('otp', {
        required: 'OTP required.',
        pattern: { value: /^[0-9]{6}$/, message: 'Invalid OTP.' },
      });
    }
  }, [loginFormState.otpPhase]);

  return (
    <Grid container direction="column">
      <form onSubmit={onSubmit}>
        {!loginFormState.otpPhase && (
          <>
            <Controller
              name="userId"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
                    fullWidth
                  />
                </Grid>
              )}
              rules={{ required: 'User ID required.' }}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
                    fullWidth
                  />
                </Grid>
              )}
              rules={{ required: 'Password required.' }}
            />
          </>
        )}

        {loginFormState.otpPhase && (
          <Grid item>
            <TextField
              label="OTP"
              variant="outlined"
              onChange={(e) => setValue('otp', e.target.value)}
              type="number"
              error={!!errors.otp}
              helperText={errors.otp ? errors.otp.message : null}
              margin="dense"
              fullWidth
            />
          </Grid>
        )}
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
