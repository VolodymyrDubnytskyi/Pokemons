import React, { Component } from 'react';
import Menu from './HeaderComponents/Menu';
import SearchPokemonInput from './HeaderComponents/SearchPokemonInput'
import Buttons from './HeaderComponents/Buttons'
import AboutPopUp from '../PopUps/AboutPopUp';

class Header extends Component {
    state = {
        searchPoki: '',
        activeMenu: false,
        aboutProjectPopUp: false,
        activePokeDvd: true
    }
    
    showMenu = e => this.setState({activeMenu: !this.state.activeMenu})
    closeAboutPopUp = e => this.setState({ aboutProjectPopUp: false})
    setInputValue = e => {
        this.setState({
            searchPoki: e.target.value
        }, () => {
            this.props.filterPokemons(this.state.searchPoki)
        })
    }
    showAboutPopUp = e => {
        this.setState({
            aboutProjectPopUp: true,
            activeMenu: false
        })
    }
    activeDvdPokemon = e => {
        this.setState({ activePokeDvd: false })
        this.props.activePokemonPopUp();
    }

    render() {
        return (
            <>
                <header className={'header-container'}>
                    <nav className={'navbar-container'}>
                        <Buttons
                            activeMenu={this.state.activeMenu}
                            activePokeDvd={this.state.activePokeDvd}
                            activePopUp={this.props.activePopUp}
                            activeDvdPokemon={this.activeDvdPokemon}
                            showMenu={this.showMenu}
                            dvdIcon={this.props.dvdIcon}
                        />
                        <SearchPokemonInput
                            searchPoki={this.state.searchPoki}
                            setInputValue={this.setInputValue}
                        />
                    </nav>
                </header>
                {this.state.activeMenu && 
                <Menu showAboutPopUp={this.showAboutPopUp} />}
                {this.state.aboutProjectPopUp && 
                <AboutPopUp closeAboutPopUp={this.closeAboutPopUp} />}
            </>
        );
    }
}

export default Header;