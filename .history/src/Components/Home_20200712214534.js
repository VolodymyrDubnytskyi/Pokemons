import React from 'react';
import { Component } from 'react';
import Header from './Header/Header';
import PopUpPokemonDetail from './PopUps/PopUpPokemonDetail';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import { imgPokeball } from '../constans/images'
import { pokemons } from '../../constans/urls'

class Home extends Component {
    state = {
        collectionsOfUrl: '',
        pokemonsDetail: [],
        clickedPokemonDetail: '',
        activePopUp: false,
        isLoaded: false,
        imgLoaded: 0,
        dvdIcon: false
    }
    componentDidMount() {
        fetch(pokemons)
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
                        pokemonsDetail: [...this.state.pokemonsDetail, result].sort((a, b) => a.id - b.id),
                        pokemonDetailDefault: this.state.pokemonsDetail,
                        isLoaded: true
                    })
                })
        })
    }
    getPokemonSpecies = pokemon => {
        fetch(pokemon.species.url)
            .then((res => res.json()))
            .then((data => this.setState({ pokemonSpecies: data })))
    }

    checkPokemonDetail = pokemon => {
        this.getPokemonSpecies(pokemon)
        this.setState({
            clickedPokemonDetail: pokemon,
            activePopUp: true
        })
    }

    activePokemonPopUp = e => {
        this.setState({
            activePopUp: !this.state.activePopUp,
            dvdIcon: false
        })
    }
    filterPokemons = serchWord => {
        this.setState({
            pokemonsDetail: this.state.pokemonDetailDefault.filter((item) => item.name.includes(serchWord))
        })
    }
    removeDvdIcon = e => {
        this.setState({ dvdIcon: true })
    }
    // loadingPokemonImg = e => this.setState({imgLoaded: this.state.imgLoaded + 1})
    render() {
        return (
            <section className={'main-bg'}>
                {this.state.isLoaded ?
                    <>
                        <Header
                            filterPokemons={this.filterPokemons}
                            activePopUp={this.state.activePopUp}
                            activePokemonPopUp={this.activePokemonPopUp}
                            dvdIcon={this.state.dvdIcon} />
                        {this.state.activePopUp &&
                            <PopUpPokemonDetail
                                pokemon={this.state.clickedPokemonDetail}
                                activePopUp={this.state.activePopUp}
                                pokemonSpecies={this.state.pokemonSpecies}
                                activePokemonPopUp={this.activePokemonPopUp}
                                removeDvdIcon={this.removeDvdIcon} />}
                        <div className={'content-box'}>
                            {this.state.pokemonsDetail.map((item, i) => {
                                return (
                                    <div
                                        className={'pokemon-container'}
                                        onDoubleClick={() => this.checkPokemonDetail(item)}
                                        key={i}
                                    >
                                        <img
                                            src={item.sprites.front_default ? item.sprites.front_default : imgPokeball}
                                            // src={this.state.imgLoaded >= i ? item.sprites.front_default : imgPokeball}
                                            alt="pokemon-image"
                                            className={'pokeball-img'} />
                                        {/* onLoad={this.loadingPokemonImg} /> */}
                                        <h3 className={'pokemon-name'}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                    :
                    <LoadingScreen />}

            </section>

        );
    }
}
export default Home;



// item.sprites.front_default