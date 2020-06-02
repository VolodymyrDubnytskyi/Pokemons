import React, { Component } from 'react';
import Header from './Header'

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

class MainScreen extends Component {
    state = {
        pokemons: [],
        loading: false,
        data: []
    }
    componentDidMount() {
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=150&offset=200')
            .then(respose => respose.json())
            .then(data => {
                this.setState({ data: data.results }, () => {
                    this.state.data.map((item) => {
                        fetch(item.url, {
                            headers: {
                                mode: 'no-cors'
                            }
                        })
                            .then(respose => respose.json())
                            .then(data => this.setState({ pokemons: [...this.state.pokemons, data], loading: true }))
                    })
                })
            })
    }

    render() {
        console.log(this.state.pokemons);
        // console.log(this.state.data);
        return (
            <section className={'main-bg'}>
                <Header />
                <div className={'main-content'}>
                    {this.state.pokemons.map((item) => {
                        return (
                            <div className={'pokemon-box'}>
                                {this.state.loading === true ?
                                    <img src={item.sprites.front_default} alt="pokemon-avatar-image" /> :
                                    <img src={require('../assest/pokeball-pokemon-svgrepo-com.svg')}
                                        className={'pokemon-loading-img'}
                                        alt="pokemon-ball-image" />
                                }

                                <h3 className={'pokemon-name'}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                            </div>
                        );
                    })}
                </div>
            </section >
        );
    }
}
export default MainScreen;