import React from 'react';

const Abilities = props => {
    return (
        <div className={'stats-container'}>
            <table className='stats-content-container'>
                <tr >
                        <th className={'stats-table-colum'}>Name</th>
                        <th className={'stats-table-colum'}>Slot</th>
                        <th className={'stats-table-colum'}>Hidden</th>
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