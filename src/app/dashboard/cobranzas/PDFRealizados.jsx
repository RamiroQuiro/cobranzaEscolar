"use client";

import TableHeadPDF from "@/app/componentes/TableHeadPDF";
import {
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import TableBodyPDF from "./TableBodyPDF";
import CabeceraPDF from "@/app/componentes/CabeceraPDF";
import BodyEstadoCuentaPDF from "../alumnos/BodyEstadoCuentaPDF";
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


export default function PDFRealizados({data,headerTable,label}) {
  const { periodos, totales, datos } = data;

  return (
      <Document
        
      >
        <Page
          style={{
            
            height: "90vh",
            fontSize:"10",
          }}
          orientation=""
          size={label=="pagosRealizados"? "A4":label=="estadoContable"?"A5":"A4"}
          fixed
        >
         <CabeceraPDF/>
          <View
          style={tw(
              "flex flex-col items-center justify-center flex-grow w-11/12 mx-auto rounded-lg overflow-hidden"
            )} >

          <TableHeadPDF
          array={headerTable}
          />

         {
         label=="pagosRealizados"?
         <TableBodyPDF
          array={data}
          />
          :
          label=="estadoContable"?
          <BodyEstadoCuentaPDF
         periodos={periodos}
         totales={totales}
         datos={datos}
           
           />
           :<></>
          
        }
          </View>
         {" "}
        </Page>{" "}
      </Document>
  );
}
