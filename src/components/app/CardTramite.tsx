"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CardTramite() {
    const router = useRouter()
    const handleAllTramitesPagwe = () => {
        router.push("/auth/formalities")
    }
  return (
    <div>
        <div className="p-6 bg-gray-100 mb-5">

  {/* <!-- Header --> */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-800">
      Tramites
    </h1>

    <p className="text-gray-500 mt-2">
      Resumen general de tramites en curso
    </p>
  </div>

  {/* <!-- Stats Cards --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

    {/* <!-- Card --> */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Trámites Activos
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            24
          </h2>
        </div>

        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-7 h-7 text-blue-600"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">

            <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

      </div>
    </div>

    {/* <!-- Card --> */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Pendientes de Revisión
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            8
          </h2>
        </div>

        <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-7 h-7 text-yellow-600"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">

            <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

      </div>
    </div>

    {/* <!-- Card --> */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Documentos Aprobados
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            156
          </h2>
        </div>

        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-7 h-7 text-green-600"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">

            <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7" />
          </svg>
        </div>

      </div>
    </div>

    {/* <!-- Card --> */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Documentos Observados
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            12
          </h2>
        </div>

        <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-7 h-7 text-red-600"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">

            <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
          </svg>
        </div>

      </div>
    </div>

  </div>

  {/* <!-- Trámites en Curso --> */}
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200">

    {/* <!-- Header --> */}
    <div className="flex items-center justify-between p-6 border-b border-gray-200">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Trámites en Curso
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Seguimiento de trámites activos
        </p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        onClick={() => handleAllTramitesPagwe()}
      >
        Ver Todos
      </button>

    </div>

    {/* <!-- List --> */}
    <div className="divide-y divide-gray-100">

      {/* <!-- Item --> */}
      <div className="p-6 hover:bg-gray-50 transition">

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-3">

              <h3 className="font-semibold text-gray-800">
                TRM-2026-001
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                En revisión
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Solicitud de recursos operativos
            </p>

            <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">

              <span>
                Responsable: Alejandro
              </span>

              <span>
                Fecha: 18/05/2026
              </span>

            </div>

          </div>

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Ver detalle
          </button>

        </div>

      </div>

      {/* <!-- Item --> */}
      <div className="p-6 hover:bg-gray-50 transition">

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-3">

              <h3 className="font-semibold text-gray-800">
                TRM-2026-002
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                Pendiente
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Actualización de procedimientos internos
            </p>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">

              <span>
                Responsable: Ana Torres
              </span>

              <span>
                Fecha: 17/05/2026
              </span>

            </div>

          </div>

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Ver detalle
          </button>

        </div>

      </div>

      {/* <!-- Item --> */}
      <div className="p-6 hover:bg-gray-50 transition">

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-3">

              <h3 className="font-semibold text-gray-800">
                TRM-2026-003
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                Aprobado
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Autorización de equipo tecnológico
            </p>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">

              <span>
                Responsable: Carlos Mendoza
              </span>

              <span>
                Fecha: 16/05/2026
              </span>

            </div>

          </div>

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Ver detalle
          </button>

        </div>

      </div>

    </div>

  </div>

</div>
    </div>
  )
}
