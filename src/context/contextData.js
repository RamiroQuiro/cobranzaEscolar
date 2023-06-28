import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const contextData = create((set, get) => ({
  label: "",
  captarUidLegajo: "",
  newLegajo: {},
  legajos: [],
  busquedaLegajo: "",
  filtroActivo: "",
  llenarBusquedaLegajo: (id) => {
    set((state) => ({
      ...state,
      busquedaLegajo: id,
    }));
  },
  cargarFiltro: (bool) => {
    set((state) => ({
      ...state,
      filtroActivo: bool,
    }));
  },
  capturarLegajo: (uid) => {
    const { legajos } = get();
    if (legajos.length <= 0) return;
    const find = legajos?.find((leg) => leg.uid == uid);
    set((state) => ({
      ...state,
      captarUidLegajo: find,
    }));
  },
  actualizarLegajo: (obj) => {
    const { legajos } = get();
    let index = legajos.findIndex((item) => item.uid == obj.uid);
    legajos[index] = obj;
    set((state) => ({ ...state, legajos }));
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
  cargarPantalla: (name) => {
    set((state) => ({ ...state, label: name }));
    // console.log("cargando pantalla")
  },
}));
