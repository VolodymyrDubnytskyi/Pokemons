import React from 'react';
import TypeColors from '../../../constans/colors'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'

const BasicInfo = props => {
    const { pokemon, pokemonSpecies } = props;
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
                        const { type } = item;
                        return <div
                            key={index}
                            style={{ backgroundColor: TypeColors[type.name] }}
                            className={'pokemon-type'}>{type.name}</div>
                    })}
                </div>
                <div className={'pokemon-height-and-weight'}>
                    <span className={'pokemon-heigth'}>
                        <b>Height:</b>
                        {+(pokemon.height + '0') / 100}m
                            </span>
                    <span className={'pokemon-weight'}>
                        <b>Weight:</b>
                        {+(pokemon.weight + '00') / 1000}kg
                            </span>
                </div>
                <p className={'pokemon-description'}>{pokemonSpecies.flavor_text_entries[9].flavor_text}</p>
            </div>
        </div>
    );
}
export default BasicInfo