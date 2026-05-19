"use client"
import React from 'react'

export default function page() {
  return (
    <div>
        <div>
            <div className="min-h-screen bg-gray-100 p-6">

  {/* <!-- Header --> */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

    <div>

      <div className="flex items-center gap-3 flex-wrap">

        <h1 className="text-3xl font-bold text-gray-800">
          Documento
        </h1>

        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
          Mensaje CEI
        </span>

        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
          Aprobado
        </span>

      </div>

      <p className="text-gray-500 mt-2">
        Visualización y seguimiento del documento
      </p>

    </div>

    {/* <!-- Actions --> */}
    <div className="flex items-center gap-3 flex-wrap">

      <button
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl transition"
      >
        Descargar
      </button>

      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
      >
        Editar Documento
      </button>

    </div>

  </div>

  {/* <!-- Layout --> */}
  <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

    {/* <!-- Sidebar Info --> */}
    <div className="space-y-6">

      {/* <!-- Información --> */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <h2 className="font-semibold text-gray-800 mb-5">
          Información General
        </h2>

        <div className="space-y-4 text-sm">

          <div>
            <p className="text-gray-500">
              Folio
            </p>

            <p className="font-medium text-gray-800 mt-1">
              DOC-2026-001
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Tipo Documento
            </p>

            <p className="font-medium text-gray-800 mt-1">
              Mensaje CEI
            </p>
          </div>

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
              Fecha Creación
            </p>

            <p className="font-medium text-gray-800 mt-1">
              19/05/2026
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Prioridad
            </p>

            <span className="inline-flex mt-2 px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
              Alta
            </span>
          </div>

        </div>

      </div>

      {/* <!-- Actividades --> */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <h2 className="font-semibold text-gray-800 mb-5">
          Actividades Relacionadas
        </h2>

        <div className="space-y-4">

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              checked
              className="mt-1 w-4 h-4 rounded text-blue-600"
              onChange={() => {}}
            />

            <div>
              <p className="text-sm font-medium text-gray-800 line-through">
                Crear Mensaje CEI
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Completado
              </p>
            </div>

          </div>

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded text-blue-600"
            />

            <div>
              <p className="text-sm font-medium text-gray-800">
                Revisar Memorándum
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Pendiente
              </p>
            </div>

          </div>

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded text-blue-600"
            />

            <div>
              <p className="text-sm font-medium text-gray-800">
                Generar Tarjeta
              </p>

              <p className="text-xs text-gray-500 mt-1">
                En proceso
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* <!-- Documento --> */}
    <div className="xl:col-span-3">

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        {/* <!-- Toolbar --> */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-gray-50">

          <div className="flex items-center gap-3">

            <button
              className="px-3 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition text-sm"
            >
              Zoom +
            </button>

            <button
              className="px-3 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition text-sm"
            >
              Zoom -
            </button>

          </div>

          <div className="text-sm text-gray-500">
            Vista previa del documento
          </div>

        </div>

        {/* <!-- Document Viewer --> */}
        <div className="bg-gray-300 p-8 overflow-auto">

          {/* <!-- Hoja --> */}
          <div className="max-w-4xl mx-auto bg-white min-h-[1100px] shadow-xl rounded-sm p-16">

            {/* <!-- Header Documento --> */}
            <div className="flex items-start justify-between border-b border-gray-200 pb-8">

              <div>

                <h1 className="text-2xl font-bold text-gray-900">
                  MENSAJE CEI
                </h1>

                <p className="text-gray-500 mt-2">
                  Folio: DOC-2026-001
                </p>

              </div>

              <div className="text-right text-sm text-gray-500">

                <p>
                  Fecha: 19/05/2026
                </p>

                <p className="mt-2">
                  Prioridad: Alta
                </p>

              </div>

            </div>
{/* 
            <!-- Content --> */}
            <div className="mt-12 space-y-8 text-gray-800 leading-8">

              <p>
                Asunto: Solicitud de recursos operativos y validación administrativa.
              </p>

              <p>
                Por medio del presente documento se solicita la validación y autorización
                correspondiente para continuar con el proceso administrativo relacionado
                al trámite operativo en curso.
              </p>

              <p>
                Asimismo, se solicita la revisión de los documentos anexos y actividades
                relacionadas dentro del sistema documental institucional.
              </p>

              <p>
                Este documento forma parte del expediente TRM-2026-001 y deberá continuar
                con el flujo de revisión y aprobación correspondiente.
              </p>

            </div>

            {/* <!-- Footer --> */}
            <div className="mt-24 pt-16 border-t border-gray-200">

              <div className="grid grid-cols-2 gap-12">

                <div className="text-center">

                  <div className="border-t border-gray-400 pt-3">
                    <p className="text-sm font-medium text-gray-800">
                      Alejandro Jaimes
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Responsable del trámite
                    </p>
                  </div>

                </div>

                <div className="text-center">

                  <div className="border-t border-gray-400 pt-3">
                    <p className="text-sm font-medium text-gray-800">
                      Ana Torres
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Área revisora
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>
        </div>
    </div>
  )
}
