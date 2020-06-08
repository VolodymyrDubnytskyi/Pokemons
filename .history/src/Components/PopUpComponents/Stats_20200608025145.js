import React from 'react';

const Stats = props => {
    const {pokemon} = props;
    return (
        <div className={'stats-container'}>
            <div className={'stats-content-container'}>
                <div className={'stats-table-heading'}>
                    <div className={'stats-table-column'}>Name</div>
                    <div>Base</div>
                </div>
                {pokemon.stats.map((item) => {
                    return (
                        <div className={'stats'}>
                            <div className={'stats-table-column'}>{item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}</div>
                            <div>{item.base_stat}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Stats;