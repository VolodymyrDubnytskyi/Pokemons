import React, { Component } from 'react';
import Menu from './HeaderComponents/Menu';
import AboutPopUp from './AboutPopUp';

class Header extends Component {
    state = {
        searchPoki: '',
        activeMenu: false,
        aboutProjectPopUp: false
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
            activeMenu: !this.state.activeMenu
        })
    }
    showAboutPopUp = e => {
        this.setState({aboutProjectPopUp: true})
    }
    render() {
        return (
            <>
                <header className={'header-container'}>
                    <nav className={'navbar-container'}>
                        <button className={`nav-menu-btn ${this.state.activeMenu && 'active-btn'}`} onClick={this.showMenu}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/32px-Windows_Logo_1995.svg.png" alt="windows"
                                className={'windows-logo'} />
                       Poké95
                    </button>
                        {this.state.activeMenu && <Menu 
                        showAboutPopUp={this.showAboutPopUp}/>}
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
                {this.state.aboutProjectPopUp && <AboutPopUp
                aboutProjectPopUp={this.aboutProjectPopUp} />}
            </>
        );
    }
}

export default Header;