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
    const { pagosEfectuados, comprobantes, ciclosLectivos, conceptos } =
    contextCobranzas((state) => ({
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

    if(newArrayPagos)
    {
        return  <PDFViewer
        className='w-full rounded-lg  h-[90vh] '
        
        width={"90%"}
        ><PDFRealizados data={newArrayPagos}/></PDFViewer>
    }
  return (
    <div>esperar</div>
  )
}
