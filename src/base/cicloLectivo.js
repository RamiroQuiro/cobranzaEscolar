export const ciclos = [
  {
    label: "secundario 2023",
    materias: ["Matemática Discreta I"],
    nivelEducativo: "secundaria",
    añoCiclo: "2023",
    activo: true,
    horarios: ["14-16", "18-20"],
    valorDelCicloLectivo: "1500",
    uid: 156951,
  },
  {
    label: "primaria 2023",
    materias: ["Matemática Discreta I"],
    nivelEducativo: "secundaria",
    añoCiclo: "2023",
    activo: true,
    horarios: ["14-16", "18-20"],
    valorDelCicloLectivo: "25000",
    uid: 156953,
  },
];

export const conceptosCargados = [
  {
    label: "cuota mensual 2023",
    montoConcepto: "1200",
    tipoPago: "mensual",
    fechaInicio: "2023/07/01",
    activo: true,
    uid: 1530,
  },{
    label: "Otro Concepto",
    montoConcepto: "",
    tipoPago: "",
    fechaInicio: "2023/07/01",
    activo: true,
    uid: 1564,
  },

  {
    label: "Matricula Primaria 2023",
    montoConcepto: "2200",
    tipoPago: "anual",
    activo: true,
    fechaInicio: "2021/07/01",
    uid: 1568,
  },
  {
    label: "cuota hermanos",
    montoConcepto: "600",
    tipoPago: "mensual",
    activo: true,
    fechaInicio: "2021/07/01",
    uid: 1520,
  },
];

export const comprobantes = [
  {
    label: "Recibo",
    descripcion: "Comprobante de pago por el servicio educativo.",
    codigoTipoDocumental: "REC",
    formatoArchivo: "pdf",
    numeroComprobante: 1,
    uid: "12345",
  },
  {
    label: "Factura B",
    descripcion: "Factura B de pago por el servicio educativo.",
    codigoTipoDocumental: "FACTB",
    formatoArchivo: "pdf",
    numeroComprobante: 1,
    uid: "12346",
  },
  {
    label: "Nota de Credito",
    descripcion: "Nota de Creadito.",
    codigoTipoDocumental: "CRED",
    formatoArchivo: "pdf",
    numeroComprobante: 1,
    uid: "12347",
  },
];

export const pagosRealizados = [
  {
    legajo: "2233",
    concepto: 156953,
    tipoComprobante: undefined,
    cicloLectivo: "156951",
    formaDePago: "transferencia",
    cicloLectivo: "156951",
    legajo: "2233",
    montoPagado: "4900",
    numeroComprobante: 0,
    observacionesPagoRealizado: undefined,
    tipoComprobante: "12345",
    fechaYHora:new Date(),
    uid:15462
  },
];
