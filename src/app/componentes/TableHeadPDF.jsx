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
    {array?.map((head) => (
      <ItemHeadTablePDF
      style={tw(
        " text-gray-700 font-medium"
      )}
      key={head.id}
      head={head}/>
    ))}
  
    
      </View>
  )
}
