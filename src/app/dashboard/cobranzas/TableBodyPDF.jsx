import { View, Text } from "@react-pdf/renderer";
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

export default function TableBodyPDF({ array, label, style }) {
  const NOPINTARCAMPOS = [
    "concepto",
    "obsercacionesPagoRealizado",
    "cicloLectivo",
    "hora",
    "uidPago",
  ];
  const order = [
    "tipoComprobante",
    "numeroComprobante",
    "legajo","nombreLegajo",
    "montoPagado",
    "fecha",
  ];
  return array?.map((fila, i) => (
    <View
      key={i}
      style={tw(
        " flex items-center justify-between odd:bg-orange-100/50 flex-row w-full py-2 px-2 mx-auto flex-grow border-b"
      )}
    >
      {Object.entries(fila)
        .filter(([key]) => !NOPINTARCAMPOS.includes(key))
        ?.sort(([keyA], [keyB]) => order.indexOf(keyA) - order.indexOf(keyB))
        ?.map(([key, value], i) => {
          return (
            <View key={i} style={tw(" text-gray-700 font-medium py-1 w-1/6 flex-auto")}>
              <Text>{value}</Text>
            </View>
          );
        })}
    </View>
  ));
}
