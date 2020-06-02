import React, { Component } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

class MainScreen extends Component {
    state = {
        pokemons: ''
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((res) => res.json)
            .then((data) => this.setState({pokemons: data}));
    }
    render() {
        console.log(this.state.pokemons);
        return (
            <section className={'main-bg'}>
                <div className={'main-content'}>
                    {/* {pokiContent.length > 0 && pokiContent.map((item) => {
                    return (<div className={'main-content-box'}>
                        {item.name}
                    </div>);
                })} */}
                </div>
            </section>
        );
    }
}
export default MainScreen;