import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const legajoPrueba = [
  {
    nombreLegajo: "Carlos Jesus Quiroga Carrizo",
    legajo: "2233",
    dniLegajo: "48151410",
    fechaNac: "26/09/2021",
    nombreApellidoTutor: "Ramiro Quiroga",
    domicilio: "Mza 14 lote ",
    celular: "3854771992",
    email: "rama.exe.13@gmail.com",
    dniTutor: "333882244",
    domicilioTutor: "Mza 14 lote ",
    emailTutor: "rama.exe.13@gmail.com",
    fechaIngreso: "15/08/2005",
    cicloLectivo: "156951",
    gradoLectivo: "sexto",
    sexo: "masculino",
    nacionalidad: "argentina",
    uid: 15426,
    activo: true,
  },
  {
    nombreLegajo: "Juan Pepito de la Cruz",
    legajo: "1564",
    dniLegajo: "48551410",
    fechaNac: "26/09/2021",
    nombreApellidoTutor: "Ramon Perez",
    domicilio: "Mza 14 lote ",
    celular: "3854771992",
    email: "rama.exe.13@gmail.com",
    dniTutor: "333882244",
    domicilioTutor: "Mza 14 lote ",
    emailTutor: "rama.exe.13@gmail.com",
    fechaIngreso: "15/08/2005",
    cicloLectivo: "156951",
    gradoLectivo: "sexto",
    sexo: "masculino",
    nacionalidad: "argentina",
    uid: 15486,
    activo: true,
  },
  {
    nombreLegajo: "Virginia Jazmin Quiroga Carrizo",
    legajo: "2234",
    dniLegajo: "48151410",
    fechaNac: "26/09/2021",
    nombreApellidoTutor: "Ramiro Quiroga",
    domicilio: "Mza 14 lote ",
    celular: "3854771992",
    email: "rama.exe.13@gmail.com",
    dniTutor: "333882244",
    domicilioTutor: "Mza 14 lote ",
    emailTutor: "rama.exe.13@gmail.com",
    fechaIngreso: "15/08/2005",
    cicloLectivo: 156953,
    gradoLectivo: "cuarto",
    sexo: "masculino",
    nacionalidad: "argentina",
    uid: 154526,
    activo: true,
  },
];

export const contextData = create((set, get) => ({
  modal:false,
  label: "",
  captarUidLegajo: "",
  newLegajo: {},
  legajos: legajoPrueba,
  busquedaLegajo: "",
  filtroActivo: "",
  activarModal:()=>{
    const status=get().modal
set(state=>({
  ...state,modal : !status
}))
  },
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

export const contextOrdenar = create((set, get) => ({
  ordenarPor: "nombreLegajo",
  cambiarOrden: (order) => {
    set((state) => ({ ...state, ordenarPor: order }));
  },
}));
