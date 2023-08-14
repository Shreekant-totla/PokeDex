import React, { useState, useEffect } from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (pokemonName) => {
    const updatedFavorites = favorites.filter(name => name !== pokemonName);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Favorites Page</Text>
      {favorites.length === 0 ? (
        <Text>No favorite Pokémon yet.</Text>
      ) : (
        favorites.map(pokemonName => (
          <Box key={pokemonName} borderWidth="1px" p={4} borderRadius="md" mb={2}>
            <Text fontSize="25px"><b>{pokemonName}</b></Text>
            <IconButton
              icon={<StarIcon color="yellow.500"/>}
              onClick={() => removeFromFavorites(pokemonName)}
            /><Text>Remove from Favorites</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default FavoritesPage;


