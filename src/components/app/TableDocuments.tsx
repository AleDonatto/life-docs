import React from 'react'

export default function TableDocumnets() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6 mt-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Gestión de Documentos
      </h1>
      <p className="text-gray-500 mt-1">
        Administración y seguimiento de trámites
      </p>
    </div>

    {/* <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
    >
      + Nuevo Documento
    </button> */}
  </div>

  {/* <!--Card--> */}
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

    {/* <!-- Search --> */}
    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
      <input
        type="text"
        placeholder="Buscar documento..."
        className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div className='flex gap-4'>
        <div>
          <select
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option>Tipo de Documento</option>
        <option>Mensaje CEI</option>
        <option>Targeta</option>
        <option>Memorandum</option>
        <option>Mensaje SWEAR</option>
      </select>
        </div>
        <div>
          <select
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option>Todos los estados</option>
        <option>Aprobado</option>
        <option>En revisión</option>
        <option>Observado</option>
      </select>
        </div>
        

      
      </div>

      
    </div>

    {/* <!-- Table --> */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        
        {/* <!-- Table Head --> */}
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4">Folio</th>
            <th className="px-6 py-4">Documento</th>
            <th className="px-6 py-4">Tipo</th>
            <th className="px-6 py-4">Responsable</th>
            <th className="px-6 py-4">Prioridad</th>
            <th className="px-6 py-4">Estado</th>
            <th className="px-6 py-4">Fecha</th>
            <th className="px-6 py-4 text-center">Acciones</th>
          </tr>
        </thead>

        {/* <!-- Table Body --> */}
        <tbody className="divide-y divide-gray-100">

          {/* <!-- Row --> */}
          <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 font-medium text-gray-800">
              DOC-2026-001
            </td>

            <td className="px-6 py-4">
              Solicitud de recursos operativos
            </td>

            <td className="px-6 py-4">
              Mensaje CEI
            </td>

            <td className="px-6 py-4">
              Alejandro
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
                Alta
              </span>
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                Aprobado
              </span>
            </td>

            <td className="px-6 py-4 text-gray-500">
              18/05/2026
            </td>

            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2">
                
                <button
                  className="px-3 py-1 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                >
                  Ver
                </button>

                <button
                  className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  Editar
                </button>

              </div>
            </td>
          </tr>

          {/* <!-- Row --> */}
          <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 font-medium text-gray-800">
              DOC-2026-002
            </td>

            <td className="px-6 py-4">
              Validación administrativa
            </td>

            <td className="px-6 py-4">
              Memorándum
            </td>

            <td className="px-6 py-4">
              Ana Torres
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                Media
              </span>
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                En revisión
              </span>
            </td>

            <td className="px-6 py-4 text-gray-500">
              17/05/2026
            </td>

            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2">

                <button
                  className="px-3 py-1 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                >
                  Ver
                </button>

                <button
                  className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  Editar
                </button>

              </div>
            </td>
          </tr>

          {/* <!-- Row --> */}
          <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 font-medium text-gray-800">
              DOC-2026-003
            </td>

            <td className="px-6 py-4">
              Tarjeta informativa operativa
            </td>

            <td className="px-6 py-4">
              Tarjeta
            </td>

            <td className="px-6 py-4">
              Carlos Mendoza
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 font-medium">
                Baja
              </span>
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                Observado
              </span>
            </td>

            <td className="px-6 py-4 text-gray-500">
              16/05/2026
            </td>

            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2">

                <button
                  className="px-3 py-1 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                >
                  Ver
                </button>

                <button
                  className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  Editar
                </button>

              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
    </div>
  )
}
