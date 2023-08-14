import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChakraProvider, Box, Text, Grid, GridItem } from '@chakra-ui/react';


const TypesDetails = () => {
  const { type_id } = useParams();
  const [typeDetails, setTypeDetails] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type_id}`)
      .then(response => response.json())
      .then(data => setTypeDetails(data));

    fetch(`https://pokeapi.co/api/v2/type/${type_id}`)
      .then(response => response.json())
      .then(data => setPokemonList(data.pokemon));
  }, [type_id]);

  return (
    
      <Box p={4}>
        <Link to="/types">Go back</Link>
        <Text fontSize="xl" fontWeight="bold" mt={4}>Pokémon of Type: {typeDetails && typeDetails.name}</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {pokemonList.map(pokemon => (
            <GridItem key={pokemon.pokemon.name}>
              <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                <Box borderWidth="1px" p={4} borderRadius="md" cursor="pointer">
                  {pokemon.pokemon.name}
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    
  );
};

export default TypesDetails;
