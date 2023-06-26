
  import { create } from "zustand";
  import { v4 as uuidv4 } from "uuid";
  import { toast } from "react-hot-toast";
  
  export const contextData = create((set, get) => ({
    newLegajo:{},
    legajos:[],
    busquedaLegajo:"",


    llenarBusquedaLegajo:(id)=>{
        set((state)=>({
            ...state,busquedaLegajo:id
        }))
    }

  }))