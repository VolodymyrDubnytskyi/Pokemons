import React from 'react';
import BasicInfo from './BasicInfo';
import Stats from './Stats';
import Abilities from './Abilities';


const menu = ['Basic Info', 'Stats', 'Abilities']

const PokemonDetail = props => {
    return (
        <div className={'pokemon-detail'}>
            <nav className={'pokemon-detail-menu'} onClick={props.menuTabs}>
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
            {props.activeClassMenuEl === 0 && <BasicInfo pokemon={props.pokemon} pokemonSpecies={props.pokemonSpecies} />}
            {props.activeClassMenuEl === 1 && <Stats pokemon={props.pokemon} />}
            {props.activeClassMenuEl === 2 && <Abilities pokemon={props.pokemon} />}
        </div>
    );
}
export default PokemonDetail;