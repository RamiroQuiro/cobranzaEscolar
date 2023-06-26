import React from "react";

export default function CabeceraContenedor({ children }) {
  return (
    <div className="bg-primary-700 w-full p-2">
      <h2 className="text-medium text-lg text-primary-800">{children}</h2>
    </div>
  );
}
