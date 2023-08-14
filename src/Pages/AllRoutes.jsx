import React from 'react';
import PokemonPage from './PokemonPage';
import TypesPage from './TypesPage';
import FavoritesPage from './FavoritesPage';
import PokemonDetails from './PokemonDetails';
import {Routes,Route} from "react-router-dom"
import TypesDetails from './TypeDetails';


const AllRoutes = () => {
  return (<>
    <Routes>
      <Route path="/" element={<PokemonPage/>}/>
      <Route path="/types" element={<TypesPage/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
      <Route path="/pokemon/:pokemon_name" element={<PokemonDetails/>}/>
      <Route path="/types/:type_id" element={<TypesDetails/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes