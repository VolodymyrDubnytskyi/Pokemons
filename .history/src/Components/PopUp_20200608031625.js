import React from 'react';
import { Component } from 'react';
import BasicInfo from './PopUpComponents/BasicInfo';
import Stats from './PopUpComponents/Stats';

const menu = ['Basic Info', 'Info', 'Abilities']

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
        const { pokemon, pokemonSpecies, closePopUp } = this.props;
        return (
            <div className={'pop-up-detail-bg'}>
                <header className={'pop-up-detail-header'}>
                    Pokemon.exe
                    <button className={'close-btn'} onClick={() => closePopUp()}>
                        X
                    </button>
                </header>
                <div className={'exit-link-container'}>
                    <button className={'disabled-text-btn'}>File</button>
                    <button className={'active-text-btn'}>Exit</button>
                </div>
                <div className={'pokemon-detail'}>
                    <nav className={'pokemon-detail-menu'} onClick={this.menuTabs}>
                        {menu.map((item, i) => {
                            return (
                                <div
                                    className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === i && 'pokemon-detail-menu-active-item'}`}
                                    data-id={i}>{item}
                                </div>
                            );
                        })}
                        {/* <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 1 && 'pokemon-detail-menu-active-item'}`} data-id='1'>Basic Info</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 2 && 'pokemon-detail-menu-active-item'}`} data-id='2'>Stats</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 3 && 'pokemon-detail-menu-active-item'}`} data-id='3'>Abilities</div> */}
                    </nav>
                    {this.state.activeClassMenuEl === 0 ?
                        <BasicInfo
                            pokemon={pokemon}
                        />
                        :
                        this.state.activeClassMenuEl === 1 ?
                            <Stats
                                pokemon={pokemon}
                            />
                            :
                            ''
                    }
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;