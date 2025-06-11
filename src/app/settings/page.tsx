import React from 'react';

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <p className="mt-4 text-base text-muted-foreground">
        Manage your preferences and account settings here.
      </p>
      {/* TODO: Add form for updating user preferences and account settings */}
    </div>
  );
}