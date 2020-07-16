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

    showMenu = e => this.setState({ activeMenu: !this.state.activeMenu })
    closeAboutPopUp = e => this.setState({ aboutProjectPopUp: false })
    setInputValue = e => {
        const {filterPokemons} = this.props;
        this.setState({
            searchPoki: e.target.value
        }, () => {
            const {searchPoki} = this.state;
            filterPokemons(searchPoki)
        })
    }
    showAboutPopUp = e => {
        this.setState({
            aboutProjectPopUp: true,
            activeMenu: false
        })
    }
    activeDvdPokemon = e => {
        const {activePokemonPopUp} = this.props;
        this.setState({ activePokeDvd: false })
        activePokemonPopUp();
    }

    render() {
        const {activeMenu, activePokeDvd, searchPoki, aboutProjectPopUp}  = this.state;
        const {activePopUp, dvdIcon}  = this.props;
        const {activeDvdPokemon, showMenu, setInputValue, showAboutPopUp, closeAboutPopUp}  = this;
        return (
            <>
                <header className={'header-container'}>
                    <nav className={'navbar-container'}>
                        <Buttons
                            activeMenu={activeMenu}
                            activePokeDvd={activePokeDvd}
                            activePopUp={activePopUp}
                            activeDvdPokemon={activeDvdPokemon}
                            showMenu={showMenu}
                            dvdIcon={dvdIcon}
                        />
                        <SearchPokemonInput
                            searchPoki={searchPoki}
                            setInputValue={setInputValue}
                        />
                    </nav>
                </header>
                {activeMenu &&
                    <Menu 
                    showAboutPopUp={showAboutPopUp}
                    showMenu={showMenu} />}
                {aboutProjectPopUp &&
                    <AboutPopUp closeAboutPopUp={closeAboutPopUp} />}
            </>
        );
    }
}
export default Header;