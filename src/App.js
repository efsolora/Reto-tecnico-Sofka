import NuevaNave from "./components/NuevaNave";
import Inventario from "./components/Inventario";
import { ChakraProvider, Flex, Heading, Box } from "@chakra-ui/react";
import bgImage from "./img/planeta.jpg";

import useNave from "./components/hooks/useNave";

function App() {
  const {
    handleSubmit,
    listaNaves,
    buscador,
    register,
    busqueda,
    resultado,
    onSubmit,
  } = useNave();
  return (
    <ChakraProvider>
      <Heading textAlign={"center"} padding="20px">
        Inventario
      </Heading>
      <Flex
        id="img"
        bgImage={bgImage}
        backgroundSize={"cover"}
        margin="10px"
        borderRadius={"10px"}
        boxShadow={"dark-lg"}
      >
        <NuevaNave
          listaNaves={listaNaves}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          regiter={register}
        />
        <Inventario
          listaNaves={listaNaves}
          buscador={buscador}
          busqueda={busqueda}
        />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
