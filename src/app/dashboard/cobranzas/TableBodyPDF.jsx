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
    const isFixedWidth =
      key === 'numeroComprobante' ||
      key === 'fecha' ||
      key === 'legajo' ||
      key === 'tipoComprobante' ||
      key === 'montoPagado';
    const displayValue = key === 'montoPagado' ? `$${value}` : value;
    return (
      <View
        key={i}
        style={tw(
          `text-gray-700 font-medium py-1 px-2  ${
            isFixedWidth ? 'flex-grow-0 w-[12.5%] ' : 'w-1/3 flex-grow'
          }`
        )}
      >
        <Text>{displayValue}</Text>
      </View>
    );
  })}
    </View>
  ));
}
