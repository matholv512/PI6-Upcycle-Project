import React from 'react';
import { AuthProvider } from '../hook/index';
import { Router } from '../routes/routes';

export default function AuthenticatedApp() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}