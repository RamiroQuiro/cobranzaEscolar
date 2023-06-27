"use client"

import { useState } from "react";

export default function CheckBox({state,handleCheck}) {
   
        return (
            <label
            htmlFor="activo"
            className={
                state?.activo === true
                ? "cursor-pointer bg-green-300/50 shadow-sm p-2 shadow-green-300 text-green-600 rounded-lg text-xs mx-auto text-center font-medium"
                : "cursor-pointer bg-red-300/50 shadow-sm p-2 shadow-red-300 text-red-600 rounded-lg text-xs mx-auto text-center font-medium"
            }
          >
            {" "}
            {state?.activo === true ? "activo" : "inactivo"}
          <input
            type="checkbox"
            name="activo"
            id="activo"
            className="hidden"
            onChange={handleCheck}
          />
          </label>
        );
      }
