import React, { Component } from 'react';
import Menu from './HeaderComponents/Menu';
import SearchPokemonInput from './HeaderComponents/SearchPokemonInput'
import Buttons from './HeaderComponents/Buttons'
import AboutPopUp from '../PopUps/AboutPopUp';
import { imgDvd } from '../../constans/images'

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
                        />
                        {this.state.activeMenu && 
                        <Menu showAboutPopUp={this.showAboutPopUp} />}
                        <SearchPokemonInput
                            searchPoki={this.state.searchPoki}
                            setInputValue={this.setInputValue}
                        />
                    </nav>
                </header>
                {this.state.aboutProjectPopUp && 
                <AboutPopUp closeAboutPopUp={this.closeAboutPopUp} />}
            </>
        );
    }
}

export default Header;