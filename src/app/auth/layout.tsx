'use client';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import NavbarComponent from '@/components/ui/NavbarComponent';

export default function layout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuthStore();
  const router = useRouter();

  return (
    <div>
      <div className="">
        <NavbarComponent />
        <div className="">
          <main className="flex-1 p-6 overflow-auto m-10">
            <div className="mt-6 bg-white rounded-xl shadow p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
