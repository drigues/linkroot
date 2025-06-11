import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold">User Dashboard</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Manage your links and profile settings here.
      </p>
      <div className="mt-8">
        <p className="text-base">TODO: Integrate backend for user data.</p>
      </div>
    </div>
  );
}