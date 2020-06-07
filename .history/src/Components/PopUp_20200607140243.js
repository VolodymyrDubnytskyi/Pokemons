import React from 'react';
import { Component } from 'react';

const PopUpPokemonDetail = props => {
    const { pokemon } = props;
    let pokemonHeight = pokemon.height.toString().length 
    let pokemonHeightCount = pokemonHeight <= 1 ? `0,  ${pokemon.height}m` : `${pokemon.height.toString()[0]},${pokemon.height.toString()[1]}m`
    return (
        <div className={'pop-up-detail-bg'}>
            <header className={'pop-up-detail-header'}>
                Pokemon.exe
                    <button className={'close-btn'}>
                    X
                    </button>
            </header>
            <div className={'exit-link-container'}>
                <button className={'disabled-text-btn'}>File</button>
                <button className={'active-text-btn'}>Exit</button>
            </div>
            <div className={'pokemon-detail'}>
                <nav className={'pokemon-detail-menu'}>
                    <div className={'pokemon-detail-menu-item'}>Basic Info</div>
                    <div className={'pokemon-detail-menu-item'}>Stats</div>
                    <div className={'pokemon-detail-menu-item'}>Abilities</div>
                </nav>
                <div className={'pokemon-detail-content'}>
                    <div className={'pokemon-detail-img-container'}>
                        <img src={pokemon.sprites.front_default} alt="pokemon" className={'pokemon-detail-img'} />
                    </div>
                    <div className={'pokemon-detail-description-box'}>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}#{pokemon.id}</h2>
                        <div className={'pokemon-detail-type-of-pokemon'}>{pokemon.types[0].type.name}</div>
                        <div><b> Height:</b> {pokemonHeightCount} <b>Weight:</b> {pokemon.weight}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PopUpPokemonDetail;