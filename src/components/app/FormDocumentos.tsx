import React from "react";

export default function FormDocumentos() {
  return (
    <div>
      <div className="">
        <form className="w-full">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="" className="text-gray-500 mt-2">
                Referencia Documento (Descripcion)
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-500 mt-2">
                Tipo de documento
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-500 mt-2">
                Destinatario
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-500 mt-2">
                Tipo de documento
              </label>
              <input
                type="text"
                placeholder="Buscar documento..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
