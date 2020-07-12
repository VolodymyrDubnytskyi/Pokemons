import React, { Component } from 'react';
import Menu from './HeaderComponents/Menu';
import AboutPopUp from './AboutPopUp';
import { imgDvd } from '../assets/imgDvd'

class Header extends Component {
    state = {
        searchPoki: '',
        activeMenu: false,
        aboutProjectPopUp: false,
        activePokeDvd: true
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
        this.setState({
            aboutProjectPopUp: true,
            activeMenu: false
        })
    }
    closeAboutPopUp = e => {
        this.setState({
            aboutProjectPopUp: false
        })
    }
    activeDvdPokemon = e => {
        this.setState({ activePokeDvd: false })
        this.props.activePopUp();
    }

    render() {
        return (
            <>
                <header className={'header-container'}>
                    <nav className={'navbar-container'}>
                        <div className={'navbar-btn-container'}>
                            <button className={`nav-menu-btn ${this.state.activeMenu && 'active-btn'}`} onClick={this.showMenu}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/32px-Windows_Logo_1995.svg.png" alt="windows"
                                    className={'windows-logo'} />
                       Poké95
                    </button>
                            <button
                                className={`${this.state.activePokeDvd && 'pokemon-dvd-loaded-btn'} ${this.props.activePopUp ? 'active-btn' : 'nav-menu-btn'}`}
                                onClick={this.activeDvdPokemon}>
                                <img src={imgDvd} alt="dvd" className={'dvd-img'} />
                            Pokemon
                         </button>
                        </div>
                        {this.state.activeMenu && <Menu
                            showAboutPopUp={this.showAboutPopUp} />}
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
                    closeAboutPopUp={this.closeAboutPopUp} />}
            </>
        );
    }
}

export default Header;