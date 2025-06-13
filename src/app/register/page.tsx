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

type RegisterFormInputs = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        setServerError(result.detail || 'Registration failed');
        return;
      }

      router.push('/login');
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
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
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete="new-password"
            />

            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
