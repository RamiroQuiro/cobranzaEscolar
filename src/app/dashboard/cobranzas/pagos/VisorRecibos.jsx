"use client"
import { contextCobranzas } from '@/context/contextCobranzas';
import { contextData } from '@/context/contextData';
import useRelacionesData from '@/hook/useRelacionesData';
import ReciboPDF from './ReciboPDF';
import { PDFViewer } from '@react-pdf/renderer';


export default function VisorRecibos() {
    const { modal, legajos } = contextData((state) => ({
        legajos: state.legajos,
      }));
    const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos } =
    contextCobranzas((state) => ({
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      uidPagoSeleccionado: state.uidPagoSeleccionado,
    }));

    const {relacionesData} = useRelacionesData({
      legajos,
      comprobantes,
      ciclosLectivos,
      uidPagoSeleccionado,
      conceptos,
    });

    if(relacionesData)
    {
        return <PDFViewer
         className='w-full h-[90vh]'
         
        > <ReciboPDF relacionesData={relacionesData}/></PDFViewer>
    }
  return (
    <div>esperar</div>
  )
}
