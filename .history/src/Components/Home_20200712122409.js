import React from 'react';
import { Component } from 'react';
import Header from './Header';
import PopUpPokemonDetail from './PopUp';
import LoadingScreen from './LoadingScreen/LoadingScreen';

class Home extends Component {
    state = {
        collectionsOfUrl: '',
        pokemonsDetail: [],
        clickedPokemonDetail: '',
        activePopUp: false,
        isLoaded: false,
        imgLoaded: 0
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
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

    closePopUp = e => this.setState({ activePopUp: false })

    filterPokemons = serchWord => {
        this.setState({
            pokemonsDetail: this.state.pokemonDetailDefault.filter((item) => item.name.includes(serchWord))
        })
    }
    loadingPokemonImg = e =>{
        this.setState({
            imgLoaded: this.state.imgLoaded + 1
        })
    }
    render() {
        return (
            <section className={'main-bg'}>
                {this.state.isLoaded ?
                    <>
                        <Header
                            filterPokemons={this.filterPokemons} />
                        {this.state.activePopUp &&
                            <PopUpPokemonDetail
                                pokemon={this.state.clickedPokemonDetail}
                                activePopUp={this.state.activePopUp}
                                pokemonSpecies={this.state.pokemonSpecies}
                                closePopUp={this.closePopUp} />}
                        <div className={'content-box'}>
                            {this.state.pokemonsDetail.map((item, i) => {
                                return (
                                    <div
                                        className={'pokemon-container'}
                                        onDoubleClick={() => this.checkPokemonDetail(item)}
                                        key={i}
                                    >
                                        <img src={'../assets/pokeball_l.jpg'} alt="pokemon-image" onLoad={this.loadingPokemonImg}/>
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