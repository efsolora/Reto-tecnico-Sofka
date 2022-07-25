import React from "react";
import useNave from "./hooks/useNave";
import { Nave } from "./ClaseNave";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  Flex,
  Box,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function NuevaNave(props) {
  const { register, handleSubmit } = useForm();

  return (
    // formulario para la creacion de una nueva nave
    <Flex maxW={"50%"} color={"white"} justifyContent="center">
      <Box maxWidth={"70%"} margin="10px">
        <form id="form" onSubmit={handleSubmit(props.onSubmit)}>
          <Heading>Crea una nave</Heading>
          <label htmlFor="nombre">
            <label>Nombre:</label>
            <Input
              placeholder="Nombre"
              type="text"
              id="nombre"
              name="nombre"
              {...register("nombre", { required: true })}
            />
          </label>
          <label htmlFor="pais">
            <label>Pais:</label>
            <Input
              placeholder="Pais"
              type="text"
              id="pais"
              name="pais"
              padding={"20px"}
              {...register("pais", { required: true })}
            />
          </label>

          <label htmlFor="añoActividad">
            <label>Año de actividad:</label>
            <Input
              placeholder="Año de actividad"
              type={"number"}
              id="añoActividad"
              name="añoActividad"
              {...register("añoActividad", { required: true })}
            />
          </label>

          <label htmlFor="tipo_nave">
            <label>Tipo de nave:</label>
            <Input
              placeholder="Tipo de nave"
              type="text"
              id="tipo_nave"
              name="tipo_nave"
              {...register("tipo_nave", { required: true })}
            />
          </label>

          <label htmlFor="id">
            <label color="">ID:</label>
            <Input
              placeholder="id"
              type="text"
              id="id"
              name="id"
              {...register("id", { required: true })}
            />
          </label>
          <Button colorScheme="" variant="outline" type="submit" mt="20px">
            Enviar
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
