import React from 'react';
import BasicInfo from './PopUpComponents/BasicInfo';
import Stats from './PopUpComponents/Stats';
import Abilities from './PopUpComponents/Abilities';

const menu = ['Basic Info', 'Stats', 'Abilities']

const PokemonDetail = props => {
    return (
        <div className={'pokemon-detail'}>
            <nav className={'pokemon-detail-menu'} onClick={this.menuTabs}>
                {menu.map((item, i) => {
                    return (
                        <div
                            className={`pokemon-detail-menu-item ${props.activeClassMenuEl === i && 'pokemon-detail-menu-active-item'}`}
                            data-id={i}
                            key={i}>{item}
                        </div>
                    );
                })}
            </nav>
            {props.activeClassMenuEl === 0 && <BasicInfo pokemon={pokemon} pokemonSpecies={pokemonSpecies} />}
            {props.activeClassMenuEl === 1 && <Stats pokemon={pokemon} />}
            {props.activeClassMenuEl === 2 && <Abilities pokemon={pokemon} />}
        </div>
    );
}
export default PokemonDetail;