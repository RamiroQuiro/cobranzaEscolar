import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { contextCobranzas } from "@/context/contextCobranzas";
import useRelacionesData from "@/hook/useRelacionesData";
import { contextData } from "@/context/contextData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Pago Mensual',
//         data: Object.values(pagosPorMes).map(pagos => pagos.length),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: '#F2913D80',
//     },
//   ],
// };

export function Chart({ legajo }) {
  const pagosPorMes = {
    enero: [],
    febrero: [],
    marzo: [],
    abril: [],
    mayo: [],
    junio: [],
    julio: [],
    sgosto: [],
    septiembre: [],
    octubre: [],
    noviembre: [],
    diciembre: [],
  };

  const { pagosEfectuados } = contextCobranzas((state) => ({
    pagosEfectuados: state.pagosEfectuados,
  }));
  
  const { legajos } = contextData((state) => ({
    legajos: state.legajos,
   
  }));
  const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos ,filtroCobranzas} =
    contextCobranzas((state) => ({
      filtroCobranzas:state.filtroCobranzas,
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
    }));

  const { newArrayPagos,relacionesData } = useRelacionesData({
    legajos,
    comprobantes,
    ciclosLectivos,
    pagosEfectuados,
    conceptos,
  });

  const pagosDelLEgajo = newArrayPagos?.filter(
    (leg) => leg.legajo == legajo.legajo
  );

  pagosDelLEgajo?.forEach((pago) => {
    const mes = pago.fechaYHora?.toLocaleString("es-ES", { month: "long" });
    pagosPorMes[mes]?.push(pago);
  });
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Pagos Realizados",
        data: Object.values(pagosPorMes).map((pagos) => pagos.length),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#F2913D80",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          beforeLabel: (context) => {
            const mes =context.chart.data.labels[context.dataIndex].toLowerCase();
            const pagos = pagosPorMes[mes];
            const montoTotal = pagos.reduce((acumulador, pago) => acumulador + Number(pago.montoPagado), 0);
            return `Total del Mes: $${montoTotal}`;
          },
          label: (context) => {
            const mes =context.chart.data.labels[context.dataIndex].toLowerCase();
            const pagos = pagosPorMes[mes];
            const conceptos = pagos.map((pago) => pago.concepto).join(", ");
            return `Conceptos: ${conceptos}`;
          },
        },

      },
    },
  };
  return <Line options={options} data={data} />;
}
