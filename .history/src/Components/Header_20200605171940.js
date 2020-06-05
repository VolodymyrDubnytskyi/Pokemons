import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className={'header-container'}>
                <nav className={'navbar-container'}>
                    <button className={'nav-menu-btn'}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/32px-Windows_Logo_1995.svg.png" alt="windows-image"
                            className={'windows-logo'} />
                        Poke
                    </button>
                    <div className={'input-container'}>
                        <input className={'search-input'} type="text" />
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;