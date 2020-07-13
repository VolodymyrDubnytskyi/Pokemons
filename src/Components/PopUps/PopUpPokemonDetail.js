import React, { Component } from 'react';
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
    closePopUpAndRemoveDvdIcon = e =>{
        const {activePokemonPopUp, removeDvdIcon} = this.props;
        activePokemonPopUp();
        removeDvdIcon();
    }
    render() {
        const { pokemon, pokemonSpecies, activePokemonPopUp } = this.props;
        const { activeClassMenuEl} = this.state;
        const { closePopUpAndRemoveDvdIcon, menuTabs } = this;
        return (
            <div className={'pop-up-detail-bg'}>
                <header className={'pop-up-detail-header'}>
                    Pokemon.exe
                    <button className={'close-btn'} onClick={closePopUpAndRemoveDvdIcon}>
                        X
                    </button>
                </header>
                <div className={'exit-link-container'}>
                    <button className={'disabled-text-btn'}>File</button>
                    <button className={'active-text-btn'} onClick={closePopUpAndRemoveDvdIcon}>Exit</button>
                </div>
                <PokemonDetail
                    activeClassMenuEl={activeClassMenuEl}
                    pokemon={pokemon}
                    pokemonSpecies={pokemonSpecies}
                    menuTabs={menuTabs}
                />
            </div>
        );
    }
}
export default PopUpPokemonDetail;