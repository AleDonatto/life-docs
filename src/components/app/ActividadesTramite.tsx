"use client"
import React from 'react'

export default function ActividadesTramite() {
  return (
    <div>
        <div>
            <div className="p-6 bg-gray-100 min-h-screen">

  {/* <!-- Header --> */}
  <div className="mb-8">

    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Actividades del Trámite
        </h1>

        <p className="text-gray-500 mt-2">
          Seguimiento de tareas y actividades pendientes
        </p>
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition shadow-sm"
      >
        + Nueva Actividad
      </button>

    </div>

  </div>

  {/* <!-- Progress --> */}
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">

    <div className="flex items-center justify-between mb-4">

      <div>
        <h2 className="font-semibold text-gray-800">
          Progreso del trámite
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          3 de 5 actividades completadas
        </p>
      </div>

      <span className="text-lg font-bold text-blue-600">
        60%
      </span>

    </div>

    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div className="bg-blue-600 h-full w-[60%] rounded-full"></div>
    </div>

  </div>

  {/* <!-- Activities --> */}
  <div className="space-y-4">

    {/* <!-- Activity --> */}
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition">

      <div className="flex items-start justify-between gap-4">

        {/* <!-- Left --> */}
        <div className="flex items-start gap-4">

          {/* <!-- Checkbox --> */}
          <div className="pt-1">
            <input
              type="checkbox"
              checked
              className="w-5 h-5 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
              onChange={() => {}}
            />
          </div>

          {/* <!-- Content --> */}
          <div>

            <div className="flex items-center gap-3 flex-wrap">

              <h3 className="font-semibold text-gray-800 line-through">
                Crear Mensaje CEI
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                Completado
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
                Alta prioridad
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Elaborar y registrar el documento inicial del trámite.
            </p>

            <div className="flex items-center gap-6 mt-4 text-sm text-gray-500 flex-wrap">

              <span>
                Responsable: Alejandro
              </span>

              <span>
                Fecha límite: 20/05/2026
              </span>

            </div>

          </div>

        </div>

        {/* <!-- Actions --> */}
        <div className="flex items-center gap-2">

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Editar
          </button>

        </div>

      </div>

    </div>

    {/* <!-- Activity --> */}
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-start gap-4">

          <div className="pt-1">
            <input
              type="checkbox"
              className="w-5 h-5 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
            />
          </div>

          <div>

            <div className="flex items-center gap-3 flex-wrap">

              <h3 className="font-semibold text-gray-800">
                Revisar Memorándum
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                Pendiente
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                Media prioridad
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Validar el contenido y anexos del memorándum.
            </p>

            <div className="flex items-center gap-6 mt-4 text-sm text-gray-500 flex-wrap">

              <span>
                Responsable: Ana Torres
              </span>

              <span>
                Fecha límite: 22/05/2026
              </span>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Editar
          </button>

        </div>

      </div>

    </div>

    {/* <!-- Activity --> */}
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-start gap-4">

          <div className="pt-1">
            <input
              type="checkbox"
              className="w-5 h-5 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
            />
          </div>

          <div>

            <div className="flex items-center gap-3 flex-wrap">

              <h3 className="font-semibold text-gray-800">
                Generar Tarjeta Operativa
              </h3>

              <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                En proceso
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 font-medium">
                Baja prioridad
              </span>

            </div>

            <p className="text-gray-600 mt-2">
              Documento relacionado derivado del flujo principal.
            </p>

            <div className="flex items-center gap-6 mt-4 text-sm text-gray-500 flex-wrap">

              <span>
                Responsable: Carlos Mendoza
              </span>

              <span>
                Fecha límite: 24/05/2026
              </span>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <button
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            Editar
          </button>

        </div>

      </div>

    </div>

  </div>

</div>
        </div>
    </div>
  )
}
