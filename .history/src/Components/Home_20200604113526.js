import React from 'react';
import { Component } from 'react';

class Home extends Component {
    state = {
        collectionsOfUrl: '',
        pokemonsDetail: []
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
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=200')
            .then(res => res.json())
            .then((data => {
                this.setState({
                    collectionsOfUrl: data.results
                }, () => {
                    getPokemonsData();
                })
            }))
    }





    render() {
        console.log(this.state.pokemonsDetail);
        return (
            <section className={'main-bg'}>
                <div className={'content box'}>

                </div>
            </section>
        );
    }
}
export default Home;