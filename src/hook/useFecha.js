"use client"
import { useState, useEffect } from 'react';

function useFecha(data) {
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    if (!data) return;
    const event = data;
    const fech = {
      horas: event.getHours(),
      minutos: event.getMinutes(),
      segundos: event.getSeconds(),
      diaSemana: event.getDay(),
      dia: event.getDate(),
      mes: event.getMonth(),
      year: event.getFullYear(),
    };
    setFecha(`${fech.dia}/${fech.diaSemana}/${fech.year}`);
  }, [data]);

  return fecha;
}

export default useFecha;
