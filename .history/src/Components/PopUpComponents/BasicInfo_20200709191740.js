import React from 'react';
import TypeColors from '../../assets/typeColors'
import { useState } from 'react';

const BasicInfo = props => {
    const { pokemon, pokemonSpecies } = props;
    // // console.log(pokemonSpecies);
    // const [ type, setType]= useState('')
    // const getTypeColor = clickedPokeColor => {
    //     for (const [key, value] of Object.entries(TypeColors)) {
    //          return setType(key === clickedPokeColor)
    //         // console.log(`${key}: ${value}`);
    //       }
    // }
    return (
        <div className={'pokemon-detail-content'}>
            <div className={'pokemon-detail-img-container'}>
                <img src={pokemon.sprites.front_default} alt="pokemon" className={'pokemon-detail-img'} />
            </div>
            <div className={'pokemon-detail-description-box'}>
                <h2>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}#{pokemon.id}
                </h2>
                <div className={'pokemon-detail-type-of-pokemon'}>
                    {pokemon.types.map((item, index) => {
                        // const colors = TypeColors
                       
                        return <div key={index} style={{ backgroundColor: `${type}`}}>{item.type.name}</div>
                    })}
                </div>
                <div>
                    <b>Height:</b> {+(pokemon.height + '0') / 100}m
                    <b>Weight:</b> {+(pokemon.weight + '00') / 1000}kg
                </div>
                <p></p>
            </div>
        </div>
    );
}
export default BasicInfo