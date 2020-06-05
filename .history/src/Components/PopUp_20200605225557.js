import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {

    render() {
        const { pokemon } = this.props;
        return (
            <div className={'pop-up-detail-bg'}>
                <header className={'pop-up-detail-header'}>
                    Pokemon.exe
                    <button className={'close-btn'}>
                        X
                    </button>
                </header>
                <div className={'exit-link-container'}>
                    <button className={'disabled-text-btn'}>File</button>
                    <button className={'active-text-btn'}>Exit</button>
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
                                <img src={pokemon.sprites.front_default} alt="" />
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
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