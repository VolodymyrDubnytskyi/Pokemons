import React, { Component } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

class MainScreen extends Component {
    state = {
        pokemons: [],
        loading: false,
        data: []
    }
    componentDidMount() {
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(respose => respose.json())
            .then(data => {
                this.setState({
                        data: data.results,
                        loading: true
                    }, ()=>{
                        this.state.data.map((item) => {
                            fetch(item.url, {
                                headers: {
                                    mode: 'no-cors'
                                }
                            })
                                .then(respose => respose.json())
                                .then(data => console.log(data))
                        })
                    })
            })
        // if (this.state.loading) {
        //     this.state.data.map((item) => {
        //         fetch(item.url, {
        //             headers: {
        //                 mode: 'no-cors'
        //             }
        //         })
        //             .then(respose => respose.json())
        //             .then(data => console.log(data))
        //     })
        }

        // for (let i = 1; i <= 20; i++) {
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        //         headers: {
        //             mode: 'no-cors'
        //         }
        //     })
        //         .then(respose => respose.json())
        //         .then(data => this.setState({ pokemons: [...this.state.pokemons, data] }))
        // }

    }

    render() {
        console.log(this.state.pokemons);
        console.log(this.state.data);
        return (
            <section className={'main-bg'}>
                <div className={'main-content'}>
                    {this.state.pokemons.map((item) => {
                        return (
                            <div className={'pokemon-box'}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
export default MainScreen;