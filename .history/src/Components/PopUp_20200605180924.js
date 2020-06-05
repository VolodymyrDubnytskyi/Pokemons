import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {

    render() {
        return (
            <div className={'pop-up-detail'}>
                <header className={'pop-up-detail-header'}>
                    Pokemon.exe
                    <div className={'close-btn'}>
                        X
                    </div>
                </header>
                <div className={'exit-link-container'}>
                    <span >File</span>
                    <span>Exit</span>
                </div>
                <div></div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;