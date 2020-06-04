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
                        // console.log(item.url);
                        fetch(item.url)
                            .then(res => res.json())
                            .then((result) => {
                                this.setState({
                                    pokemonsDetail: [...this.state.pokemonsDetail, result]
                                })
                            })
                    })
                })
            }))
    }



    render() {
        console.log(pokemonsDetail);
        console.log(collectionsOfUrl);
        return (
            <section className={'main-bg'}>
                <div className={'content box'}>

                </div>
            </section>
        );
    }
}
export default Home;