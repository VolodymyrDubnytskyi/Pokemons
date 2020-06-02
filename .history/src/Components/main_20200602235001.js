import React, { Component } from 'react';

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
                <div className={'main-content'}>
                    {this.state.pokemons.map((item) => {
                        return (
                            <div className={'pokemon-box'}>
                                {/* {this.state.loading ?
                                    <img src={item.sprites.front_default} alt="" /> :
                                    <img src='../assest/pokeball-pokeball-png-clip-art.png' alt="" />
                                } */}
                                <img src={require('../assest/pokeball-pokemon-svgrepo-com.svg')} alt="" />
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