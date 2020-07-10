import React from 'react';
import TypeColors from '../../assets/typeColors'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const BasicInfo = props => {
    const { pokemon, pokemonSpecies } = props;
    return (
        <div className={'pokemon-detail-content'}>
            {pokemonSpecies !== undefined ?
                <>
                    <div className={'pokemon-detail-img-container'}>
                        <img src={pokemon.sprites.front_default} alt="pokemon" className={'pokemon-detail-img'} />
                    </div>
                    <div className={'pokemon-detail-description-box'}>
                        <h2>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}#{pokemon.id}
                        </h2>
                        <div className={'pokemon-detail-type-of-pokemon'}>
                            {pokemon.types.map((item, index) => {
                                return <div
                                    key={index}
                                    style={{ backgroundColor: TypeColors[item.type.name] }}
                                    className={'pokemon-type'}>{item.type.name}</div>
                            })}
                        </div>
                        <div>
                            <b>Height:</b> {+(pokemon.height + '0') / 100}m
                    <b>Weight:</b> {+(pokemon.weight + '00') / 1000}kg
                </div>
                        <p>{pokemonSpecies.flavor_text_entries[0].flavor_text}</p>
                    </div>
                </> : <LoadingScreen/>}

        </div>
    );
}
export default BasicInfo