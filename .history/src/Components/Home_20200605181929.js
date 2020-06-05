import React from 'react';
import { Component } from 'react';
import Header from './Header';
import PopUpPokemonDetail from './PopUp';

class Home extends Component {
    state = {
        collectionsOfUrl: '',
        pokemonsDetail: []
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
                        pokemonsDetail: [...this.state.pokemonsDetail, result]
                    })
                })
        })
    }

    render() {
        return (
            <PopUpPokemonDetail/>
            // <section className={'main-bg'}>
            //     <Header/>
            //     <div className={'content-box'}>
            //         {this.state.pokemonsDetail.map((item) => {
            //             return (
            //                 <div className={'pokemon-container'}>
            //                     <img src={item.sprites.front_default} alt="pokemon-image" />
            //                     <h3 className={'pokemon-name'}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
            //                 </div>
            //             );
            //         })}
            //     </div>
            // </section>
        );
    }
}
export default Home;