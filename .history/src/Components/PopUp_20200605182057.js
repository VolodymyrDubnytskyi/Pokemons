import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {

    render() {
        return (
            <div className={'pop-up-detail-bg'}>
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
                <div className={'pokemon-detail'}>
                    <nav className={'pokemon-detail-menu'}>
                        <div>Basic Info</div>
                        <div>Stats</div>
                        <div>Abilities</div>
                    </nav>
                    <div className={'pokemon-detail-content'}>
                        <div>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;