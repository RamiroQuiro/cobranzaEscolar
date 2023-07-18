"use client"
import Boton1 from '@/app/componentes/Boton1'
import { contextCobranzas } from '@/context/contextCobranzas';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

export default function BotonDePago({form,cargarPantalla,setForm,legajoSelect}) {
  const [registrarPago, setRegistrarPago] = useState({})
  const efectuarPago=contextCobranzas(state=>state.efectuarPago)
  useEffect(() => {
    if (!form) {
      return
    }
    setRegistrarPago({
      legajo: legajoSelect?.legajo,
      concepto:form?.concepto,
      tipoComprobante:form?.tipoComprobante,
      cicloLectivo:legajoSelect?.cicloLectivo,
      formaDePago:form?.formaDePago,
      montoPagado:form.montoPagado,
      periodo:form?.periodo,
      montoAgregado:form?.montoAgregado,
      observacionesPagoRealizado:form.observacionesPagoRealizado,
      numeroComprobante:form.numeroComprobante
    })
  }, [form,legajoSelect])
    const realizarPago = (e) => {
        e.preventDefault();
        efectuarPago(registrarPago)
        toast.success("Pago realizado",{
        
        });
        setForm({});
        cargarPantalla("pagosRealizados");
      };
  return (
    <Boton1 onClick={realizarPago}>Realizar Pago</Boton1>
  )
}
