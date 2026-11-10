'use client';
import { useAuthStore } from '@/app/store/useAuthStore';
import CardTramite from '@/components/app/CardTramite';
import TableTarmites from '@/components/app/TableTarmites';
import React, { useState } from 'react';

const tabs = ['Documentos', 'Tramites'];

export default function dashboardPage() {
  const { user, token } = useAuthStore();
  const [activeTab, setActiveTab] = useState('Documentos');

  return (
    <div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>

        <div className="flex justify-center w-full">
          <div className="inline-flex items-center justify-center flex-wrap gap-1 rounded-full bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }
            `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto mt-16">
          <table className="table">
            <thead>
              <tr className="text-black">
                <th>No.</th>
                <th>Fecha</th>
                <th>Origen</th>
                <th>Tipo Doc.</th>
                <th>No. Doc.</th>
                <th>Descripcion</th>
                <th>Area</th>
                <th>Asignado</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen">
          <CardTramite />

          <TableTarmites />
        </div>
      </div>
    </div>
  );
}
