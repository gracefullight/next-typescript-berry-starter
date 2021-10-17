import { Typography } from '@mui/material';
import { LoginForm } from '../components/forms';
import { Centered } from '../components/layouts';

const LoginPage = () => {
  return (
    <Centered>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <LoginForm />
    </Centered>
  );
}

export default LoginPage;
