import React from "react";
import BodyTablaAlumnos from "./BodyTablaAlumnos";
import HeadTabla from "./HeadTabla";

export default function TablaAlumnos() {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative">
     <HeadTabla/>
      <BodyTablaAlumnos/>
    </table>
  );
}
