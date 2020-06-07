import React from 'react';
import { Component } from 'react';

class PopUpPokemonDetail extends Component {
    state = {
        // data: '',
        activeClassMenuEl: 1
    }
    // getPokemonDescription = e => {
    //     fetch(this.props.pokemon.species.url)
    //         .then((res => res.json()))
    //         .then((data => this.setState({ data: data })))
    // }
    // componentDidMount() {
    //     this.getPokemonDescription()

    // }
    menuTabs = e => {
        if (e.target.classList.contains('pokemon-detail-menu-item')) {
            this.setState({
                activeClassMenuEl: +(e.target.getAttribute('data-id'))
            })
            // console.log(e.target.getAttribute('data-id'));
        }
    }
    render() {
        const { pokemon, pokemonSpecies } = this.props;
        console.log(pokemonSpecies);
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
                    <nav className={'pokemon-detail-menu'} onClick={this.menuTabs}>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 1 && 'pokemon-detail-menu-active-item'}`} data-id='1'>Basic Info</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 2 && 'pokemon-detail-menu-active-item'}`} data-id='2'>Stats</div>
                        <div className={`pokemon-detail-menu-item ${this.state.activeClassMenuEl === 3 && 'pokemon-detail-menu-active-item'}`} data-id='3'>Abilities</div>
                    </nav>
                    {this.state.activeClassMenuEl === 1 ?
                        <div className={'pokemon-detail-content'}>
                            <div className={'pokemon-detail-img-container'}>
                                <img src={pokemon.sprites.front_default} alt="pokemon" className={'pokemon-detail-img'} />
                            </div>
                            <div className={'pokemon-detail-description-box'}>
                                <h2>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}#{pokemon.id}
                                </h2>
                                <div className={'pokemon-detail-type-of-pokemon'}>
                                    {pokemon.types.map(item => <div>{item.type.name}</div>)}
                                </div>
                                <div>
                                    <b> Height:</b> {+(pokemon.height + '0') / 100}m
                                    <b>Weight:</b> {+(pokemon.weight + '00') / 1000}kg
                     </div>
                                <p></p>
                            </div>
                        </div>
                        :
                        <div className={'stats-container'}>
                            <div className={'stats-content-container'}>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Base</th>
                                    </tr>
                                    <tbody>
                                        {pokemon.stats.map((item) => {
                                            console.log(item)
                                            return ( 
                                                <tr>
                                                    <th>{item.stat.name}</th>
                                                    <th>{item.base_stat}</th>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default PopUpPokemonDetail;