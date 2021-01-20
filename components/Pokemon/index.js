import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState([])
    const [currentUrl, setUrl] = useState(`https:pokeapi.co/api/v2/pokemon/` + props.match.params.id)

    useEffect(() => {

        axios.get(currentUrl)
        .then(res => {
            console.log(res.data)
        setPokemon(res.data)
        })
    }, [currentUrl])

    console.log(pokemon.sprites)

    return (
        <div>
            { } 
        </div>
    )
}
