import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const contextCobranzas = create((set, get) => ({
  pantallaActiva: "pagosEfectuados",
  pagosEfectuados: [],

  cargarPantalla: (strig) => {
    set((state) => ({
      ...state,
      pantallaActiva: strig,
    }));
  },
}));
