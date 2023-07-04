import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { ciclos,comprobantes,conceptosCargados,pagosRealizados } from "../base/cicloLectivo";




export const contextCobranzas = create((set, get) => ({
  uidPagoSeleccionado:"",
  comprobantes:comprobantes,
  pantallaActiva: "pagosEfectuados",
  pagosEfectuados: pagosRealizados,
  ciclosLectivos: ciclos,
  conceptos: conceptosCargados,
  uidActivo: "",
  capturarUidPago:(uid)=>{
      const { pagosEfectuados } = get();
      if (pagosEfectuados.length <= 0) return;
      const find = pagosEfectuados?.find((leg) => leg.uid == uid);
      set((state) => ({
        ...state,
        uidPagoSeleccionado: find,
      }));
  },
  efectuarPago:(obj)=>{
    const {pagosEfectuados,comprobantes}=get()

    const newObj={...obj,uid:uuidv4().slice(0,6)}
    const newArray=pagosEfectuados.concat(newObj)
    let indice=comprobantes?.findIndex((comp)=>comp.uid==obj.tipoComprobante)
    
    comprobantes[indice].numeroComprobante= comprobantes[indice].numeroComprobante+1
    set((state) => ({
      ...state,
      comprobantes,
      pagosEfectuados: newArray,
    }));
    console.log(comprobantes)
  },
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
