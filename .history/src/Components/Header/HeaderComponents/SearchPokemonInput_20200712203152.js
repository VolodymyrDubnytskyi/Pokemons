import React from 'react';

const SearchPokemonInput = props => {
    const {searchPoki, setInputValue} = props;
    return (
        <div className={'input-container'}>
            <input
                className={'search-input'}
                type='text'
                placeholder='Search...'
                value={searchPoki}
                onChange={setInputValue} />
        </div>
    );
}
export default SearchPokemonInput;