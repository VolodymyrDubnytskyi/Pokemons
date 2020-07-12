import React from 'react';

const SearchPokemonInput = props => {
    return (
        <div className={'input-container'}>
            <input
                className={'search-input'}
                type='text'
                placeholder='Search...'
                value={props.searchPoki}
                onChange={props.setInputValue} />
        </div>
    );
}
export default SearchPokemonInput;