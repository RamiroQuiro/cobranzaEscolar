import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const contextCobranzas = create((set, get) => ({
  pantallaActiva: "pagosEfectuados",
  pagosEfectuados: [],
  ciclosLectivos: [],
  conceptos: [],
  uidActivo: "",
  captaruid: () => {
    set((uid) => ({
      ...state,
      uidActivo: uid,
    }));
  },
  cargarConceptos: (obj) => {
    const { conceptos } = get();
    const objNew = { ...obj, uid: uuidv4().slice(0, 4) };
    const newArray = conceptos.concat(objNew);

    set((state) => ({
      ...state,
      conceptos: newArray,
    }));
  },
  cargarCiclosLectivos: (obj) => {
    const { ciclosLectivos } = get();
    const objNew = { ...obj, uid: uuidv4().slice(0, 8) };
    const newArray = ciclosLectivos.concat(objNew);

    set((state) => ({
      ...state,
      ciclosLectivos: newArray,
    }));
  },
  modificarCicloLectivo: (obj) => {
    const { ciclosLectivos } = get();
    let index = ciclosLectivos.findIndex((item) => item.uid == obj.uid);
    ciclosLectivos[index] = obj;
    set((state) => ({ ...state, ciclosLectivos }));
  },
  cargarPantalla: (strig) => {
    set((state) => ({
      ...state,
      pantallaActiva: strig,
    }));
  },
}));
