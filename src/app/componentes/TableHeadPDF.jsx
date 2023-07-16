import {
    View,
    Text,
  } from "@react-pdf/renderer";
import ItemHeadTablePDF from "./ItemHeadTablePDF";
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
  

export default function TableHeadPDF({array}) {
 
  return (
    <View
    style={tw(
      " flex items-center justify-between bg-orange-400 flex-row w-full py-2 px-2 mx-auto flex-grow border-y"
    )}
  >
    {array?.map((head) => {
                      const isFixedWidth =
                      head.name === 'N°' ||
                      head.name === 'Fecha Pago' ||
                      head.name === 'Legajos' ||
                      head.name === 'Comprobantes' ||
                      head.name === 'Monto';  
      return <ItemHeadTablePDF
      style={tw(
        `text-gray-700 font-medium py-1 px-2  ${isFixedWidth ? 'flex-grow-0 w-[15%] ' : 'w-1/3 flex-grow'}`
      )}
      key={head.id}
      head={head}/>
      
      })}
  
  
    
      </View>
  )
}
