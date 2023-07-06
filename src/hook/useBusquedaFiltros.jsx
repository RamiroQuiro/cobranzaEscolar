import { useState, useCallback } from 'react';

const useBusquedaFiltros = (arr) => {
  const [search, setSearch] = useState('');
  const [encontrado, setEncontrado] = useState(arr);

  const busquedaFiltros = useCallback(
    (arr, search) => {
      const encontrado = arr?.filter((leg) => {
        let busquedaLegajo = leg.nombreLegajo
          ?.toUpperCase()
          .includes(search?.toUpperCase());
        let dniLegajo = leg.dniLegajo
          ?.toUpperCase()
          .includes(search?.toUpperCase());
        let legajo = leg.legajo?.toUpperCase().includes(search?.toUpperCase());
        let nombreApellidoTutor = leg.nombreApellidoTutor
          ?.toUpperCase()
          .includes(search?.toUpperCase());
        if (busquedaLegajo || dniLegajo || legajo || nombreApellidoTutor) {
          if (leg.activo == true) {
            return leg;
          }
        }
      });
      return encontrado;
    },
    []
  );

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
  
      setEncontrado(busquedaFiltros(arr, e.target.value));

    },
    [arr, busquedaFiltros]
  );

  return { search, encontrado, handleSearch ,setSearch};
};

export default useBusquedaFiltros;
