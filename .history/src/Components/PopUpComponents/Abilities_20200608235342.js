import React from 'react';

const Abilities = props => {
    return (
        <div className={'stats-container'}>
            <div className='stats-content-container'>
                <div className={'stats-table-heading'}>
                    <span className={'stats-table-colum'}>Name</span>
                    <span className={'stats-table-colum'}>Slot</span>
                    <span className={'stats-table-colum'}>Hidden</span>
                </div>
                {props.pokemon.abilities.map((item) => {
                    return (
                        <div>
                            <div>{item.ability.name}</div>
                            <div>{item.slot}</div>
                            <div>{item.is_hidden}</div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
export default Abilities