import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pokemon } from '../interface'
import { Link } from 'react-router-dom'

//API https://pokeapi.co/api/v2/pokemon/${id}/

const PokemonDetail = () => {
    const [pokemons,setPokemons]=useState<pokemon>()
    const param=useParams()
    console.log(typeof param.id)
    console.log(pokemons)
    useEffect(()=>{
        const getPokemon=async()=>{
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${param.id}/`)
            setPokemons(res.data)
        }
        getPokemon()
    },[])
    return (
        <div className='relative bg-gray-400 w-[200px] h-[250px] mx-auto mt-[100px] rounded-[6px]'>
            <Link to={`/`}>
                <div
                    className='absolute top-[5px] right-[5px] bg-red-600 w-[30px] h-[30px] flex justify-center items-center rounded-[50%] cursor-pointer' >
                    <h1 className='font-[700]'>X</h1>
                </div>
            </Link>
            <img
                className='w-[200px] inline-block] border-b-4 border-[#3a3b3c]'
                src={`${pokemons?.sprites?.back_default}`}
                alt=''
            />
            <h1
            className='font-[600] text-[#666666] text-center'
            >{pokemons?.name}</h1>
        </div>
    )
}
export default PokemonDetail