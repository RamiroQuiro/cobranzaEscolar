import React from "react";
import TablaAlumnos from "./TablaAlumnos";

export default function Alumnos() {
  return (
    <div className="w-11/12 mx-auto flex pt-10   items-stretch justify-between container gap-4 h-full text-primary-text">
      <div className="bg-primary-400 overflow-hidden rounded-lg flex flex-col items-center justify-between w-1/3 min-h-[250px] flex-auto">
        <div className="bg-primary-700 w-full p-2">
          <h2 className="text-medium text-lg text-primary-100">
            Buscar alumno
          </h2>
        </div>
          <form action=""className="w-full flex flex-col items-center">
            <label htmlFor="nameAlumno">
              nombre alumno
              <input type="text" name="nameAlumno" id="nameAlumno" />
            </label>
          </form>
      </div>
      <div className="bg-primary-400  rounded-lg flex flex-col items-center justify-between w-2/3 flex-auto">
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

        <div className="overflow-x-auto w-full p-5">
         <TablaAlumnos/>
        </div>
      </div>
    </div>
  );
}
