import React from "react";
import NuevaNave from "./NuevaNave";
import { Nave } from "./ClaseNave";
import Naves from "./Naves";
import useNave from "./hooks/useNave";
import { Input, Flex } from "@chakra-ui/react";

export default function Inventario(props) {
  return (
    // imput para hacer el filtro, manejo del inventario y filtro
    <Flex direction="column" w="80%">
      <Input
        color="white "
        type="text"
        value={props.buscador}
        placeholder="buscador"
        onChange={props.busqueda}
        ml={"10px"}
        w="97%"
        mt="20px"
        mb="10px"
      ></Input>

      {props.listaNaves
        .filter((dato) =>
          dato.nombre.toLowerCase().includes(props.buscador.toLowerCase())
        )
        .map((nave) => {
          return <Naves key={nave.id} nave={nave} />;
        })}
    </Flex>
  );
}
