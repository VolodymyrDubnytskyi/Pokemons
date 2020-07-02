import React from 'react';

const Abilities = props => {
    return (
        <div className={'abilities-container'}>
            <table className='abilities-content-container'>
                <tr >
                        <th className={'table-column-heading'}>Name</th>
                        <th className={'table-column-heading'}>Slot</th>
                        <th className={'table-column-heading'}>Hidden</th>
                </tr>
                {props.pokemon.abilities.map((item) => {
                    return (
                        <tr>
                            <td>{item.ability.name}</td>
                            <td>{item.slot}</td>
                            <td>{item.is_hidden}</td>
                        </tr>
                    );
                })}
            </table>

        </div>
    );
}
export default Abilities