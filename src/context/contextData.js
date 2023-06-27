import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

export const contextData = create((set, get) => ({
  captarUidLegajo: "",
  newLegajo: {},
  legajos: [],
  busquedaLegajo: "",

  llenarBusquedaLegajo: (id) => {
    set((state) => ({
      ...state,
      busquedaLegajo: id,
    }));
  },
  capturarLegajo: (uid) => {
    const {legajos}=get()
    if(legajos.length<=0)return
    const find=legajos?.find(leg=>leg.uid==uid)
    set((state) => ({
      ...state,
      captarUidLegajo: find,
    }));
  },
  cargarNewLegajo: (obj) => {
    const { legajos } = get();
    const objNew = { ...obj, uid: uuidv4().slice(0, 8) };
    const newArray = legajos.concat(objNew);

    set((state) => ({
      ...state,
      legajos: newArray,
    }));
  },
}));
