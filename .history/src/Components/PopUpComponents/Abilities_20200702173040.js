import React from 'react';

const Abilities = props => {
    const toUpperCase = item => {
        item.charAt(0).toUpperCase() + item.slice(1)
        return item
    }
    return (
        <div className={'abilities-container'}>
            <table className='abilities-content-container'>

                <th className={'table-column-heading'}>Name</th>
                <th className={'table-column-heading'}>Slot</th>
                <th className={'table-column-heading'}>Hidden</th>

                {props.pokemon.abilities.map((item) => {
                    return (
                        <>
                            <td className={'table-column'}>{()=> toUpperCase(item.abilities.name)}</td>
                            <td className={'table-column'}>{item.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}</td>
                            <td className={'table-column'}>{item.is_hidden}</td>
                        </>
                    );
                })}
            </table>

        </div>
    );
}
export default Abilities