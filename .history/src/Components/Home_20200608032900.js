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
filterPokemons = serchWord =>{
    this.setState({
        pokemonsDetail: this.state.pokemonsDetail.filter((item)=>item.includes(serchWord))
    })
}
    getPokemonsData = e => {
        this.state.collectionsOfUrl.map((item) => {
            fetch(item.url)
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        pokemonsDetail: [...this.state.pokemonsDetail, result].sort((a, b) => a.id - b.id)
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
        this.setState({
            clickedPokemonDetail: pokemon,
            activePopUp: true
        })
        this.getPokemonSpecies(pokemon)
    }
    closePopUp = e => this.setState({activePopUp: false})

    render() {
        console.log(this.state.clickedPokemonDetail);
        return (
            <section className={'main-bg'}>
                <Header />
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
                                // onClick={}
                                onDoubleClick={() => this.checkPokemonDetail(item)}
                                key={i}
                            >
                                <img src={item.sprites.front_default} alt="pokemon-image" />
                                <h3 className={'pokemon-name'}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
export default Home;