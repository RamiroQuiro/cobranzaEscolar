"use client"
import { contextCobranzas } from '@/context/contextCobranzas';
import { contextData, contextOrdenar } from '@/context/contextData';
import useRelacionesData from '@/hook/useRelacionesData';
import ReciboPDF from './ReciboPDF';
import { PDFViewer } from '@react-pdf/renderer';
import PDFRealizados from '../PDFRealizados';


export default function PreCargaPDFPagos() {
    const { modal, legajos } = contextData((state) => ({
        legajos: state.legajos,
      }));
      const order = contextOrdenar((state) => state.ordenarPor);


    const { pagosEfectuados, comprobantes, ciclosLectivos, conceptos,filtroCobranzas } =
    contextCobranzas((state) => ({
      filtroCobranzas:state.filtroCobranzas,
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      pagosEfectuados: state.pagosEfectuados,
    }));

    const {newArrayPagos} = useRelacionesData({
      legajos,
      comprobantes,
      ciclosLectivos,
      conceptos,
      pagosEfectuados
    });

    const encontrado = (arr) => {
      if (filtroCobranzas?.length <= 3) return arr;
      return arr?.filter((leg) => {
        let nombreLeg = leg.nombreLegajo
          ?.toUpperCase()
          .includes(filtroCobranzas?.toUpperCase());
        let dniLegajo = leg.dniLegajo
          ?.toUpperCase()
          .includes(filtroCobranzas?.toUpperCase());
        let legajo = leg.legajo
          ?.toUpperCase()
          .includes(filtroCobranzas?.toUpperCase());
        let nombreApellidoTutor = leg.nombreApellidoTutor
          ?.toUpperCase()
          .includes(filtroCobranzas?.toUpperCase());
        let cicloLectivo = String(leg.cicloLectivo)?.includes(
          filtroCobranzas?.toUpperCase()
        );
         let fecha = (leg.fecha)?.includes(filtroCobranzas) 
      if (
        nombreLeg ||
        dniLegajo ||
        legajo ||
        nombreApellidoTutor ||
        cicloLectivo ||
        fecha
      ) {
        return leg;
      }
      });
    };
    if(newArrayPagos)
    {
        return  <PDFViewer
        className='w-full rounded-lg  h-[90vh] '
        
        width={"90%"}
        ><PDFRealizados data={encontrado(newArrayPagos)?.sort((a, b) => {
          if (order == "tipoComprobante") {
            return a.tipoComprobante.localeCompare(b.tipoComprobante)
          }
          if (order == "nombreLegajo") {
            return a.nombreLegajo.localeCompare(b.nombreLegajo)
          }
          if (order == "legajo") return a.legajo - b.legajo;
          if (order === "fecha") {
            const dateA = new Date(a.fechaYHora);
            const dateB = new Date(b.fechaYHora);
            return dateA - dateB;
          }
        })}/></PDFViewer>
    }
  return (
    <div className='animate-pulse text-xs mx-auto font-medium'>Cargando...</div>
  )
}
