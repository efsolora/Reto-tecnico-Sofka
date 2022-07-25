import React from "react";
import PropTypes from "prop-types";
import { Nave } from "./ClaseNave";
import { Box } from "@chakra-ui/react";

const Naves = ({ nave }) => {
  return (
    // estructura para la creacion de cada nave//
    <Box bgColor="white" borderRadius={"10px"} m="10px" p="10px">
      <h2>Nombre: {nave.nombre}</h2>
      <h2>Pais: {nave.pais}</h2>
      <h2>Año de Actividad: {nave.añoActividad}</h2>
      <h2>Tipo de Nave: {nave.tipo_nave}</h2>
    </Box>
  );
};

Naves.propTypes = {
  nave: PropTypes.instanceOf(Nave),
};

export default Naves;
