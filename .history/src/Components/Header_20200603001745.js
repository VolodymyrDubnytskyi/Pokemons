import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className={'fixed-header'}>
                <nav className={'navbar-container'}>
                    <button className={'nav-menu-btn'}></button>
                </nav>
            </header>
        );
    }
}

export default Header;