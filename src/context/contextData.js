import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

export const contextData = create((set, get) => ({
  newLegajo: {},
  legajos: [],
  busquedaLegajo: "",

  llenarBusquedaLegajo: (id) => {
    set((state) => ({
      ...state,
      busquedaLegajo: id,
    }));
  },
  cargarNewLegajo: (obj) => {
    const objNew = { ...obj, uid: uuidv4().slice(0, 8) };
    const{legajos}=get()
    const newArray=legajos.concat(objNew)

    set((state) => ({
      ...state,
      legajos:newArray,
    }));
  },
}));
