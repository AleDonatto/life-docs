import CardTramite from "@/components/app/CardTramite";
import TableTarmites from "@/components/app/TableTarmites";
import React from "react";

export default function dashboardPage() {
  return (
    <div>
      <div>
        <div className="p-6 bg-gray-100 min-h-screen">
          <CardTramite />

          <TableTarmites />
        </div>
      </div>
    </div>
  );
}
