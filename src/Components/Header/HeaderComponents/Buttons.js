import React from 'react';
import { imgDvd, imgWindows } from '../../../constans/images'

const Buttons = props => {
    const {activeMenu, showMenu, activeDvdPokemon, activePokeDvd, activePopUp, dvdIcon} = props;
    return (
        <div className={'navbar-btn-container'}>
            <button className={`nav-menu-btn ${activeMenu && 'active-btn'}`} onClick={showMenu}>
                <img
                    src={imgWindows} alt='windows'
                    className={'windows-logo'} />
                  Poké95
            </button>
            <button
                className={
                    `${activePokeDvd ? 'pokemon-dvd-loaded-btn' : dvdIcon && 'pokemon-dvd-loaded-btn'}
                     ${activePopUp ? 'active-btn' : 'nav-menu-btn'}`
                }
                onClick={activeDvdPokemon}>
                <img src={imgDvd} alt="dvd" className={'dvd-icon'} />
                  Pokemon
            </button>
        </div>
    );
}

export default Buttons;