'use client';

import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { decodeJWT, getTokenFromCookie, removeTokenCookie } from '@/lib/auth';

type DecodedJWT = {
  email: string;
  name?: string;
  [key: string]: any;
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = getTokenFromCookie();

        if (!token) {
          router.replace('/login');
          return;
        }

        const decoded = decodeJWT(token) as DecodedJWT;

        if (!decoded?.email) {
          router.replace('/login');
          return;
        }

        setUser({ name: decoded.name || 'User', email: decoded.email });
      } catch (err) {
        console.error('Auth check failed:', err);
        setError('Authentication failed. Please log in again.');
        setTimeout(() => router.replace('/login'), 3000);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    removeTokenCookie();
    router.replace('/login');
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>

      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            Welcome back, <strong>{user?.name}</strong>!
          </Typography>

          <Box
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
              mb: 4,
            }}
            role="region"
            aria-label="User Details"
          >
            <Typography variant="subtitle1">User Info</Typography>
            <Typography>Email: {user?.email}</Typography>
          </Box>

          <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </Container>
  );
}
