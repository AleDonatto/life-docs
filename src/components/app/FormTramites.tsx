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
      <div>
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
      </div>
    </div>
  );
}
