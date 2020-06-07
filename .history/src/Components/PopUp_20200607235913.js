import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {
    // state = {
    //     data: '',
    // }
    // getPokemonDescription = e => {
    //     fetch(this.props.pokemon.species.url)
    //         .then((res => res.json()))
    //         .then((data => this.setState({ data: data })))
    // }
    // componentDidMount() {
    //     this.getPokemonDescription()

    // }
    menuTabs = e => {
         if(e.target.classList.contains('pokemon-detail-menu-item')){
             console.log(e.target);
         }
    }
    render() {
        const { pokemon, pokemonSpecies } = this.props;
        console.log(pokemonSpecies);
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
                    <nav className={'pokemon-detail-menu'} onClick={this.menuTabs}>
                        <div className={'pokemon-detail-menu-item pokemon-detail-menu-active-item'}>Basic Info</div>
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
                                <b> Height:</b> {parseInt(this.props.pokemon.height + '0') / 100}m
                                <b>Weight:</b> {parseInt(this.props.pokemon.weight + '00') / 1000}kg
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