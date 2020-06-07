import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {

    render() {
        const { pokemon } = this.props;
        console.log(pokemon.sprites.front_default);
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
                            <h2>{pokemon.name.charAt(0).toUpperCase() + item.data.name.slice(1)}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;