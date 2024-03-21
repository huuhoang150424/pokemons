import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { pokemon } from '../interface';
import { PokemonList } from '../components/PokemonList';



//API https://pokeapi.co/api/v2/pokemon?limit=20&offset=20
interface pokemons {
    name:string;
    url: string
}






const Home = () => {
    const [pokemons,setPokemon]=useState<pokemon[]>([])
    const [nextUrl,setNextUrl]=useState<String>("")
    const [loading,setLoading]=useState<boolean>(true)
    useEffect(()=>{
        const getPokemons=async()=>{
            const res=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
            setNextUrl(res.data.next)
            res.data.results.forEach(async(pokemon:pokemons)=>{
            const poke=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setPokemon((pre)=>[...pre,poke.data])
            setLoading(false)
            })
        }
        getPokemons()
        },[])
        const handleLoadMore=async ()=>{
        setLoading(true)
        let res=await axios.get(`${nextUrl}`)
        res.data.results.forEach(async(pokemon:pokemons)=>{
            const poke=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setPokemon((pre)=>[...pre,poke.data])
            setLoading(false)
        })
        }
    return (
        <div>
            <h1 className='text-center my-[40px] font-extrabold text-[40px] tracking-[2px] text-[#97b0b4]'>Pokemon</h1>
            <PokemonList
                pokemons={pokemons}
            />
            <button 
                className="w-[100px] block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mx-auto my-[20px]"
                onClick={handleLoadMore}
            >
                {loading===true?'loadong':'loadmore'}
            </button>
        </div>
    )
}
export default Home
