import React from 'react'
import { pokemon } from '../interface'
import PokemonColection from './PokemonColection'

type props={
    pokemons: pokemon[]
}
export const PokemonList:React.FC<props> = ({pokemons}) => {
    console.log(pokemons)
    return (
        <div className='grid grid-cols-10 gap-x-[10px] gap-y-[30px]'>
            {
                pokemons.map((pokemon,index)=>{
                    return (
                        <PokemonColection
                            key={index}
                            pokemon={pokemon}
                        />
                    )
                })
            }
        </div>
    )
}
