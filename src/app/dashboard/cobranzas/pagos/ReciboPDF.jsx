"use client"


import { Document, PDFRenderer, PDFViewer, Page, Text, View } from "@react-pdf/renderer";
export default function ReciboPDF({relacionesData}) {
    
return(
    <Document
    language="español"
    >
        <Page
        size={"A5"}
        orientation="landscape"

     

        >
    <View 

    className="w-full flex flex-col items-center justify-normal h-[350px] rounded-md shadow-shadowCaja1">
      <View className="bg-blue-800 h-1/3 flex items-center justify-evenly w-full">
        <View className="w-1/3 h-full">
            <View className="bg-white mx-auto h-full rounded-full w-1/2 flex items-center justify-center text-7xl">🏫</View>
        </View>
        <View className="w-1/3 h-full"> <View className=" mx-auto flex h-full items-center justify-center text-3xl text-white">RECIBO</View></View>
        <View className="w-1/3 h-full"> <View className=" mx-auto flex h-full items-center justify-center text-3xl text-white">N° 0002</View></View>
      </View>
      <View className="w-full">

      <View className="p-5 flex flex-col w-full justify-between h-full gap-3">
        <View className="w-full flex items-center justify-between">
            <Text>
              Fecha de Pago{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.fecha}
              </Text></Text>
            <Text>
              Hora :
              <Text className="uppercase font-bold">
              {
                relacionesData?.hora
              }</Text>
            </Text>
            </View>
          <View className="border-b w-10/12 flex items-center justify-between">
            <Text>
             Recibi Conforme de{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.nombreLegajo}
              </Text>
            </Text>
            <Text>
             N° Legajo{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.legajo}
              </Text>
            </Text>
          </View>
          <View className="border-b">
            
            <Text>
              Por concepto de:{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.concepto}
              </Text>{" "}
            </Text>
            <Text>
              El Monto de:{" "}
              <Text className="uppercase font-bold">
                $ {relacionesData?.montoPagado}
              </Text>{" "}
            </Text>   <Text>
              Medio de Pago:{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.formaDePago}

              </Text>{" "}
            </Text>
          </View>
          <View className="border-b">
            <Text>
              Observaciones de pago:{" "}
              <Text className="uppercase font-bold">
                {relacionesData?.obsercacionesPagoRealizado}
              </Text>{" "}
            </Text>
         
          </View>
        </View>
      </View>
    </View>
    </Page>
    </Document>
  
)

}
