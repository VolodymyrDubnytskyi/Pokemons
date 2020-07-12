import React from 'react';
import { imgDvd } from '../../../constans/images'

const Buttons = props => {
    const {activeMenu, showMenu, activeDvdPokemon, activePokeDvd, activePopUp} = props;
    return (
        <div className={'navbar-btn-container'}>
            <button className={`nav-menu-btn ${activeMenu && 'active-btn'}`} onClick={showMenu}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/32px-Windows_Logo_1995.svg.png" alt="windows"
                    className={'windows-logo'} />
                  Poké95
            </button>
            <button
                className={
                    `${activePokeDvd ? 'pokemon-dvd-loaded-btn' : dvdIcon && 'pokemon-dvd-loaded-btn'}
                     ${activePopUp ? 'active-btn' : 'nav-menu-btn'}`
                }
                onClick={activeDvdPokemon}>
                <img src={imgDvd} alt="dvd" className={'dvd-img'} />
                  Pokemon
            </button>
        </div>
    );
}
export default Buttons;