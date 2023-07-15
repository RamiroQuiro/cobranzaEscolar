"use client"
import { contextCobranzas } from '@/context/contextCobranzas';
import { contextData } from '@/context/contextData';
import useRelacionesData from '@/hook/useRelacionesData';
import ReciboPDF from './ReciboPDF';
import { PDFViewer } from '@react-pdf/renderer';
import PDFRealizados from '../PDFRealizados';


export default function PreCargaPDFPagos() {
    const { modal, legajos } = contextData((state) => ({
        legajos: state.legajos,
      }));
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
        if (
          nombreLeg ||
          dniLegajo ||
          legajo ||
          nombreApellidoTutor ||
          cicloLectivo
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
        ><PDFRealizados data={encontrado(newArrayPagos)}/></PDFViewer>
    }
  return (
    <div>esperar</div>
  )
}
