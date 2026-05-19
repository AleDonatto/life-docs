import ActividadesTramite from "@/components/app/ActividadesTramite";
import React from "react";

export default function page() {
  return <div>
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">

  {/* <!-- Header --> */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-800">
      Historial del Trámite
    </h1>

    <p className="text-gray-500 mt-2">
      Seguimiento y trazabilidad de documentos relacionados
    </p>
  </div>

  {/* <!-- Información principal --> */}
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

      <div>

        <div className="flex items-center gap-3">

          <h2 className="text-2xl font-bold text-gray-800">
            TRM-2026-001
          </h2>

          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            En revisión
          </span>

        </div>

        <p className="text-gray-600 mt-3">
          Solicitud de recursos operativos y validación administrativa
        </p>

      </div>

      {/* <!-- Datos --> */}
      <div className="grid grid-cols-2 gap-6 text-sm">

        <div>
          <p className="text-gray-500">
            Responsable
          </p>

          <p className="font-medium text-gray-800 mt-1">
            Alejandro
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Fecha Inicio
          </p>

          <p className="font-medium text-gray-800 mt-1">
            18/05/2026
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Tipo Principal
          </p>

          <p className="font-medium text-gray-800 mt-1">
            Mensaje CEI
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Prioridad
          </p>

          <p className="font-medium text-red-600 mt-1">
            Alta
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* <!-- Timeline --> */}
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

    <div className="flex items-center justify-between mb-8">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Timeline del Trámite
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Historial de documentos y cambios de estado
        </p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Descargar Historial
      </button>

    </div>

    {/* <!-- Timeline Container --> */}
    <div className="relative border-l-2 border-gray-200 ml-4 space-y-10">

      {/* <!-- Item --> */}
      <div className="relative pl-10">

        {/* <!-- Dot --> */}
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white"></div>

        {/* <!-- Content --> */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="flex items-center gap-3">

                <h3 className="font-semibold text-gray-800">
                  DOC-2026-001
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                  Mensaje CEI
                </span>

                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                  Aprobado
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                Documento inicial creado para solicitud de recursos operativos.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">

                <span>
                  Responsable: Alejandro
                </span>

                <span>
                  Fecha: 18/05/2026
                </span>

                <span>
                  Hora: 09:45 AM
                </span>

              </div>

            </div>

            <button
              className="px-4 py-2 text-sm bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition"
            >
              Ver Documento
            </button>

          </div>

        </div>

      </div>

      {/* <!-- Item --> */}
      <div className="relative pl-10">

        {/* <!-- Dot --> */}
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white"></div>

        {/* <!-- Content --> */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="flex items-center gap-3">

                <h3 className="font-semibold text-gray-800">
                  DOC-2026-002
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                  Memorándum
                </span>

                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                  En revisión
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                Memorándum generado automáticamente como parte del flujo documental.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">

                <span>
                  Responsable: Ana Torres
                </span>

                <span>
                  Fecha: 18/05/2026
                </span>

                <span>
                  Hora: 11:20 AM
                </span>

              </div>

            </div>

            <button
              className="px-4 py-2 text-sm bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition"
            >
              Ver Documento
            </button>

          </div>

        </div>

      </div>

      {/* <!-- Item --> */}
      <div className="relative pl-10">

        {/* <!-- Dot --> */}
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></div>

        {/* <!-- Content --> */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="flex items-center gap-3">

                <h3 className="font-semibold text-gray-800">
                  DOC-2026-003
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700 font-medium">
                  Tarjeta
                </span>

                <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                  Observado
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                Documento observado por falta de anexos complementarios.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">

                <span>
                  Responsable: Carlos Mendoza
                </span>

                <span>
                  Fecha: 19/05/2026
                </span>

                <span>
                  Hora: 08:10 AM
                </span>

              </div>

            </div>

            <button
              className="px-4 py-2 text-sm bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition"
            >
              Ver Documento
            </button>

          </div>

        </div>

      </div>

      {/* <!-- Item --> */}
      <div className="relative pl-10">

        {/* <!-- Dot --> */}
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-500 border-4 border-white"></div>

        {/* <!-- Content --> */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="flex items-center gap-3">

                <h3 className="font-semibold text-gray-800">
                  Cambio de Estado
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 font-medium">
                  Auditoría
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                El trámite cambió de estado de "Pendiente" a "En revisión".
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">

                <span>
                  Usuario: Luis Ramírez
                </span>

                <span>
                  Fecha: 19/05/2026
                </span>

                <span>
                  Hora: 10:35 AM
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

{/* actividades del tramite */}
    <ActividadesTramite />
    </div>
  </div>;
}
