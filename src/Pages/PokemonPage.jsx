import React, { useEffect, useState } from 'react';
import {Box,Text,Grid,GridItem,Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import Pagination from './Pagination';

const PokemonPage = () => {
    const [pokemonList,setPokemonList] = useState([]);
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(20);
    const [totalPage,setTotalPage] =useState(1)
    const updatePage = (value)=>{
        setPage(page+value)
    }

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`).then(res=>res.json()).then(data=> setPokemonList(data.results));
    },[page])

    // const handlePagination = (pageNumber) =>{
    //     setCurrentPage(pageNumber);
    // }
  return (
    <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">Pokemons Page</Text>
        <Grid templateColumns="repeat(4,1fr)" gap={4}>{pokemonList.map(ele => (
            <GridItem key={ele.name}>
                <Link to={`/pokemon/${ele.name}`}>
                    <Box borderWidth="1px" p={4} borderRadius="md" cursor="pointer">
                        {ele.name}
                    </Box>
                </Link>
            </GridItem>
        ))}</Grid>
        <Box mt={4}>
        <Pagination page={page} updatePage={updatePage} totalPage={setTotalPage}/>
        </Box>
    </Box>
  )
}

export default PokemonPage