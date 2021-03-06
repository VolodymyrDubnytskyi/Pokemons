import React from 'react';
import { Component } from 'react';
import Header from './Header/Header';
import PopUpPokemonDetail from './PopUps/PopUpPokemonDetail';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import { imgPokeball } from '../constans/images'
import { pokemons } from '../constans/urls'

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
        const {collectionsOfUrl} = this.state;
        collectionsOfUrl.map((item) => {
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
        const { getPokemonSpecies} = this;
        getPokemonSpecies(pokemon)
        this.setState({
            clickedPokemonDetail: pokemon,
            activePopUp: true
        })
    }

    activePokemonPopUp = e => {
        const {activePopUp} = this.state
        this.setState({
            activePopUp: !activePopUp,
            dvdIcon: false
        })
    }
    filterPokemons = searchWord => {
        this.setState({
            pokemonsDetail: this.state.pokemonDetailDefault.filter((item) => item.name.includes(searchWord))
        })
    }
    removeDvdIcon = e => this.setState({ dvdIcon: true })
    pokemonSelection = pokeIndex => this.setState({ pokemonSelected: pokeIndex })

    render() {
        const { activePopUp, pokemonsDetail, dvdIcon, clickedPokemonDetail, pokemonSpecies, isLoaded, pokemonSelected } = this.state;
        const { activePokemonPopUp, filterPokemons, removeDvdIcon, checkPokemonDetail, pokemonSelection } = this;
        return (
            <section className={'main-bg'}>
                {isLoaded ?
                    <>
                        <Header
                            filterPokemons={filterPokemons}
                            activePopUp={activePopUp}
                            activePokemonPopUp={activePokemonPopUp}
                            dvdIcon={dvdIcon} />
                        {activePopUp &&
                            <PopUpPokemonDetail
                                pokemon={clickedPokemonDetail}
                                activePopUp={activePopUp}
                                pokemonSpecies={pokemonSpecies}
                                activePokemonPopUp={activePokemonPopUp}
                                removeDvdIcon={removeDvdIcon} />}
                        <div className={'content-box'}>
                            {pokemonsDetail.map((item, i) => {
                                const { sprites, name } = item;
                                return (
                                    <div
                                        className={'pokemon-container'}
                                        onDoubleClick={() => checkPokemonDetail(item)}
                                        onClick={() => pokemonSelection(i)}
                                        key={i}
                                    >
                                        <img
                                            src={sprites.front_default ? sprites.front_default : imgPokeball}
                                            alt="pokemon"
                                            className={'pokeball-img'} />
                                        <h3
                                            className={`pokemon-name ${pokemonSelected === i && 'selected-pokemon'}`}>
                                            {name.charAt(0).toUpperCase() + name.slice(1)}
                                        </h3>
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