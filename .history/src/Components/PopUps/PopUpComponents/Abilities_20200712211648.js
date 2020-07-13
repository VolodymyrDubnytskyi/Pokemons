import React from 'react';

const Abilities = props => {
const { pokemon } = props;
    return (
        <div className={'abilities-container'}>
            <div className='abilities-content-container'>
                <div className={'abilities-grid-container'}>
                    <div className={'table-column-heading'}>Name</div>
                    <div className={'table-column-heading'}>Slot</div>
                    <div className={'table-column-heading'}>Hidden</div>
                </div>
                {pokemon.abilities.map((item, i) => {
                    const {abilities, slot, is_hidden} = item;
                    return (
                        <div className={'abilities-grid-container abilities-column-container'} key={i}>
                            <div className={'table-column'} >{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</div>
                            <div className={'table-column'} >{slot}</div>
                            <div className={'table-column'} >{is_hidden ? 'Yes' : 'No'}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Abilities