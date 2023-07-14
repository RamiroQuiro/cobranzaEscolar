"use client";

import TableHeadPDF from "@/app/componentes/TableHeadPDF";
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
import TableBodyPDF from "./TableBodyPDF";
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

const headerTable = [
  {
    name: "Comprobantes",
    id: 2,
    type: "text",
  },
  {
    name: "N°",
    id: 2,
    type: "text",
  },
  {
    name: "Legajos",
    id: 2,
    type: "text",
  },
  {
    name: "Nombre Alumno",
    id: 2,
    type: "text",
  },
  {
    name: "Monto",
    id: 2,
    type: "text",
  },
  {
    name: "Fecha Pago",
    id: 2,
    type: "text",
  },
];

export default function PDFRealizados({data}) {

  console.log(data)
  return (
      <Document
        
      >
        <Page
          style={{
            
            height: "90vh",
            fontSize:"10",
          }}
          orientation=""
          size={"A4"}
          fixed
        >
          <View style={tw(
              "whitespace-nowrap flex flex-row items-center gap-2 border-b border-b-2 justify-between flex-row w-11/12 mb-2 mx-auto h-1/6"
            )}>
              <View>
            <Text
            style={tw(
              "text-xl text-orange-500"
            )}
            >RamiroCode </Text>
            <Text style={tw(
              "text-base text-gray-800 "
            )}>Desarrollo y Diseño Web</Text>{" "}
            </View>
            <Text
            style={tw(
              "text-sm font-extraligth w-8/12 text-gray-800 "
            )}
            >
              Desarrollo Web con experiencia en la creación de sitios web y
              aplicaciones atractivas y funcionales. Especializado en React,
              Node.js y TailwindCSS.{" "}
            </Text>
          </View>
          <View
          style={tw(
              "flex flex-col items-center justify-center flex-grow w-11/12 mx-auto rounded-lg overflow-hidden"
            )} >

          <TableHeadPDF
          array={headerTable}
          />
          <TableBodyPDF
          array={data}
          />
          </View>
         {" "}
        </Page>{" "}
      </Document>
  );
}
