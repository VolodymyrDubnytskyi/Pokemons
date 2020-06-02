import React, { Component } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

class MainScreen extends Component {
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((res)=> console.log(res))
    }
    render() {
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