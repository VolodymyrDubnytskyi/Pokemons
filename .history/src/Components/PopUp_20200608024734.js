import React from 'react';
import { Component } from 'react';
import BasicInfo from './PopUpComponents/BasicInfo';

class PopUpPokemonDetail extends Component {
    state = {
        activeClassMenuEl: 1
    }
    menuTabs = e => {
        if (e.target.classList.contains('pokemon-detail-menu-item')) {
            this.setState({
                activeClassMenuEl: +(e.target.getAttribute('data-id'))
            })
        }
    }
    render() {
        const { pokemon, pokemonSpecies } = this.props;
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
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 1 && 'pokemon-detail-menu-active-item'}`} data-id='1'>Basic Info</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 2 && 'pokemon-detail-menu-active-item'}`} data-id='2'>Stats</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 3 && 'pokemon-detail-menu-active-item'}`} data-id='3'>Abilities</div>
                    </nav>
                    {this.state.activeClassMenuEl === 1 ?
                        <BasicInfo
                        pokemon={pokemon}
                        />
                        :
                        <div className={'stats-container'}>
                            <div className={'stats-content-container'}>
                                <div className={'stats-table-heading'}>
                                    <div className={'stats-table-column'}>Name</div>
                                    <div>Base</div>
                                </div>
                                {pokemon.stats.map((item) => {
                                    return (
                                        <div className={'stats'}>
                                            <div className={'stats-table-column'}>{item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}</div>
                                            <div>{item.base_stat}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;