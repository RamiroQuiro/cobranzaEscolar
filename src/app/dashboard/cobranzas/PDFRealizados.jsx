"use client";

import {
  Document,
  PDFRenderer,
  PDFViewer,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});


export default function PDFRealizados() {
  return (<PDFViewer
    className='w-full rounded-lg  h-[90vh] '
    
    width={"90%"}
    >
    <Document
    style={{
      paddingTop:"16mm",
      height:'90vh'
    }}
    >
      <Page
      style={tw("pt-4 mt-12 flex flex-row gap-4 w-full justify-between items-center text-gray-800")}
      orientation="" size={"A4"} fixed>
        </Page> 
        <View style={tw('w-full flex-row items-center')}>
        <View style={tw("text-center ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0")}>
    <tr>
      <th
      id="nombreLegajo"
      className="whitespace-nowrap pl-1 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200">
         Comproban
      </th>
      <th
      id="nombreLegajo"
      className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200">
        N° 
      </th>
      <th 
        id="legajo"
        className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
       Legajo 
      </th>
      <th 
        id="dniLegajo"
        className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Nombre Alumno 
      </th>
      <th 
        id="activo"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Fecha Pago
      </th>
      <th 
        id="activo"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Monto 
      </th>
      <th 
        id="activo"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Acciones 
      </th>
    </tr>
  </View></View></Document></PDFViewer>
  )
}
