import React from 'react';
import { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=200`)
            .then(res => res.json())
            .then((data => {
                console.log(data);
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