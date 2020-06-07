import React from 'react';
import { Component } from 'react';
import Header from './Header';
import PopUpPokemonDetail from './PopUp';

class Home extends Component {
    state = {
        collectionsOfUrl: '',
        pokemonsDetail: [],
        clickedPokemonDetail: '',
        activePopUp: false
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=200')
            .then(res => res.json())
            .then((data => {
                this.setState({
                    collectionsOfUrl: data.results
                }, () => {
                    this.getPokemonsData();
                })
            }))
    }

    getPokemonsData = e => {
        this.state.collectionsOfUrl.map((item) => {
            fetch(item.url)
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        pokemonsDetail: [...this.state.pokemonsDetail, {
                            data: result,
                        }
                        ]
                    })
                })
        })
    }
    checkPokemonDetail = pokemon => {
        this.setState({
            clickedPokemonDetail: pokemon,
            activePopUp: true
        })
        console.log(pokemon);
    }
    render() {
    console.log(this.state.pokemonsDetail);
        return (
            <section className={'main-bg'}>
                {/* <Header />
                {this.state.activePopUp && <PopUpPokemonDetail
                    pokemon={this.state.clickedPokemonDetail} />}
                <div className={'content-box'}>
                    {this.state.pokemonsDetail.map((item, i) => {
                        return (
                            <div
                                className={'pokemon-container'}
                                onDoubleClick={() => this.checkPokemonDetail(item)}
                                key={i}
                            >
                                <img src={item.sprites.front_default} alt="pokemon-image" />
                                <h3 className={'pokemon-name'}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                            </div>
                        );
                    })}
                </div> */}
            </section>
        );
    }
}
export default Home;