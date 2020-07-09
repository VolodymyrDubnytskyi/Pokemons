import React from 'react';

const Abilities = props => {
    console.log(props);
    return (
        <div className={'abilities-container'}>
            <div className='abilities-content-container'>
                <div className={'table-column-heading'}>Name</div>
                <div className={'table-column-heading'}>Slot</div>
                <div className={'table-column-heading'}>Hidden</div>
                {props.pokemon.abilities.map((item, i) => {
                    return (
                        <>
                            <div className={'table-column'} key={i}>{item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}</div>
                            <div className={'table-column'} key={i}>{item.slot}</div>
                            <div className={'table-column'} key={i}>{item.is_hidden ? 'Yes' : 'No'}</div>
                        </>
                    );
                })}
            </div>

        </div>
    );
}
export default Abilities