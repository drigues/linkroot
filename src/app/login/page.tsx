'use client';

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Stack,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) {
        setServerError(responseData.detail || 'Login failed. Check your credentials.');
        return;
      }

      const { access_token } = responseData;
      if (!access_token) {
        setServerError('Invalid token received.');
        return;
      }

      Cookies.set('token', access_token, { expires: 1 }); // Token saved for 1 day
      router.push('/dashboard');
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              autoComplete="email"
              autoFocus
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete="current-password"
            />

            <Button type="submit" variant="contained" fullWidth>
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
