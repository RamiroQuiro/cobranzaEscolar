import { Text, View } from "@react-pdf/renderer";
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
const suma = (a, b) => {
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 0;
    }
    return Number(a) + Number(b);
  };
export default function BodyEstadoCuentaPDF({ periodos, totales, datos }) {
  return (
    <View
      style={tw(
        " flex items-center justify-between  flex-col w-full mx-auto  "
      )}
    >
      {periodos?.map((period, index) => {
        let isPay = datos?.find(
          (pago) => pago.periodo.toLowerCase() == period.toLowerCase()
        );
        return (
          <View
            key={index}
            style={tw(
              " flex items-center justify-between odd:bg-orange-100/50 flex-row w-full px-2 mx-auto flex-grow border-b"
            )}
          >
            <View style={tw(`text-gray-700 font-medium py-1 px-2 w-1/4 `)}>
              <Text style={tw(`text-gray-700 font-bold`)}>{period}</Text>
            </View>
            <View style={tw(`text-gray-700 font-medium py-1 px-2 w-1/4 `)}>
              <Text> $ {isPay ? isPay.montoPagado : "0"}</Text>
            </View>
            <View style={tw(`text-gray-700 font-medium py-1 px-2  w-1/4`)}>
              <Text>$ {isPay?.montoAgregado ? isPay?.montoAgregado : "0"}</Text>
            </View>
            <View style={tw(`text-gray-700 font-medium py-1 px-2 w-1/4 `)}>
              <Text> ${" "}
            {isPay ? suma(isPay?.montoPagado, isPay?.montoAgregado) : "0"}</Text>
            </View>
          </View>
        );
      })}
       <View
            style={tw(
              " flex items-center justify-between odd:bg-orange-100/50 flex-row w-full py-2 px-2 mx-auto bg-gray-800 border-b"
            )}
          >
            <View style={tw(`text-gray-100 font-medium py-1 px-2  w-1/4`)}>
              <Text>Totales</Text>
            </View>
            <View style={tw(`text-gray-100 font-medium py-1 px-2  w-1/4`)}>
              <Text> ${totales?.totalMontoPagado}</Text>
            </View>
            <View style={tw(`text-gray-100 font-medium py-1 px-2  w-1/4`)}>
              <Text> ${totales?.totalMontoAgregado}</Text>
            </View>
            <View style={tw(`text-gray-100 font-medium py-1 px-2 w-1/4 `)}>
              <Text> ${totales?.totalMontoTotal}</Text>
            </View>
          </View>
    </View>
  );
}
