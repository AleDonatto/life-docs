import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <div className="flex h-screen bg-gray-100">
  <aside className="w-64 bg-gray-900 text-white flex flex-col">
    
    <div className="h-16 flex items-center justify-center border-b border-gray-800">
      <h1 className="text-xl font-bold tracking-wide">
        Jefatura Trans
      </h1>
    </div>

    <nav className="flex-1 px-4 py-6 space-y-2">
      
      <Link
        href={'/auth/dashboard'}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-18 0v6l9 4 9-4v-6" />
        </svg>

        <span>Dashboard</span>
      </Link>

      <Link
        href={"/auth/documents"}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>

        <span>Documentos</span>
      </Link>

      <Link
        href={'/auth/formalities'}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>

        <span>Trámites</span>
      </Link>
      <a
        href="#"
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3
               3-1.343 3-3-1.343-3-3-3zm0-6v2m0 16v2
               m8-10h2M2 12h2m15.364 6.364l1.414 1.414
               M4.222 4.222l1.414 1.414m12.728 0l1.414-1.414
               M4.222 19.778l1.414-1.414" />
        </svg>

        <span>Configuración</span>
      </a>
    </nav>

    <div className="border-t border-gray-800 p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          AJ
        </div>

        <div>
          <p className="text-sm font-medium">Alejandro</p>
          <p className="text-xs text-gray-400">Administrador</p>
        </div>
      </div>
    </div>
  </aside>

  <main className="flex-1 p-6 overflow-auto">
    <h2 className="text-2xl font-bold text-gray-800">
      
    </h2>

    <div className="mt-6 bg-white rounded-xl shadow p-6">
      {children}
    </div>
  </main>
</div>
      </div>
    </div>
  );
}
