import React from 'react';
import { Component } from 'react';

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
                    this.state.collectionsOfUrl.map((item) => {
                        console.log(item);
                        fetch(item.url)
                            .then(res => res.json())
                            .then((result) => {
                                pokemonsDetail: [...this.state.pokemonsDetai, result]
                            })
                    })
                })
            }))
    }



    render() {
        return (
            <section className={'main-bg'}>
                <div className={'content box'}>

                </div>
            </section>
        );
    }
}
export default Home;