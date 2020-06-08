import React from 'react';

const Abilities = props => {
    return (
        <div className={'stats-container'}>
            <div className='stats-content-container'>
                <div className={'stats-table-heading'}>
                    <span>Name</span>
                    <span>Slot</span>
                    <span>Hidden</span>
                </div>
                {props.pokemon.abilities.map((item) => {
                    return (
                        <div>
                            <span>{item.ability.name}</span>
                            <span>{item.slot}</span>
                            <span>{item.is_hidden}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
export default Abilities