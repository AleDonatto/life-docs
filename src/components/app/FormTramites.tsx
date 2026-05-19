"use client";
import React, { useState } from "react";

interface DocTramites {
  nombreTramite: string;
  descripcionTramite: string;
  fechaRegistro: Date;
  referencia: string;
  destino: string;
  clasiificacion: string;
}

export default function FormTramites() {
  const [dateNow, setdateNow] = useState(new Date());

  const [dateTramite, setdataTramite] = useState<DocTramites>(
    {} as DocTramites
  );
  return (
    <div>
      {/* <div>
        <form action="" className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Nombre Tramite
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => {}}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Descripcion Tramite
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Fecha de Registro
              </label>
              <input
                type="date"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <pre>{JSON.stringify(dateNow)}</pre>
            </div>
          </div>

          <h2 className="my-10 text-xl text-gray-500">Datos del Documento</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Referencia Documento (Descripcion)
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Tipo de documento
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Destinatario
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Tipo de documento
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-500 mt-2">
                Clasificacion
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
              Registrar Tramite
            </button>
          </div>
        </form>
      </div> */}

      <div>
        <div className="min-h-screen bg-gray-100 p-6">

  <div className="mb-8">

    <h1 className="text-3xl font-bold text-gray-800">
      Nuevo Trámite
    </h1>

    <p className="text-gray-500 mt-2">
      Registro de trámite y documento inicial relacionado
    </p>

  </div>

  <form className="space-y-8">

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="border-b border-gray-200 px-6 py-5 bg-gray-50">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-5 h-5 text-blue-600"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">

              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>

          </div>

          <div>

            <h2 className="text-lg font-semibold text-gray-800">
              Información del Trámite
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Datos generales del trámite
            </p>

          </div>

        </div>

      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="md:col-span-2">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Asunto del trámite
          </label>

          <input
            type="text"
            placeholder="Ej. Solicitud de recursos operativos"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prioridad
          </label>

          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            <option>Seleccionar prioridad</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Responsable
          </label>

          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            <option>Seleccionar responsable</option>
            <option>Alejandro</option>
            <option>Ana Torres</option>
            <option>Carlos Mendoza</option>
          </select>

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha límite
          </label>

          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Clasificación
          </label>

          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            <option>Pública</option>
            <option>Confidencial</option>
            <option>Reservada</option>
          </select>

        </div>

      </div>

    </div>

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="border-b border-gray-200 px-6 py-5 bg-gray-50">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-5 h-5 text-green-600"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">

              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h6m-9 8h16a2 2 0 002-2V6a2 2 0 00-2-2H8l-4 4v10a2 2 0 002 2z" />
            </svg>

          </div>

          <div>

            <h2 className="text-lg font-semibold text-gray-800">
              Documento Inicial
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Documento relacionado al crear el trámite
            </p>

          </div>

        </div>

      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de documento
          </label>

          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            <option>Seleccionar tipo</option>
            <option>Mensaje CEI</option>
            <option>Memorándum</option>
            <option>Tarjeta</option>
            <option>Mensaje SWEAR</option>
          </select>

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Folio Documento
          </label>

          <input
            type="text"
            placeholder="DOC-2026-001"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destinatario
          </label>

          <input
            type="text"
            placeholder="Nombre del destinatario"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Remitente
          </label>

          <input
            type="text"
            placeholder="Nombre del remitente"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div className="md:col-span-2">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Asunto del documento
          </label>

          <input
            type="text"
            placeholder="Asunto del documento"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

        </div>

        <div className="md:col-span-2">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contenido
          </label>

          <textarea
            rows={8}
            placeholder="Escriba el contenido del documento..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          ></textarea>

        </div>

        <div className="md:col-span-2">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adjuntar archivos
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition cursor-pointer bg-gray-50">

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-10 h-10 mx-auto text-gray-400"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">

              <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>

            <p className="mt-4 text-gray-600">
              Arrastra archivos aquí o haz clic para subir
            </p>

            <p className="text-sm text-gray-400 mt-2">
              PDF, DOCX, imágenes
            </p>

          </div>

        </div>

      </div>

    </div>

    <div className="flex items-center justify-end gap-4">

      <button
        type="button"
        className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
      >
        Cancelar
      </button>

      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
      >
        Crear Trámite
      </button>

    </div>

  </form>

</div>
      </div>
    </div>
  );
}
