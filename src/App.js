import React from "react";
import AllRoutes from "./Pages/AllRoutes";
import {Box,Flex,Heading,Spacer,Button,IconButton} from "@chakra-ui/react";
import {Link} from "react-router-dom"


function App() {
  return (<>
    <Box p={4} bgColor="yellow">
    <Flex align="center">
      <Heading size="md">Pokemon-App</Heading>
      <Spacer/>
        <Button as={Link} to="/" colorScheme="blue" variant="outline" mr={2}>Pokemons Page</Button>
        <Button as={Link} to="/types" colorScheme="blue" variant="outline" mr={2}>Types Page</Button>
        <Button as={Link} to="/favorites" colorScheme="blue" variant="outline" mr={2}>Favorites Page</Button>
    </Flex>
  </Box>
   <AllRoutes/> 
   </>
  );
}

export default App;
