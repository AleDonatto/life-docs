'use client';
import { useAuthStore } from '@/app/store/useAuthStore';
import CardTramite from '@/components/app/CardTramite';
import TableTarmites from '@/components/app/TableTarmites';
import React from 'react';

export default function dashboardPage() {
  const { user, token } = useAuthStore();

  return (
    <div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(token, null, 2)}</pre>
        <div className="p-6 bg-gray-100 min-h-screen">
          <CardTramite />

          <TableTarmites />
        </div>
      </div>
    </div>
  );
}
