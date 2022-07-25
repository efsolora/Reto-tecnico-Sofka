import { useState } from "react";
import { Nave } from "../ClaseNave";

export default function useNave() {
  const [buscador, setBuscador] = useState("");
  const [listaNaves, setListaNaves] = useState([
    new Nave(1, "SaturnoV", "EE.UU", 1967, "lanzadera"),
    new Nave(2, "ZennitII", "Rusia", 1985, "lanzadera"),
    new Nave(3, "ArianeV", "Europa", 1996, "lanzadera"),
    new Nave(4, "Explorer", "EE.UU", 1958, "No tripulada"),
    new Nave(5, "Sputnik", "Rusia", 1957, "No tripulada"),
    new Nave(6, "Soho", "Europa", 1995, "No tripulada"),
    new Nave(7, "Apolo", "EE.UU", 1966, "Tripulada"),
    new Nave(8, "Vostok", "Rusia", 1960, "Tripulada"),
    new Nave(9, "Shenzou", "China", 1999, "Tripulada"),
  ]);
  const busqueda = (event) => {
    setBuscador(event.target.value);
  };

  let resultado = [];

  const onSubmit = async (data) => {
    setListaNaves([
      ...listaNaves,
      new Nave(
        data.id,
        data.nombre,
        data.pais,
        data.añoActividad,
        data.tipo_nave
      ),
    ]);
  };
  return {
    listaNaves,
    onSubmit,
    buscador,
    busqueda,
    resultado,
  };
}
