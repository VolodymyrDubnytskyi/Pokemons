import React from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

class PopUpPokemonDetail extends Component {
    render() {
        const { pokemon } = this.props;
        let pokemonHeight = parseInt(pokemon.height.toString() + '0') / 100
        let pokemonHeightCount = pokemonHeight

        let pokemonWeightCount = parseInt(pokemon.weight.toString() + '00') / 1000
        let pokemonWeight = pokemonWeightCount
        const [pokemonDescription, usePokemonDescription] = useState('')
        useEffect(() => {
            fetch(pokemon.species.url)
                .then((res => res.json()))
                .then((data => usePokemonDescription(data)))
        })
        console.log(pokemonDescription);
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
                            <h2>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}#{pokemon.id}
                            </h2>
                            <div className={'pokemon-detail-type-of-pokemon'}>
                                {pokemon.types.map(item => <div>{item.type.name}</div>)}
                            </div>
                            <div>
                                <b> Height:</b> {pokemonHeightCount}m
                            <b>Weight:</b> {pokemonWeight}kg
                        </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;