import React, { Component } from 'react';

class Header extends Component {
    state = {
        searchPoki: '',
        activeMenu: false
    }
    setInputValue = e => {
        this.setState({
            searchPoki: e.target.value
        }, () => {
            this.props.filterPokemons(this.state.searchPoki)
        })
    }
    showMenu = e => {
        this.setState({
            showMenu: true
        })
    }
    render() {
        return (
            <header className={'header-container'}>
                <nav className={'navbar-container'}>
                    <button className={'nav-menu-btn'} onClick={this.showMenu}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/32px-Windows_Logo_1995.svg.png" alt="windows"
                            className={'windows-logo'} />
                        Poke
                    </button>
                    <div className={'input-container'}>
                        <input
                            className={'search-input'}
                            type='text'
                            placeholder='Search...'
                            value={this.state.searchPoki}
                            onChange={this.setInputValue} />
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;