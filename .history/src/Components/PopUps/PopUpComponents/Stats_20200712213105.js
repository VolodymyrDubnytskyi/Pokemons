import React from 'react';

const Stats = props => {
    const {pokemon} = props;
    return (
        <div className={'stats-container'}>
            <div className={'stats-content-container'}>
                <div className={'stats-table-heading'}>
                    <div className={'table-column-heading table-column-heading-lg'}>Name</div>
                    <div className={'table-column-heading table-column-heading-s'}>Base</div>
                </div>
                {pokemon.stats.map((item, index) => {
                    const {stat, base_stat} = item;
                    return (
                        <div className={'stats'} key={index}>
                            <div className={'stats-table-column-lg'}>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</div>
                            <div>{base_stat}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Stats;