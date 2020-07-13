import React from 'react';
import BasicInfo from './BasicInfo';
import Stats from './Stats';
import Abilities from './Abilities';
import LoadingScreen from '../../LoadingScreen/LoadingScreen'

const menu = ['Basic Info', 'Stats', 'Abilities']

const PokemonDetail = props => {
    const { activeClassMenuEl, menuTabs, pokemon, pokemonSpecies } = props;
    return (
        pokemonSpecies !== undefined ?
            <div className={'pokemon-detail'}>
                <nav className={'pokemon-detail-menu'} onClick={menuTabs}>
                    {menu.map((item, i) => {
                        return (
                            <div
                                className={`pokemon-detail-menu-item ${activeClassMenuEl === i && 'pokemon-detail-menu-active-item'}`}
                                data-id={i}
                                key={i}>{item}
                            </div>
                        );
                    })}
                </nav>
                {activeClassMenuEl === 0 && <BasicInfo pokemon={pokemon} pokemonSpecies={pokemonSpecies} />}
                {activeClassMenuEl === 1 && <Stats pokemon={pokemon} />}
                {activeClassMenuEl === 2 && <Abilities pokemon={pokemon} />}
            </div>
            :
            <LoadingScreen />
    );
}
export default PokemonDetail;