import React from 'react';
import { Component } from 'react';
import PokemonDetail from './PopUpComponents/PokemonDetail';

class PopUpPokemonDetail extends Component {
    state = {
        activeClassMenuEl: 0
    }
    menuTabs = e => {
        if (e.target.classList.contains('pokemon-detail-menu-item')) {
            this.setState({
                activeClassMenuEl: +(e.target.getAttribute('data-id'))
            })
        }
    }
    render() {
        const { pokemon, pokemonSpecies, activePokemonPopUp } = this.props;
        console.log(pokemonSpecies)
        return (
            <div className={'pop-up-detail-bg'}>
                <header className={'pop-up-detail-header'}>
                    Pokemon.exe
                    <button className={'close-btn'} onClick={() => activePokemonPopUp()}>
                        X
                    </button>
                </header>
                <div className={'exit-link-container'}>
                    <button className={'disabled-text-btn'}>File</button>
                    <button className={'active-text-btn'} onClick={() => activePokemonPopUp()}>Exit</button>
                </div>
                <PokemonDetail
                    activeClassMenuEl={this.state.activeClassMenuEl}
                    pokemon={pokemon}
                    pokemonSpecies={pokemonSpecies}
                    menuTabs={this.menuTabs}
                />
            </div>
        );
    }
}
export default PopUpPokemonDetail;