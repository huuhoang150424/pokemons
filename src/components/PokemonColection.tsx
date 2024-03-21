import React from 'react';
import { pokemon } from '../interface';
import { Link } from "react-router-dom"

type Props ={
    pokemon: pokemon
}

const PokemonColection: React.FC<Props> = ({pokemon}) => {
    const getByIdpokemon=(id:number)=>{
        console.log(id)
    }
    return (
        <div 
            className='w-[100px] h-[130px] bg-[#ebf5f0] mx-[10px] rounded-[4px] cursor-pointer'
            onClick={()=>getByIdpokemon(pokemon.id)}
        >
            <Link to={`/detail-${pokemon.id}`}>
                <img
                    className='w-[100px] inline-block] border-b-4 border-[#3a3b3c]'
                    src={`${pokemon.sprites.back_default}`}
                    alt=''
                />
                <h1
                    className='font-[600] text-[#666666] text-center '
                >{pokemon.name}</h1>
            </Link>
        </div>
    );
}

export default PokemonColection;
