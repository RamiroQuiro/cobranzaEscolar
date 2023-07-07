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

const mostrar4dig = (num) => {
  if (!num) {
    return "0000"
  }else{
    let num_Sring = String(num).padStart(4, "0");
    return num_Sring
  }
};
export default function ReciboPDF({ relacionesData }) {
  // The 'theme' object is your Tailwind theme config
console.log(relacionesData)
  return (
    <Document
    style={{
      paddingTop:"16mm",
      height:'90vh'
    }}
    >
      <Page
      style={tw("pt-4 mt-12 flex flex-row gap-4 w-full justify-between items-center text-gray-800")}
      orientation="landscape" size={"A6"} fixed>
        <View
          style={tw(
            "w-full flex flex-col items-center justify-normal  rounded-md shadow-shadowCaja1"
          )}
        >
          <View
            style={tw(
              "bg-gray-400  h-1/4 flex flex-row items-center justify-evenly w-full"
            )}
          >
            <View style={tw("w-1/3 ")}>
              <View
                style={tw(
                  "bg-white mx-auto h-full rounded-full w-1/2 flex items-center justify-center text-2xl"
                )}
              >
             <Text>RamiroCode</Text>
              </View>
            </View>
            <View style={tw("w-1/3 text-white font-bold")}>
              {" "}
              <Text
               
              >
               {relacionesData?.tipoComprobante}
              </Text>
            </View>
            <View style={tw("w-1/3  text-white font-bold")}>
              {" "}
              <Text
               
              >
                N°{mostrar4dig(relacionesData?.numeroComprobante)}
              </Text>
            </View>
          </View>
            <View
              style={tw(
                "p-5 flex flex-col w-full h-full justify-start items-center gap-3 text-sm"
              )}
            >
             <View style={tw("w-full flex flex-row items-center border-b mb-2 py-1 justify-between")}>
                <Text>
                  Fecha de Pago{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.fecha}
                  </Text>
                </Text>
                <Text>
                  Hora :
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.hora}
                  </Text>
                </Text>
              </View>
              <View style={tw("w-full flex flex-row items-center border-b py-2  justify-between")}>
                <Text>
                  Recibi Conforme de{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.nombreLegajo}
                  </Text>
                </Text>
                <Text>
                  N° Legajo{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.legajo}
                  </Text>
                </Text>
              </View>
              <View style={tw("w-full flex flex-row items-center border-b py-2 justify-between")}>
                <Text>
                  Por concepto de:{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.concepto}
                  </Text>{" "}
                </Text>
                </View>
                <View style={tw("w-full flex flex-row items-center border-b py-2 justify-between")}>
                <Text>
                  El Monto de:{" "}
                  <Text style={tw("uppercase font-bold")}>
                    $ {relacionesData?.montoPagado}
                  </Text>{" "}
                </Text>{" "}
                <Text>
                  Medio de Pago:{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.formaDePago}
                  </Text>{" "}
                </Text>
              </View>
              <View style={tw("w-full flex flex-row items-center border-b  py-2 justify-between")}>
                <Text>
                  Observaciones de pago:{" "}
                  <Text style={tw("uppercase font-bold")}>
                    {relacionesData?.obsercacionesPagoRealizado}
                  </Text>{" "}
                </Text>
              </View>
            </View>
          </View>
      </Page>
    </Document>
  );
  {
    /*return(
  
    <div 
    className="w-full flex flex-col items-center justify-normal h-[550px] rounded-md shadow-shadowCaja1">
      <div className="bg-blue-800 h-1/3 flex items-center justify-evenly w-full">
        <div className="w-1/3 h-full">
            <div className="bg-white mx-auto h-full rounded-full w-1/2 flex items-center justify-center text-7xl">🏫</div>
        </div>
        <div className="w-1/3 h-full"> <pre className=" mx-auto flex h-full items-center justify-center text-3xl text-white">RECIBO</pre></div>
        <div className="w-1/3 h-full"> <pre className=" mx-auto flex h-full items-center justify-center text-3xl text-white">N° 0002</pre></div>
      </div>
      <div className="w-full">

      <div className="p-5 flex flex-col w-full justify-between h-full gap-3">
        <div className="w-full flex items-center justify-between">
            <pre>
              Fecha de Pago{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.fecha}
              </pre></pre>
            <pre>
              Hora :
              <pre className="uppercase font-bold">
              {
                relacionesData?.hora
              }</pre>
            </pre>
            </div>
          <div className="border-b w-10/12 flex items-center justify-between">
            <pre>
             Recibi Conforme de{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.nombreLegajo}
              </pre>
            </pre>
            <pre>
             N° Legajo{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.legajo}
              </pre>
            </pre>
          </div>
          <div className="border-b">
            
            <pre>
              Por concepto de:{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.concepto}
              </pre>{" "}
            </pre>
            <pre>
              El Monto de:{" "}
              <pre className="uppercase font-bold">
                $ {relacionesData?.montoPagado}
              </pre>{" "}
            </pre>   <pre>
              Medio de Pago:{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.formaDePago}

              </pre>{" "}
            </pre>
          </div>
          <div className="border-b">
            <pre>
              Observaciones de pago:{" "}
              <pre className="uppercase font-bold">
                {relacionesData?.obsercacionesPagoRealizado}
              </pre>{" "}
            </pre>
         
          </div>
        </div>
      </div>
    </div>
   
  
            )*/
  }
}
